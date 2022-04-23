import React from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import Header from 'components/header';
import Button from 'components/button';
import Tabs from 'components/tabs';
import ActorPicker from 'components/actor-picker';
import VoicePicker from 'components/voice-picker';
import AlignmentSelector from 'components/alignment-selector';
import VideoInfosDropdown from 'components/video-infos-dropdown';
import Loading from 'components/loading';
import VideoPreview from 'components/video-preview';
import { useVideos } from "contexts/videos";

const CreateVideo = () => {

  const {
    newVideo,
    isLoading,
    isValid,
    selectedActor,
    availableActors,
    availableVoices,
    selectAlignment,
    saveVideo,
    selectActor,
    selectVoice,
    setVideoTitle,
    updateTags } = useVideos();
  const navigate = useNavigate();

  const handleSaveVideo = () => {

    saveVideo(() => {
      navigate('/browse', { replace: true });
    });
  };

  return (
    <div>
      <div>
        <Header leftElement={<VideoInfosDropdown newVideoInfos={newVideo.infos} onVideoTitleChange={setVideoTitle} onTagToggle={updateTags} onSaveRequest={() => {}} />} hasBorder>
          <Button disabled={isLoading}>Cancel</Button>
          <Button variant="primary" disabled={!isValid || isLoading} onClick={handleSaveVideo}>Save</Button>
        </Header>
        <Container fluid style={{ margin: '0 -15px' }}>
          <Row>
            <Col xs={12} lg={6}>
              <VideoPreview actor={selectedActor} />
            </Col>
            <Col xs={12} lg={6}>
              <Tabs>
                <div label="Actor">
                  <ActorPicker actors={availableActors} selectedActorId={newVideo?.actor} onActorSelect={selectActor} />
                </div>
                <div label="Voice">
                  <VoicePicker voices={availableVoices} selectedVoiceId={newVideo?.voice} onVoiceSelect={selectVoice} />
                </div>
                <div label="Alignment">
                  <AlignmentSelector selectedAlignment={newVideo.alignment} onAlignmentSelect={selectAlignment} />
                </div>
                <div label="Background">TO DO</div>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </div>
      <Loading isLoading={isLoading} fullScreen={true}></Loading>
    </div>
  );
};


export default CreateVideo;
