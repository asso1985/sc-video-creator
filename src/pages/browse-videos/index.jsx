import React from "react";
import { Link } from "react-router-dom";
import { useVideos } from "contexts/videos";
import Header from 'components/header';
import Button from 'components/button';
import VieoItemList from 'components/video-item-list';
import ScrollContainer from 'components/scroll-container';

const BrowseVideos = ({}) => {
  const { savedVideos } = useVideos();

  return (
    <div>
      <Header title="Saved videos" hasBorder={true}>
        <Link to="/create-video"><Button variant="primary">Create new</Button></Link>
      </Header>
      <ScrollContainer>
        <VieoItemList videos={savedVideos} />
      </ScrollContainer>
    </div>
  );
};

export default BrowseVideos;
