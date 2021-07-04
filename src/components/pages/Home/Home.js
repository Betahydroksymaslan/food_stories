import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from 'components/templates/PageWrapper/PageWrapper';
import { logout } from 'actions/authActions';
import { useDispatch } from 'react-redux';

const Home = props => {
    const dispatch = useDispatch()
    return (
        <PageWrapper>
            HOME
            <button onClick={() => dispatch(logout())}>wyloguj</button>
        </PageWrapper>
    );
};

Home.propTypes = {
    
};

export default Home;