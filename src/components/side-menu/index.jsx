import React from 'react';
import './side-menu.scss';
import { NavLink } from 'react-router-dom';
import logo from 'assets/smart-cow-video-logo.svg';
import { useAuth } from "contexts/auth";
import ButtonIcon from 'components/button-icon';

const SideMenu = ({ ...rest }) => {

  const { isLogged } = useAuth();

  return (
    <aside {...rest} className='side-menu' role="navigation">
      <div className='side-menu-top'>
        <NavLink to='/' role="menubutton"><img width='34px' src={logo} className='logo' alt="logo" /></NavLink>
        {isLogged ? (
          <div className='menu-buttons'>
            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to='/create-video' role="menubutton"><ButtonIcon icon='create' /></NavLink>
            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to='/browse' role="menubutton"><ButtonIcon icon='browse' /></NavLink>
          </div>
        ) : null }
      </div>
      {isLogged && (
        <div className='side-menu-bottom'>
          <NavLink to='/my-account' role="menubutton"><ButtonIcon data-testid='user-icon' icon='user' size='lg'/></NavLink>
        </div>
      )}
    </aside>
  );
};

SideMenu.propTypes = {};

export default SideMenu;

