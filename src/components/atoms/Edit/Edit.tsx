import React from 'react';
import { ReactComponent as EditIcon } from 'assets/icons/editIcon.svg';
import { Wrapper } from './Edit.style';

type EditProps = { callback: () => void }

const Edit = ({ callback }: EditProps) => {
  return (
    <Wrapper onClick={callback}>
      <EditIcon />
    </Wrapper>
  );
};

export default Edit;
