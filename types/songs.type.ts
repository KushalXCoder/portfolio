export type SongData = {
    track: TrackData;
};

export type TrackData = {
    album: { images: ImageData[] };
    name: string;
    external_urls: { spotify: string };
    artists: ArtistsData[];
}

export type ImageData = {
    height: number,
    width: number,
    url: string,
};

export type ArtistsData = {
    name: string,
};