import React, { useState } from "react";
import PropTypes from 'prop-types';
import VoicePreview from "./components/voice-preview";

const VoicePicker = ({ voices, selectedVoiceId, onVoiceSelect }) => {
  const [playingId, setPlayingId ] = useState(null);

  return (
    <div className="scv-voices-list">
      {voices.map((voice) => (
        <VoicePreview
          voice={voice}
          key={voice.id}
          isSelected={selectedVoiceId === voice.id}
          playingId={playingId}
          onPlayStart={setPlayingId}
          onVoiceSelect={onVoiceSelect} />
      ))}
    </div>
  );
};

VoicePicker.propTypes = {
  voices: PropTypes.arrayOf(PropTypes.shape({
    mp3: PropTypes.string,
    lang: PropTypes.string,
    id: PropTypes.number
  })),
  selectedVoiceId: PropTypes.number,
  onVoiceSelect: PropTypes.func
};

export default VoicePicker;
