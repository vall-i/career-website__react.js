import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ScrollUp from '../../components/UI/ScrollUp/ScrollUp';

import './Layout.scss';

class Layout extends Component {
  state = {
    hasScrolled: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onScrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollHandler);
  }

  onScrollHandler = () => {
    if (!this.state.hasScrolled && window.pageYOffset > 400) {
      this.setState({ hasScrolled: true });
    } else if (this.state.hasScrolled && window.pageYOffset <= 400) {
      this.setState({ hasScrolled: false });
    }
  };

  scrollToTopHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  render() {
    return (
      <div className='layout'>
        <Header />
        <main>{this.props.children}</main>
        <Footer />
        {this.state.hasScrolled && (
          <ScrollUp clicked={this.scrollToTopHandler} />
        )}
      </div>
    );
  }
}

export default Layout;
