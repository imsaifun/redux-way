import React from 'react';
import RelatedVideoList from './RelatedVideoList';

const RelatedVideo = () => {
    return (
        <>
            <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
                <RelatedVideoList />
            </div>
        </>
    );
};

export default RelatedVideo;