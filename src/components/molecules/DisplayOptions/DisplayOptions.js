import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  OptionsWrapper,
  Circles,
  OptionsList,
  ComponentContainer,
  Option,
  IconWrapper,
} from './DisplayOptions.style';
import { motion, AnimatePresence } from 'framer-motion';

const DisplayOptions = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleList = () => setIsOpen((prevState) => !prevState);

  const handleOptionClick = (callback) => {
    toggleList();
    callback();
  };

  const renderOptions = options.map((item) => (
    <Option
      key={item.name}
      onClick={() => handleOptionClick(item.optionFunction)}
    >
      <IconWrapper>{item.icon}</IconWrapper>
      <span>{item.name}</span>
    </Option>
  ));
  return (
    <ComponentContainer>
      <OptionsWrapper onClick={toggleList}>
        <Circles />
      </OptionsWrapper>
      <AnimatePresence>
        {isOpen && (
          <OptionsList
            as={motion.div}
            layout
            animate={{ opacity: 0.9, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0 }}
          >
            {options && renderOptions}
          </OptionsList>
        )}
      </AnimatePresence>
    </ComponentContainer>
  );
};

DisplayOptions.propTypes = {};

export default DisplayOptions;
