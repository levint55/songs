import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "title1",
      duration: "4:05",
    },
    {
      title: "title2",
      duration: "3:05",
    },
    {
      title: "title3",
      duration: "2:05",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
