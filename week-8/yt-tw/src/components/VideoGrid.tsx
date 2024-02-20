import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title:"Dark Aesthetic",
    image:"photo.jpg",
    thumb:"thumb.jpg",
    author:"Batman",
    views:"1M",
    timestamp:"1 week ago"
},{
    title:"Dark Aesthetic",
    image:"photo.jpg",
    thumb:"thumb.jpg",
    author:"Batman",
    views:"1M",
    timestamp:"1 week ago"
},{
    title:"Dark Aesthetic",
    image:"photo.jpg",
    thumb:"thumb.jpg",
    author:"Batman",
    views:"1M",
    timestamp:"1 week ago"
},{
    title:"Dark Aesthetic",
    image:"photo.jpg",
    thumb:"thumb.jpg",
    author:"Batman",
    views:"1M",
    timestamp:"1 week ago"
}]

export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
            <VideoCard 
                title={video.title}
                image={video.image}
                thumb={video.thumb}
                author={video.author}
                views={video.views}
                timestamp={video.timestamp}
            ></VideoCard>
            </div>)}
    </div>
}
