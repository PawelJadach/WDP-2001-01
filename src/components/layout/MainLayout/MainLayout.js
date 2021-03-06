import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Compare from '../../features/Compare/CompareContainer';

class MainLayout extends Component {
  componentDidMount() {
    this.resize();
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    if (window.innerWidth < 576) {
      this.props.changeMode('mobile');
    } else if (window.innerWidth < 1000) {
      this.props.changeMode('tablet');
    } else if (window.innerWidth < 1200) {
      this.props.changeMode('laptop');
    } else if (window.innerWidth > 1200) {
      this.props.changeMode('desktop');
    }
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        <Compare />
        {children}
        <Footer />
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node,
  changeMode: PropTypes.func,
};

export default MainLayout;
