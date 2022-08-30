import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import VideoPlayer from '../components/videos/VideoPlayer';
import RelatedVideos from '../components/videos/RelatedVideos';
import { fetchVideo } from '../redux/features/video/video';
import VideoDescription from '../components/videos/VideoDescription';
import Loading from "../components/elements/Loading"
import RelatedVideoList from '../components/videos/RelatedVideoList';

const VideoDetails = () => {
    const { video, isLoading, isError, error } = useSelector((state) => state.video)
    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
        if(!id)(<Loading/>)
        else(dispatch(fetchVideo(id)))
    }, [id, dispatch])


    const { link, title, tags } = video || {};


    let content = null
    if (isLoading) content = <Loading />
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
    if (!isLoading && !isError && !video?.id) content = <div className="col-span-12">No video found</div>
    if (!isLoading && !isError && video?.id) content = <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
            <VideoPlayer link={link} title={title} />

            <VideoDescription video={video} />
        </div>
        <RelatedVideos id={id} tags={tags} />
    </div>


    return (
        <>
            <Header />
            <section className="pt-6 pb-20">
                <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                    {content}
                </div>
            </section>

            <Footer />
        </>
    );
};

export default VideoDetails;