export type SongData = {
    track: { album: AlbumData };
};

export type AlbumData = {
    name: string;
    external_urls: { spotify: string };
    images: ImageData[];
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