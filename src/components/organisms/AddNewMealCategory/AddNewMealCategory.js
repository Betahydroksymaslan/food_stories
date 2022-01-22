import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Close from 'components/atoms/Close/Close';
import {
  Wrapper,
  StyledForm,
  AddPhotoButton,
  ImagesWrapper,
} from './AddNewMealCategory.style';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import { useForm } from 'react-hook-form';
import { useWatchDatabase } from 'hooks/useWatchDatabase';
import { useDispatch, useSelector } from 'react-redux';
import { addDatabaseWithFiles } from 'actions/databaseActions';
import Loader from 'components/atoms/Loader/Loader';

const AddNewMealCategory = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const apiCallProgress = useSelector((state) => state.apiCallsReducer.apiCallProgress);

  const imageRef = useRef(null);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'categoryImage' && value.categoryImage[0]) {
        imageRef.current.setAttribute(
          'src',
          URL.createObjectURL(value.categoryImage[0])
        );
      } else if (name === 'categoryImage') {
        imageRef.current.removeAttribute('src');
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, imageRef]);

  const onSubmit = (data) => {
    if (watchDatabase) return; //IF PRODUCT EXISTS IN DATABASE

    const ref = `mealCategories/${data.categoryName}`;

    const dataObject = {
      name: data.categoryName,
      imageName: data.categoryImage[0].name,
    };

    const message = 'Dodano nową kategorię!';
    
    dispatch(
      addDatabaseWithFiles(ref, dataObject, message, data.categoryImage[0], closeModal)
    );
  };

  const watchName = watch('categoryName');
  const watchDatabase = useWatchDatabase(
    `mealCategories/${watchName}`,
    watchName
  );

  return (
    <Wrapper>
      <Close closePosition="top-right" onClick={closeModal} />
      <Paragraph isBold size="big">
        Dodaj nową kategorię
      </Paragraph>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormField
          label="Nowa kategoria:"
          id="category"
          name="category"
          placeholder="np. azjatyckie"
          {...register('categoryName', { required: 'Wpisz kategorię!' })}
        />
        {errors.categoryName && (
          <ErrorMessage>{errors.categoryName.message}</ErrorMessage>
        )}
        {watchDatabase && (
          <ErrorMessage>Taka kategoria już istnieje</ErrorMessage>
        )}
        <Paragraph customMargin="30px 0 20px" isBold>
          Dodaj miniaturkę:
        </Paragraph>
        <ImagesWrapper>
          <AddPhotoButton
            accept="image/*"
            type="file"
            {...register('categoryImage', {
              required: 'wybierz miniaturkę!',
            })}
          />
          <img ref={imageRef} />
        </ImagesWrapper>
        {errors.categoryImage && (
          <ErrorMessage>{errors.categoryImage.message}</ErrorMessage>
        )}
        <Button isBig={true} disabled={apiCallProgress === 1} type="submit">
          dodaj kategorię
        </Button>
        {apiCallProgress === 1 ? <Loader /> : null}
      </StyledForm>
    </Wrapper>
  );
};

AddNewMealCategory.propTypes = {
  closeModal: PropTypes.func,
};

export default AddNewMealCategory;
