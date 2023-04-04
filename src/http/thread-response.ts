export interface ThreadResponse {
    kind: 'Listing' | unknown;
    data: ThreadData;
}

interface ThreadData {
    after: string | undefined;
    before: string | undefined;
    children: Array<ThreadPost>;
    dist: number;
    geo_filter: unknown;
    modhash: string;
}

interface ThreadPost {
    kind: string;
    data: PostData;
}

interface PostData {
    author: string;
    author_fullname: string;
    title: string;
    created: number;
    id: string;
    name: string;
    permalink: string;
    preview: PostPreview;
    subreddit_subscribers: number;
    thumbnail: string
    thumbnail_height: number;
    thumbnail_width: number;
    ups: number;
    url:string;
    secure_media_embed:{
        content:string;
    }
    secure_media?: {
        reddit_video?: {
            dash_url: string;
            scrubber_media_url: string;
            hls_url: string;
            fallback_url: string;
        }
    }
}
interface PostPreview {
    enabled: boolean;
    images: Array<ImageData>
}
interface ImageData {
    id: string;
    resolutions: Array<{
        url: string;
        height: number;
        width: number
    }>;
    source: {
        url: string;
        height: number;
        width: number;
    }
}
