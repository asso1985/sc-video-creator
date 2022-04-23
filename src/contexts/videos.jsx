import React, { useContext, createContext, useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';

export const VideosContext = createContext();

const ACTORS = [
  {
    id: 0,
    name: "Anna",
    avatar: "/actor_1.png"
  },
  {
    id: 2,
    name: "Yoyo",
    avatar: "/actor_2.png"
  },
  {
    id: 3,
    name: "Other",
    avatar: "/actor_3.png"
  },
  {
    id: 4,
    name: "Other",
    avatar: "/actor_4.png"
  },
  {
    id: 5,
    name: "Other",
    avatar: "/actor_5.png"
  },
  {
    id: 6,
    name: "Other",
    avatar: "/actor_6.png"
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

const BACKGROUNDS = [
  {
    id: 0,
    avatar: '/bg_1.jpg'
  },
  {
    id: 1,
    avatar: '/bg_2.jpg'
  },
  {
    id: 2,
    avatar: '/bg_3.jpg'
  },
  {
    id: 3,
    avatar: '/bg_4.jpg'
  },
  {
    id: 4,
    avatar: '/bg_5.jpg'
  },
  {
    id: 5,
    avatar: '/bg_6.jpg'
  }
];

const fakeVideoApi = {
  save(newVideo, callback) {
    setTimeout(callback, 1500 ); // fake async
  }
};

const valueExist = (value) => value !== undefined;

export const VideosProvider = ({ children }) => {

  const initialState = {
    alignment: 'left',
    background: {},
    script: '',
    voice: {},
    actor: ACTORS[0],
    title: 'Choose a name',
    tags: []
  };

  const [newVideo, setNewVideo] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [savedVideos, setSavedVideos] = useState([]);

  useEffect(() => {
    const savedVideos = JSON.parse(localStorage.getItem('savedVideos')) || [];
    setSavedVideos(savedVideos);
  }, []);

  const updateVideoInfos = useCallback((prop, value) => {
    setNewVideo((prevState) => ({
      ...prevState,
      [prop]: value
    }));
  }, [newVideo]);

  const selectActor = useCallback((actorId) => {
    setNewVideo({
      ...newVideo,
      actor: ACTORS.find((actor) => actor.id === actorId)
    });
  }, [newVideo]);

  const selectVoice = useCallback((voiceId) => {
    setNewVideo({
      ...newVideo,
      voice: VOICES.find((voice) => voice.id === voiceId)
    });
  }, [newVideo]);

  const selectBackground = useCallback((backgroundId) => {
    setNewVideo({
      ...newVideo,
      background: BACKGROUNDS.find((bg) => bg.id === backgroundId)
    });
  }, [newVideo]);

  const updateTags = useCallback((tag) => {
    setNewVideo({
      ...newVideo,
      tags: newVideo.tags.includes(tag) ? newVideo.tags.filter((item) => item !== tag) : [ ...newVideo.tags, tag]
    });
  }, [newVideo]);

  const saveVideo = useCallback((callback) => {
    setIsLoading(true);
    return fakeVideoApi.save(newVideo, () => {
      const savedVideos = JSON.parse(localStorage.getItem('savedVideos')) || [];

      setSavedVideos([...savedVideos, newVideo]);

      localStorage.setItem('savedVideos', JSON.stringify([...savedVideos, newVideo]));
      setNewVideo(initialState);
      setIsLoading(false);
      callback && callback();
    });
  }, [newVideo]);

  const isValid = valueExist(newVideo.actor) && valueExist(newVideo.voice) && valueExist(newVideo.alignment);

  const availableActors = ACTORS;
  const availableVoices = VOICES;
  const availableBackgrounds = BACKGROUNDS;

  const selectedActor = availableActors.find((actor) => actor.id === newVideo.actor);

  const value = {
    selectedActor,
    savedVideos,
    newVideo,
    isLoading,
    isValid,
    availableActors,
    availableVoices,
    availableBackgrounds,
    saveVideo,
    selectActor,
    selectVoice,
    selectBackground,
    updateVideoInfos,
    updateTags
  };

  return <VideosContext.Provider value={value}>{children}</VideosContext.Provider>;
};

VideosProvider.propTypes = {
  children: PropTypes.node
};

export const useVideos = () => {
  return useContext(VideosContext);
};
