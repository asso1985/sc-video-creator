import React from "react";
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-grid-system';
import Empty from 'components/empty';
import VideoItem from './components/video-item';

const VideoItemList = ({ videos }) => {

  if (videos.length === 0) {
    return <Empty cta='video' link='/create-video' />;
  }

  return (
    <Container fluid style={{ margin: '0 -15px' }}>
      <Row>
        {videos.map((video, index) => (
          <Col xs={12} sm={6} lg={4} xl={3} key={index} style={{ marginBottom: '20px' }}>
            <VideoItem video={video} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

VideoItemList.propTypes = {
  videos: PropTypes.array
};

export default VideoItemList;
