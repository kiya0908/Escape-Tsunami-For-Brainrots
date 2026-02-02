import React from 'react';

interface VideoSectionProps {
    videoIds: string[];
}

const VideoSection: React.FC<VideoSectionProps> = ({ videoIds }) => {
    return (
        <div className="mt-12 w-full max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {videoIds.map((videoId) => (
                    <div
                        key={videoId}
                        className="rounded-xl overflow-hidden shadow-2xl border border-text-main/10 relative bg-black aspect-video"
                    >
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}`}
                            className="absolute top-0 left-0 w-full h-full"
                            style={{ border: 'none' }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Game Video"
                        ></iframe>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoSection;
