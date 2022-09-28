import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Router from "next/router";
import '../styles/table.css'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Toaster} from "react-hot-toast"
import { PersistGate } from 'redux-persist/integration/react';
import { wrapper, persistor } from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      Router.push(`/`);
    }
  }, [])

  return (
    <>
    <Toaster position='top-right'/>
    <PersistGate loading={null} persistor={persistor}>
    <Component {...pageProps} />
    </PersistGate>
    </>
  )
}

export default wrapper.withRedux(MyApp);




