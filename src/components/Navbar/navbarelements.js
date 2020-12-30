import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';
import {Nav} from 'react-bootstrap';

export const Navbar1 = styled(Navbar)`
  background-color: #020001;
  min-height: 70px;
`;

export const NavbarBrand = styled(Navbar.Brand)`
  color: white;
  font-size: 20px;
  padding-right: 1rem;
  // font-weight: bold;
  text-decoration: none;
  font-family: 'Nerko One';

  &:hover {
    color: white;
    text-decoration: none;
  }
`;

export const Copyright = styled(Nav.Link)`
  color: white;
  &:hover {
    color: white;
    text-decoration: none;
  }
`;

export const toggleFullScreen = () => {
    var doc = window.document;
    var docEl = doc.documentElement;
  
    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
  
    if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
      requestFullScreen.call(docEl);
    }
    else {
      cancelFullScreen.call(doc);
    }
}