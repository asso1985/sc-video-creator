import React from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import Header from 'components/header';
import Button from 'components/button';
import ButtonGroup from 'components/button-group';
import Tabs from 'components/tabs';
import ImagePicker from 'components/image-picker';
import VoicePicker from 'components/voice-picker';
import AlignmentSelector from 'components/alignment-selector';
import VideoInfosDropdown from 'components/video-infos-dropdown';
import Loading from 'components/loading';
import VideoPreview from 'components/video-preview';
import Accordion from 'components/accordion';
import { useVideos } from "contexts/videos";

const CreateVideo = () => {

  const {
    newVideo,
    isLoading,
    isValid,
    availableActors,
    availableVoices,
    availableBackgrounds,
    saveVideo,
    selectActor,
    selectVoice,
    updateVideoInfos,
    selectBackground
  } = useVideos();
  const navigate = useNavigate();

  const handleSaveVideo = () => {

    saveVideo(() => {
      navigate('/browse', { replace: true });
    });
  };

  const handleOnBaseInfosSave = ([title, tags]) => {
    updateVideoInfos('title', title);
    updateVideoInfos('tags', tags);
  };

  return (
    <div>
      <div>
        <Header leftElement={<VideoInfosDropdown newVideoInfos={newVideo} onSave={handleOnBaseInfosSave} />} hasBorder>
          <ButtonGroup align='right'>
            <Button disabled={isLoading}>Cancel</Button>
            <Button variant="primary" disabled={!isValid || isLoading} onClick={handleSaveVideo}>Save</Button>
          </ButtonGroup>
        </Header>
        <Container fluid style={{ margin: '0 -15px' }}>
          <Row>
            <Col xs={12} lg={6}>
              <VideoPreview video={newVideo} onScriptChange={(script) => updateVideoInfos('script', script)} />
            </Col>
            <Col xs={12} lg={6}>
              <Tabs>
                <div label="Actor">
                  <ImagePicker images={availableActors} selectedImageId={newVideo?.actor.id} onImageSelect={selectActor} />
                </div>
                <div label="Voice">
                  <VoicePicker voices={availableVoices} selectedVoiceId={newVideo?.voice.id} onVoiceSelect={selectVoice} />
                </div>
                <div label="Alignment">
                  <AlignmentSelector selectedAlignment={newVideo.alignment} onAlignmentSelect={(alignment) => updateVideoInfos('alignment', alignment)} />
                </div>
                <div label="Background">
                  <Accordion initialOpen='Images'>
                    <div title="Images">
                      <ImagePicker images={availableBackgrounds} selectedImageId={newVideo?.background.id} onImageSelect={selectBackground} />
                    </div>
                    <div title="Solid Colors"><div>TO DO</div></div>
                    <div title="Videos"><div>TO DO</div></div>
                  </Accordion>
                </div>
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
