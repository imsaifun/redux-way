import { configureStore } from '@reduxjs/toolkit';
import TagsReducers from "./features/tags/tags"
import VideosReducers from "./features/videos/videos"

export const store = configureStore({
  reducer: {
    videos: VideosReducers,
    tags: TagsReducers,
  },
});