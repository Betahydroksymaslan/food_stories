import React, { useState, useEffect } from 'react';
import { db } from 'assets/firebase/firebase';
import PropTypes from 'prop-types';
import {
  AsideWrapper,
  UserInfoWrapper,
  Header,
  MealsWrapper,
} from './Aside.style';
import { useSelector } from 'react-redux';
import { ReactComponent as UserIcon } from 'assets/icons/userIcon.svg';
import FoodBoxShortcut from 'components/molecules/FoodBoxShortcut/FoodBoxShortcut';
import { motion, AnimatePresence } from 'framer-motion';
import { useMedia } from 'hooks/useMedia';

const Aside = (props) => {
  const [tabs, setTabs] = useState([]);
  const auth = useSelector((state) => state.firebase.auth);
  const media = useMedia('(min-width: 600px)');

  const renderTabs = tabs.map((item) => (
    <FoodBoxShortcut
      key={item.mealname}
      tabName={item.mealname}
      tabImage={item.mainImage}
    />
  ));

  useEffect(() => {
    const ref = db.ref(`/users/${auth.uid}/fastList`);

    const listener = ref.on('value', (snapshot) => {
      const data = snapshot.val();
      const temporaryData = [];
      for (let id in data) {
        temporaryData.push({
          mealname: data[id].mealname,
          mainImage: data[id].mainImage,
        });
      }
      setTabs(temporaryData);
    });

    return () => ref.off('value', listener);
  }, []);

  return media ? (
    <AsideWrapper>
      <UserInfoWrapper>
        <UserIcon />
        <span>{auth.displayName}</span>
      </UserInfoWrapper>
      <Header>Zakładki</Header>
      <MealsWrapper as={motion.div} layout>
        <AnimatePresence>{tabs && renderTabs}</AnimatePresence>
      </MealsWrapper>
    </AsideWrapper>
  ) : null;
};

Aside.propTypes = {};

export default Aside;
