import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledForm, InlineWrapper } from './AddNewMealVariant.style';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import FormField from 'components/molecules/FormField/FormField';
import { useForm } from 'react-hook-form';

const AddNewMealVariant = ({ handleClose, callback }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    callback(data.variantName, data.variantColor);
    handleClose();
  };

  return (
    <Wrapper>
      <Paragraph size="big">Dodaj nowy wariant</Paragraph>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormField
          id="variantName"
          name="variantName"
          label="nazwij wariant"
          {...register('variantName', { required: 'Nazwij wariant!' })}
        />

        <FormField
          id="variantColor"
          name="variantColor"
          defaultValue="#ffffff"
          label="wybierz kolor ikony"
          type="color"
          {...register('variantColor', { required: 'Nazwij wariant!' })}
        />
        <InlineWrapper>
          <Button type="submit">dodaj</Button>
          <Button type="button" onClick={handleClose} secondary>
            wróć
          </Button>
        </InlineWrapper>
      </StyledForm>
    </Wrapper>
  );
};

AddNewMealVariant.propTypes = {};

export default AddNewMealVariant;
