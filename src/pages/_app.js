import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
import 'rc-drawer/assets/index.css';
import 'react-modal-video/css/modal-video.min.css';
import 'swiper/swiper-bundle.min.css';
import 'typeface-dm-sans';
import {ChakraProvider} from '@chakra-ui/react'
import { ApolloProvider,CSSRest } from '@apollo/client';
import { useApollo } from "../utils/apollo-client";
 
import {RecoilRoot} from 'recoil'
import '../theme/style.css'
export default function CustomApp({ Component, pageProps,apollo }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);
    const apolloClient=useApollo(pageProps.initialApolloState)
  return (
    
    <RecoilRoot>
    <ApolloProvider client={apolloClient}>
  <Component {...pageProps} />
  </ApolloProvider>
  </RecoilRoot>
  )
}
