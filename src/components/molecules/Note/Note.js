import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, IconWrapper, EditBar } from './Note.style';
import { CgOptions } from 'react-icons/cg';
import { AiTwotoneDelete } from 'react-icons/ai';
import { AiTwotoneEdit } from 'react-icons/ai';
import { AnimatePresence, motion } from 'framer-motion';
import { FcCheckmark } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { updateDatabase, removeDatabase } from 'actions/databaseActions';

const Note = ({ children, id, recipeName }) => {
  const auth = useSelector((state) => state.firebase.auth);
  const dispatch = useDispatch();

  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const toggleOptions = () => setIsOptionsVisible((prevState) => !prevState);

  const hideOptions = () => setIsOptionsVisible(false);

  const inputRef = useRef(null);
  const [editOn, setEditOn] = useState(false);
  const startEditing = () => {
    setEditOn(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const endEditing = () => setEditOn(false);
  const updateComment = () => {
    const ref = `users/${auth.uid}/notes/${recipeName}/${id}`;
    const object = { body: value };
    const message = 'Zmieniono treść notatki';

    dispatch(updateDatabase(ref, object, message));
    hideOptions();
    endEditing();
  };
  const deleteComment = () => {
    const ref = `users/${auth.uid}/notes/${recipeName}/${id}`;
    const message = 'Usunięto notatkę';

    dispatch(removeDatabase(ref, message));
  };

  const initialValue = children;
  const [value, setValue] = useState(initialValue);
  const handleOnChange = (e) => setValue(e.target.value);

  useEffect(() => {
    if (!inputRef.current) return;

    inputRef.current.focus();
  }, [inputRef]);

  return (
    <AnimatePresence>
      <Wrapper
        as={motion.div}
        key={id}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ scale: 0, opacity: 0 }}
      >
        <IconWrapper onClick={toggleOptions}>
          <CgOptions />
        </IconWrapper>
        {editOn ? (
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={handleOnChange}
          />
        ) : (
          <span>{children}</span>
        )}

        <AnimatePresence>
          {isOptionsVisible && (
            <EditBar
              key="editBar"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              as={motion.div}
            >
              {editOn ? (
                <span onClick={updateComment}>
                  <FcCheckmark />
                </span>
              ) : (
                <span onClick={startEditing}>
                  <AiTwotoneEdit />
                </span>
              )}
              <span onClick={deleteComment}>
                <AiTwotoneDelete />
              </span>
            </EditBar>
          )}
        </AnimatePresence>
      </Wrapper>
    </AnimatePresence>
  );
};

Note.propTypes = {};

export default Note;
