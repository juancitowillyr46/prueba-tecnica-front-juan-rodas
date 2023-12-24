export interface Game {
    id: number;
    title: string;
    thumbnail: string;
    status: string;
    shortDescription: string;
    description: string;
    gameUrl: string;
    genre: string;
    platform: string;
    publisher?: string;
    developer?: string;
    releaseDate?: string;
    freeToGameProfileUrl?: string;
    minimumSystemRequirements?: MinimumSystemRequirements;
    screenshots?: Screenshot[];
}

export interface MinimumSystemRequirements {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
}
  
export interface Screenshot {
    id: number;
    image: string;
}
  