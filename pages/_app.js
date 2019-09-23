import React from 'react'
import App from 'next/app'
import '@styles/index.scss'
import {connect, Provider} from "react-redux"
import {serverCommunicationChecking} from "../store/modules/auth/actions"
import store from "../store"
import withRedux from 'next-redux-wrapper'

@connect(null, {serverCommunicationChecking})

class CustomApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  static getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
    return {}
  }

  componentDidMount() {
    this.props.serverCommunicationChecking()
  }

  render() {
    const { Component, pageProps } = this.props

    return (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      )
  }
}

export default withRedux(() => store)(CustomApp)
