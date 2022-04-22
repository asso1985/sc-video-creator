import React from "react";
import { Link } from "react-router-dom";
import Header from 'components/header';
import Button from 'components/button';

const BrowseVideos = ({}) => {
  return (
    <div>
      <Header title="Saved videos">
        <Link to="/create-video"><Button variant="primary">Create new</Button></Link>
      </Header>
    </div>
  );
};

export default BrowseVideos;
