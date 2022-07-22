import React, { Component } from 'react';

import Main from './views/Home'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


class Index extends Component {
  render() {
    return (
    <>
      <Navbar />
        <Main />
      <Footer />
    </>
    )
  }
}

export default Index;
