import { configureStore } from '@reduxjs/toolkit';
import TagsReducers from "./features/tags/tags"
import VideosReducers from "./features/videos/videos"
import VideoReducers from "./features/video/video"

export const store = configureStore({
  reducer: {
    videos: VideosReducers,
    video: VideoReducers,
    tags: TagsReducers,
  },
});