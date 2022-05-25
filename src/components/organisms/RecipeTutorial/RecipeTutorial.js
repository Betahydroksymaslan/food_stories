import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  AnimationBox,
  LookMoreProductInfo,
  ProductName,
  ProductNamesWrapper,
  NextButton,
  DotsWrapper,
  Dot,
  BottomWrapper,
  StepWrapper,
  DeleteIconTut,
  EditIconTut,
  EndEditionTut,
  Option,
  AnimationWrapper,
} from './RecipeTutorial.style';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactComponent as EditIcon } from 'assets/icons/editIcon.svg';
import { RiHeartAddFill } from 'react-icons/ri';
import { BsQuestionLg } from 'react-icons/bs';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
    zIndex: 1,
  },
  hide: {
    zIndex: 0,
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: { x: 1000, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hide: {
    x: -1000,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const RecipeTutorial = ({ handleClose, objectName }) => {
  const pageFirst = (
    <StepWrapper
      key="stepOne"
      as={motion.div}
      variants={container}
      initial="hidden"
      animate="show"
      exit="hide"
    >
      <Paragraph size="big" as={motion.p} variants={item}>
        Poznaj szczegóły
      </Paragraph>
      <AnimationBox as={motion.div} variants={item}>
        <LookMoreProductInfo>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/food-stories-89472.appspot.com/o/ingredients_icons%2FbeerIcon.svg?alt=media&token=35d27182-aab9-422a-a0a4-9dda6d09fe40"
            alt="ikona produktu"
          />
          <ProductNamesWrapper
            as={motion.div}
            animate={{ y: [0, -40] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              delay: 1,
              repeatType: 'reverse',
              repeatDelay: 2,
              ease: [0.61, 0.07, 0.23, 0.89],
            }}
          >
            <ProductName>Piwo pszeniczne</ProductName>
            <ProductName extra>Pinta pszeniczne 5,7% 0.5L</ProductName>
          </ProductNamesWrapper>

          <span>250 ml</span>
        </LookMoreProductInfo>
      </AnimationBox>

      <Paragraph as={motion.p} variants={item}>
        Kliknij na składnik na liście aby zobaczyć więcej szczegółów takich, jak
        marka czy gramatura opakowania zakupionego produktu
      </Paragraph>
    </StepWrapper>
  );

  const pageSecond = (
    <StepWrapper
      key="stepTwo"
      as={motion.div}
      variants={container}
      initial="hidden"
      animate="show"
      exit="hide"
    >
      <Paragraph size="big" as={motion.p} variants={item}>
        Szybka edycja
      </Paragraph>
      <Paragraph as={motion.p} variants={item}>
        Jeśli potrzebujesz szybko sprawdzić, jak wyglądałby posiłek z inną
        ilością składników, bez części z nich, lub z jeszcze innymi, nie
        zawartymi oryginalnie w przepisie - masz taką mażliwość za pomocą
        szybkiej edycji!
      </Paragraph>
      <Paragraph as={motion.p} variants={item}>
        Aby ją uruchomić wystarczy kliknąć w przycisk edycji
        <EditIcon style={{ width: '18px' }} /> tuż obok nagłówka składników.
      </Paragraph>
    </StepWrapper>
  );

  const pageThird = (
    <StepWrapper
      key="stepThird"
      as={motion.div}
      variants={container}
      initial="hidden"
      animate="show"
      exit="hide"
    >
      <Paragraph size="big" as={motion.p} variants={item}>
        Dodawaj, usuwaj, zmieniaj
      </Paragraph>
      <Paragraph as={motion.p} variants={item}>
        <DeleteIconTut>+</DeleteIconTut> - usuń składnik
      </Paragraph>
      <Paragraph as={motion.p} variants={item}>
        <EditIconTut>&#9998;</EditIconTut> - edytuj składnik, aby zmienić jego
        ilość
      </Paragraph>
      <Paragraph as={motion.p} variants={item}>
        Aby dodać kolejny składnik, kliknij w przycisk u dołu listy
      </Paragraph>
      <Paragraph as={motion.p} variants={item}>
        Jeśli chcesz zakończyć edycję wystarczy kliknąć{' '}
        <EndEditionTut>&#10005; zakończ edycję</EndEditionTut> znajdujący się u
        dołu ekranu
      </Paragraph>
    </StepWrapper>
  );

  const pageFourth = (
    <StepWrapper
      key="stepFourth"
      as={motion.div}
      variants={container}
      initial="hidden"
      animate="show"
      exit="hide"
    >
      <Paragraph size="big" as={motion.p} variants={item}>
        Zapisz wariant
      </Paragraph>
      <Paragraph as={motion.p} variants={item}>
        Jeśli nie chcesz utracić poczynionych zmian, możesz je zapisać jako nowy
        wariant! Z menu kontekstowego w prawym, górnym rogu wybierz
      </Paragraph>
      <Option as={motion.span} variants={item}>
        <RiHeartAddFill /> Dodaj wariant
      </Option>
      <Paragraph as={motion.p} variants={item}>
        Nadaj mu nazwę, wybierz kolor ikony i od teraz będzie już zawsze
        widoczny pod listą składników, w przepisie, dla którego został
        stworzony. Możesz stworzyć więcej niż jeden wariant
      </Paragraph>
    </StepWrapper>
  );

  const pageFifth = (
    <StepWrapper
      key="stepFifth"
      as={motion.div}
      variants={container}
      initial="hidden"
      animate="show"
      exit="hide"
    >
      <Paragraph size="big" as={motion.p} variants={item}>
        To już wszystko :)
      </Paragraph>
      <Paragraph as={motion.p} variants={item}>
        Jeśli będziesz tego potrzebować, zawsze możesz tu wrócić wybierając
      </Paragraph>
      <Option as={motion.span} variants={item}>
        <BsQuestionLg /> Pomoc
      </Option>

      <Paragraph as={motion.p} variants={item}>
        z menu kontekstowego
      </Paragraph>
    </StepWrapper>
  );

  const pages = [pageFirst, pageSecond, pageThird, pageFourth, pageFifth];

  const [page, setPage] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPage = () => setCurrentIndex((prevState) => prevState + 1);

  const renderDots = pages.map((item, index) => (
    <Dot current={index === currentIndex} key={index} />
  ));

  const handleClick = () => {
    const localStorageItem = JSON.parse(localStorage.getItem(objectName));

    const newStorageItem = {
      ...localStorageItem,
      recipeTutorialOn: false,
    };

    localStorage.setItem(objectName, JSON.stringify(newStorageItem));
    handleClose();
  };

  useEffect(() => {
    setPage(pages[currentIndex]);
  }, [setPage, currentIndex]);

  return (
    <Wrapper>
      <AnimationWrapper>
        <AnimatePresence>{page && page}</AnimatePresence>
      </AnimationWrapper>

      <BottomWrapper>
        {currentIndex < pages.length - 1 ? (
          <NextButton onClick={nextPage}>Zrozumiałem, idę dalej!</NextButton>
        ) : (
          <NextButton onClick={handleClick}>Super, kończę!</NextButton>
        )}
        <DotsWrapper>{renderDots}</DotsWrapper>
      </BottomWrapper>
    </Wrapper>
  );
};

RecipeTutorial.propTypes = {};

export default RecipeTutorial;
