import React from 'react';
import { AppWrapper } from './App.style';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from 'components/pages/Login/Login';
import Register from 'components/pages/Register/Register';
import Home from 'components/pages/Home/Home';
import { Provider } from 'react-redux';
import configureStore from 'store/store';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from 'assets/firebase/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/atoms/Loader/Loader';
import { isLoaded } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import PrivateRoute from 'helpers/PrivateRoute';
import { HOME, SIGNIN, SIGNUP } from 'constants/routes';

toast.configure();

function App() {
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
            <AppWrapper className="App">
              <ToastContainer />
              <Router>
                <Switch>
                  <Route path={SIGNIN} component={Login} />
                  <Route path={SIGNUP} component={Register} />
                  <PrivateRoute path={HOME} component={Home} />
                </Switch>
              </Router>
            </AppWrapper>
          </ThemeProvider>
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
