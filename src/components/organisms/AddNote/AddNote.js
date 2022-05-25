import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import FormField from 'components/molecules/FormField/FormField';
import { Wrapper, InlineWrapper } from './AddNote.style';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { pushDatabase } from 'actions/databaseActions';
import { useDispatch, useSelector } from 'react-redux';

const AddNote = ({ handleClose, recipeName }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.firebase.auth);
  const fieldRef = useRef(null);
  const [value, setValue] = useState('');

  const handleOnChange = (e) => setValue(e.target.value);

  const addNote = () => {
    if (!value && fieldRef.current) return fieldRef.current.focus();
    const ref = `users/${auth.uid}/notes/${recipeName}`;
    const message = 'Dodano nową notatkę';
    const object = {
      body: value,
    };

    dispatch(pushDatabase(ref, object, message));
    handleClose();
    setValue('');
  };

  return (
    <Wrapper>
      <Paragraph size="big">Dodaj notatkę</Paragraph>
      <FormField
        ref={fieldRef}
        textareaSize
        type="text"
        id="addNote"
        name="addNote"
        placeholder="treść notatki..."
        value={value}
        onChange={handleOnChange}
      />
      <InlineWrapper>
        <Button onClick={addNote}>dodaj notatkę</Button>
        <Button secondary onClick={handleClose}>
          wróć
        </Button>
      </InlineWrapper>
    </Wrapper>
  );
};

AddNote.propTypes = {};

export default AddNote;
