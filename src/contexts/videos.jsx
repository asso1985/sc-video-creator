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

const fakeVideoApi = {
  save(newVideo, callback) {
    setTimeout(callback, 1500 ); // fake async
  }
};

const valueExist = (value) => value !== undefined;

export const VideosProvider = ({ children }) => {

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
  const [savedVideos, setSavedVideos] = useState([]);

  useEffect(() => {
    const savedVideos = JSON.parse(localStorage.getItem('savedVideos')) || [];
    setSavedVideos(savedVideos);
  }, []);

  const selectActor = useCallback((actorId) => {
    setNewVideo({
      ...newVideo,
      actor: ACTORS.find((actor) => actor.id === actorId).id
    });
  }, [newVideo]);

  const selectVoice = useCallback((voiceId) => {
    setNewVideo({
      ...newVideo,
      voice: VOICES.find((voice) => voice.id === voiceId).id
    });
  }, [newVideo]);

  const selectAlignment = useCallback((alignment) => {
    setNewVideo({
      ...newVideo,
      alignment
    });
  }, [newVideo]);

  const setVideoTitle = useCallback((title) => {
    setNewVideo({
      ...newVideo,
      infos: {
        ...newVideo.infos,
        title
      }
    });
  }, [newVideo]);

  const updateTags = useCallback((tag) => {
    setNewVideo({
      ...newVideo,
      infos: {
        ...newVideo.infos,
        tags: newVideo.infos.tags.includes(tag) ? newVideo.infos.tags.filter((item) => item !== tag) : [ ...newVideo.infos.tags, tag]
      }
    });
  }, [newVideo]);

  const saveVideo = useCallback((callback) => {
    setIsLoading(true);
    return fakeVideoApi.save(newVideo, () => {
      const savedVideos = JSON.parse(localStorage.getItem('savedVideos')) || [];

      const newVideoData = {
        ...newVideo,
        actor: ACTORS.find((actor) => actor.id === newVideo.actor),
        voice: VOICES.find((voice) => voice.id === newVideo.voice)
      };

      setSavedVideos([...savedVideos, newVideoData]);

      localStorage.setItem('savedVideos', JSON.stringify([...savedVideos, newVideoData]));
      setNewVideo(initialState);
      setIsLoading(false);
      callback && callback();
    });
  }, [newVideo]);

  const isValid = valueExist(newVideo.actor) && valueExist(newVideo.voice) && valueExist(newVideo.alignment);

  const availableActors = ACTORS;
  const availableVoices = VOICES;

  const selectedActor = availableActors.find((actor) => actor.id === newVideo.actor);

  const value = {
    selectedActor,
    savedVideos,
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

  return <VideosContext.Provider value={value}>{children}</VideosContext.Provider>;
};

VideosProvider.propTypes = {
  children: PropTypes.node
};

export const useVideos = () => {
  return useContext(VideosContext);
};
