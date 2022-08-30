import { configureStore } from '@reduxjs/toolkit';
import TagsReducer from "./features/tags/tags"
import VideosReducer from "./features/videos/videos"
import VideoReducers from "./features/video/video"
import relatedVideosReducer from "./features/relatedVideos/relatedVideos"

export const store = configureStore({
  reducer: {
    videos: VideosReducer,
    video: VideoReducers,
    tags: TagsReducer,
    relatedVideos: relatedVideosReducer
  },
});