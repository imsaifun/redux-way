import { configureStore } from '@reduxjs/toolkit';
import VideosReducers from "./videos/videos"

export const store = configureStore({
  reducer: {
    videos: VideosReducers,
  },
});