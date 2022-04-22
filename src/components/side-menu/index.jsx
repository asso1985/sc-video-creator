import React from 'react';
import './side-menu.scss';
import { NavLink } from 'react-router-dom';
import logo from 'assets/smart-cow-video-logo.svg';
import { useAuth } from "contexts/auth";
import ButtonIcon from 'components/button-icon';

const SideMenu = ({ ...rest }) => {

  const { isLogged } = useAuth();

  return (
    <aside {...rest} className='side-menu'>
      <div className='side-menu-top'>
        <img width='34px' src={logo} className='logo' alt="logo" />
        {isLogged ? (
          <div className='menu-buttons'>
            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to='/create-video'><ButtonIcon icon='create' /></NavLink>
            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to='/browse'><ButtonIcon icon='browse' /></NavLink>
          </div>
        ) : null }
      </div>
      {isLogged && (
        <div className='side-menu-bottom'>
          <NavLink to='/my-account'><ButtonIcon data-testid='user-icon' icon='user' size='lg'/></NavLink>
        </div>
      )}
    </aside>
  );
};

SideMenu.propTypes = {};

export default SideMenu;

