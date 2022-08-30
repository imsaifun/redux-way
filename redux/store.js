import { configureStore } from '@reduxjs/toolkit';
import tagsReducer from "./features/tags/tags"
import videosReducer from "./features/videos/videos"
import videoReducer from "./features/video/video"
import filterReducer from "./features/filter/filter"
import relatedVideosReducer from "./features/relatedVideos/relatedVideos"

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    video: videoReducer,
    tags: tagsReducer,
    relatedVideos: relatedVideosReducer,
    filter:filterReducer
  },
});