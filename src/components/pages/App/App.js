import React from 'react';
import { AppWrapper } from './App.style';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'store/store';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from 'assets/firebase/firebase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/atoms/Loader/Loader';
import { isLoaded } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import PrivateRoute from 'helpers/PrivateRoute';
import {
  HOME,
  SIGNIN,
  SIGNUP,
  SETTINGS,
  RECIPES,
  FAVOURITES,
  TABS,
} from 'constants/routes';
import Recipe from '../Recipe/Recipe';
import Login from 'components/pages/Login/Login';
import Register from 'components/pages/Register/Register';
import Home from 'components/pages/Home/Home';
import Settings from 'components/pages/Settings/Settings';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Tabs from 'components/pages/Tabs/Tabs';
import Favourites from '../Favourites/Favourites';
import NoMatchFound from 'components/pages/NoMatchFound/NoMatchFound';
import { useMedia } from 'hooks/useMedia';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const media = useMedia('(max-width: 600px)');
  const store = configureStore();

  function AuthIsLoaded({ children }) {
    const auth = useSelector((state) => state.firebase.auth);
    if (!isLoaded(auth)) return <Loader />;
    return children;
  }

  const rrfConfig = {
    userProfile: 'users',
  };

  const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
  };

  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>
              <AppWrapper>
                <ToastContainer theme="light" position={media ? 'top-center' : 'top-right'} />

                <MainTemplate>
                  <Switch>
                    <Route path={SIGNIN} component={Login} />
                    <Route path={SIGNUP} component={Register} />
                    <PrivateRoute exact path={HOME} component={Home} />
                    <PrivateRoute path={SETTINGS} component={Settings} />
                    <PrivateRoute path={FAVOURITES} component={Favourites} />
                    <PrivateRoute path={TABS} component={Tabs} />
                    <PrivateRoute exact path={RECIPES} component={Recipe} />
                    <Route component={NoMatchFound} />
                  </Switch>
                </MainTemplate>
              </AppWrapper>
            </Router>
          </ThemeProvider>
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
