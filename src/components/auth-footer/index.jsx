import './auth-footer.scss';
import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import Button from 'components/button';
import Text from 'components/text';

const AuthFooter = ({ text, link, cta }) => {
  return (
    <div className="scv-auth-footer"><Text>{text}</Text> <Link to={link}><Button as='span' variant='link'>{cta}</Button></Link></div>
  );
};

AuthFooter.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  cta: PropTypes.string
};

export default AuthFooter;
