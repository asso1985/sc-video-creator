import './voice-preview.scss';
import React, { useCallback } from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Text from "components/text";
import { ReactComponent as Play } from 'assets/play.svg';
import { ReactComponent as Pause } from 'assets/pause.svg';
import { ReactComponent as Mp3 } from 'assets/mp3.svg';
import { ReactComponent as Mp3Playing } from 'assets/mp3_playing.svg';

const VoicePreview = ({ voice, isSelected, playingId, onVoiceSelect, onPlayStart }) => {
  const { lang, id } = voice;

  const isPlaying = playingId === id;

  const cs = classNames('scv-voice-preview', {
    [`selected`]: isSelected
  });

  const handleOnVoiceSelect = useCallback(() => {
    onVoiceSelect(id);
  }, [id, onVoiceSelect]);

  const handleOnPlay = useCallback((e) => {
    e.stopPropagation();
    onPlayStart && onPlayStart(playingId === id ? null : id);
  }, [id, isPlaying, onPlayStart]);

  return (
    <div className={cs} onClick={handleOnVoiceSelect}>
      <button onClick={handleOnPlay}>
        {isPlaying ? <Pause width={40} height={40} /> : <Play width={40} height={40} />}
      </button>
      <div className='scv-voice-preview__media'>
        <Text size='sm' variant={isSelected ? 'blue' : 'gray'}>{lang}</Text>
        <div>{isPlaying ? <Mp3Playing height={37} width='100%' /> : <Mp3 height={37} width='100%' />}</div>
      </div>

    </div>
  );
};

VoicePreview.propTypes = {
  voice: PropTypes.shape({
    mp3: PropTypes.string,
    lang: PropTypes.string,
    id: PropTypes.number
  }),
  playingId: PropTypes.number,
  isSelected: PropTypes.bool,
  onVoiceSelect: PropTypes.func,
  onPlayStart: PropTypes.func
};

export default VoicePreview;
