import './browse-video.scss';
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-grid-system';
import { useCreateVideo } from "contexts/new-video";
import Header from 'components/header';
import Button from 'components/button';
import Tag from 'components/tag';
import Text from 'components/text';

const BrowseVideos = ({}) => {
  const { savedVideos } = useCreateVideo();

  return (
    <div>
      <Header title="Saved videos" hasBorder={true}>
        <Link to="/create-video"><Button variant="primary">Create new</Button></Link>
      </Header>
      <div className="scv-scroll-container">
        <Container fluid style={{ margin: '0 -15px' }}>
          <Row>
            {savedVideos.map((video, index) => (
              <Col xs={12} sm={6} lg={4} xl={3} key={index} style={{ marginBottom: '20px' }}>
                <div className="video-item">
                  <img src={video.actor.avatar} alt={video.actor.name} />
                  <Text size='lg'>{video.infos.title}</Text>
                  <div className='video-item__tags'>
                    {video.infos.tags.map((tag, index) => (<Tag name={tag} key={index} />))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BrowseVideos;
