export interface anime {
    id: string;
    type: string;
    links: Links;
    attributes: AnimeAttributes;
    relationships: AnimeRelationships;
  }
  export interface Links {
    self: string;
  }
  export interface AnimeAttributes {
    slug: string;
    synopsis: string;
    description: string;
    titles: Titles;
    canonicalTitle: string;
    averageRating: string;
    userCount: number;
    favoritesCount: number;
    startDate: string;
    endDate: string;
    nextRelease?: null;
    popularityRank: number;
    ratingRank: number;
    subtype: string;
    status: string;
    posterImage: PosterImage;
    coverImage?: CoverImage | null;
    episodeCount: number;
    episodeLength?: number | null;
    totalLength: number;
    showType: string;
  }
  export interface Titles {
    en?: string | null;
    en_jp: string;
    ja_jp: string;
    en_us?: string | null;
  }
  export interface PosterImage {
    tiny: string;
    large: string;
    small: string;
    medium: string;
    original: string;
  }
  export interface Dimensions {
    tiny: DimensionsAtributtes;
    large: DimensionsAtributtes;
    small: DimensionsAtributtes;
    medium: DimensionsAtributtes;
  }
  export interface DimensionsAtributtes {
    width: number;
    height: number;
  }
  export interface AnimeRelationships {
    genres: RelationshipsLink;
    categories: RelationshipsLink;
    castings: RelationshipsLink;
    installments: RelationshipsLink;
    mappings: RelationshipsLink;
    reviews: RelationshipsLink;
    mediaRelationships: RelationshipsLink;
    characters: RelationshipsLink;
    staff: RelationshipsLink;
    productions: Productions;
    quotes: RelationshipsLink | string;
    episodes: RelationshipsLink | string;
    streamingLinks: RelationshipsLink | string;
    animeProductions: RelationshipsLink | string;
    animeCharacters: RelationshipsLink | string;
    animeStaff: RelationshipsLink | string;
  }
  export interface RelationshipsLink {
    links: RelationshipsLinkAtributes;
  }
  export interface RelationshipsLinkAtributes {
    self: string;
    related: string;
  }
  export interface Productions {
    links: RelationshipsLinkAtributes | string;
  }
  