import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route, useLocation, withRouter
} from "react-router-dom";
import Header from './components/Commons/Header';
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';
import ServicePage from './components/Services/ServicePage';
import ContactPage from './components/Contact/ContactPage';
import BlogPage from './components/Blogs/BlogPage';
import SinglePost from './components/Blogs/SinglePost';

export default class App extends React.Component {

  render() {
    function _ScrollToTop(props) {
      const { pathname } = useLocation();
      useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
      return props.children
    }
    const ScrollToTop = withRouter(_ScrollToTop);
    return (
      <div className="app">
        <Router>
          <ScrollToTop>
            <Header />

            {/* <Switch> */}
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/about" component={AboutPage}></Route>
            <Route path="/services" component={ServicePage}></Route>
            <Route path="/contact" component={ContactPage}></Route>
            <Route path="/blogs" component={BlogPage}></Route>
            <Route path="/singlepost" component={SinglePost}></Route>
            {/* </Switch> */}
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}
