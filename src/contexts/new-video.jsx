import React, { useContext, createContext, useState } from "react";
import PropTypes from 'prop-types';

export const NewVideoContext = createContext();

const ACTORS = [
  {
    id: 0,
    name: "Anna",
    avatar: "src/assets/actor_1.png"
  },
  {
    id: 2,
    name: "Yoyo",
    avatar: "src/assets/actor_2.png"
  },
  {
    id: 3,
    name: "Other",
    avatar: "src/assets/actor_3.png"
  },
  {
    id: 4,
    name: "Other",
    avatar: "src/assets/actor_4.png"
  },
  {
    id: 5,
    name: "Other",
    avatar: "src/assets/actor_5.png"
  },
  {
    id: 6,
    name: "Other",
    avatar: "src/assets/actor_6.png"
  }
];

const VOICES = [
  {
    id: 0,
    lang: "Asian",
    mp3: ""
  },
  {
    id: 2,
    lang: "British",
    mp3: ""
  },
  {
    id: 3,
    lang: "American",
    mp3: ""
  }
];

const fakeVideoApi = {
  save(newVideo, callback) {
    console.log(newVideo);
    setTimeout(callback, 1500 ); // fake async
  }
};

const valueExist = (value) => value !== undefined;

export const NewVideoProvider = ({ children }) => {

  const initialState = {
    alignment: 'left',
    voice: 0,
    actor: 0,
    infos: {
      title: 'Choose a name',
      tags: []
    }
  };

  const [newVideo, setNewVideo] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const selectActor = (actorId) => {
    setNewVideo({
      ...newVideo,
      actor: ACTORS.find((actor) => actor.id === actorId).id
    });
  };

  const selectVoice = (voiceId) => {
    setNewVideo({
      ...newVideo,
      voice: VOICES.find((voice) => voice.id === voiceId).id
    });
  };

  const selectAlignment = (alignment) => {
    setNewVideo({
      ...newVideo,
      alignment
    });
  };

  const setVideoTitle = (title) => {
    setNewVideo({
      ...newVideo,
      infos: {
        ...newVideo.infos,
        title
      }
    });
  };

  const updateTags = (tag) => {
    setNewVideo({
      ...newVideo,
      infos: {
        ...newVideo.infos,
        tags: newVideo.infos.tags.includes(tag) ? newVideo.infos.tags.filter((item) => item !== tag) : [ ...newVideo.infos.tags, tag]
      }
    });
  };

  const saveVideo = (callback) => {
    setIsLoading(true);
    return fakeVideoApi.save(newVideo, () => {
      setNewVideo(initialState);
      setIsLoading(false);
      callback && callback();
    });
  };

  const isValid = valueExist(newVideo.actor) && valueExist(newVideo.voice) && valueExist(newVideo.alignment);

  const availableActors = ACTORS;
  const availableVoices = VOICES;

  const selectedActor = availableActors.find((actor) => actor.id === newVideo.actor);

  const value = {
    selectedActor,
    newVideo,
    isLoading,
    isValid,
    availableActors,
    availableVoices,
    saveVideo,
    selectAlignment,
    selectActor,
    selectVoice,
    setVideoTitle,
    updateTags
  };

  return <NewVideoContext.Provider value={value}>{children}</NewVideoContext.Provider>;
};

NewVideoProvider.propTypes = {
  children: PropTypes.node
};

export const useCreateVideo = () => {
  return useContext(NewVideoContext);
};
