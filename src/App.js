import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import AppRoute from './routes/Route';
import { loadUser } from './reducers/useReducers';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const theme = extendTheme({
    colors: {
      primaryBlack: {
        100: '#1a1a1a',
      },
      primaryGreen: {
        100: '#0bd46e',
      },
    },
  });

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (localStorage.getItem('user') !== null) {
        let user = JSON.parse(localStorage.getItem('user') ?? '{}');
        dispatch(loadUser(user));
      } else if (Cookies.get('user') !== undefined) {
        let user = JSON.parse(Cookies.get('user') ?? '{}');
        dispatch(loadUser(user));
      }
    })();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<AppRoute />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
