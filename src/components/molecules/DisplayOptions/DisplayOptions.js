import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { OptionsWrapper, Circles, OptionsList } from './DisplayOptions.style';
import { motion, AnimatePresence } from 'framer-motion';

const DisplayOptions = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleList = () => setIsOpen((prevState) => !prevState);

  const renderOptions = options.map((item) => (
    <span key={item.name} onClick={item.optionFunction}>
      {item.name}
    </span>
  ));
  return (
    <OptionsWrapper onClick={toggleList}>
      <Circles>
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
      </Circles>
    </OptionsWrapper>
  );
};

DisplayOptions.propTypes = {};

export default DisplayOptions;
