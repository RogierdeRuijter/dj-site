/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The Date type adheres to ISO 8601 standard. March 14, 1988 is represented as 1988-03-13. */
  _Date: { input: any; output: any; }
};

/** Single Agenda. */
export type Agenda = Model & {
  __typename?: 'Agenda';
  /** Count of bookmark events. */
  _bookmarks: Scalars['Int']['output'];
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars['String']['output'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String']['output'];
  /** Count of view events. */
  _event: Scalars['Int']['output'];
  /** Unique identifier for each content item. */
  _id: Scalars['String']['output'];
  _last_published_on?: Maybe<Scalars['String']['output']>;
  /** Count of like events. */
  _likes: Scalars['Int']['output'];
  _locale: Scalars['String']['output'];
  _locales: Array<Scalars['String']['output']>;
  /** This field returns all localizations for this content item. */
  _localizations: Array<Agenda>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
  /** Count of subscribe events. */
  _subscribes: Scalars['Int']['output'];
  /** Count of view events. */
  _views: Scalars['Int']['output'];
  agenda: Array<Booking>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Single Agenda. */
export type Agenda_EventArgs = {
  name?: _Event;
};


/** Single Agenda. */
export type AgendaAgendaArgs = {
  personalize?: Scalars['Boolean']['input'];
  personalize_for_country?: InputMaybe<Scalars['String']['input']>;
  personalize_for_segments?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** This union type holds all content models. */
export type AllModels = Agenda | Homepage;

/** Prepr Asset system model */
export type Asset = {
  __typename?: 'Asset';
  /** Unique identifier for each asset. */
  _id: Scalars['String']['output'];
  _locale: Scalars['String']['output'];
  /** This field returns all localizations for this asset. */
  _localizations: Array<Asset>;
  _type: Scalars['String']['output'];
  /** Contextual field; alignment of the asset when used in a content item. */
  alignment?: Maybe<AssetAlignment>;
  author?: Maybe<Scalars['String']['output']>;
  /** Contextual field; caption of the asset when used in a content item. */
  caption?: Maybe<Scalars['String']['output']>;
  /** Returns a cover image for audio/video files. */
  cover?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  mime_type?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  original_name?: Maybe<Scalars['String']['output']>;
  /** Mux Playback ID for Audio & Video assets. */
  playback_id?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Prepr Asset system model */
export type AssetCoverArgs = {
  animated?: InputMaybe<Scalars['Boolean']['input']>;
  end?: InputMaybe<Scalars['Float']['input']>;
  fit_mode?: InputMaybe<Scalars['String']['input']>;
  flip_h?: InputMaybe<Scalars['Boolean']['input']>;
  flip_v?: InputMaybe<Scalars['Boolean']['input']>;
  fps?: InputMaybe<Scalars['Int']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  rotate?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Float']['input']>;
  time?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


/** Prepr Asset system model */
export type AssetUrlArgs = {
  as_file?: InputMaybe<Scalars['Boolean']['input']>;
  crop?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  inline?: InputMaybe<Scalars['Boolean']['input']>;
  preset?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  res?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetAlignment {
  Center = 'center',
  Left = 'left',
  Right = 'right'
}

/** Booking component. */
export type Booking = Component & {
  __typename?: 'Booking';
  _context?: Maybe<Context>;
  _id: Scalars['String']['output'];
  brand_name?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['_Date']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  ticket_url?: Maybe<Scalars['String']['output']>;
};

/** A component is a predefined set of fields that can be used in models. You can think of a component as a flexible, reusable template where you define fields once, and then fill them with different content every time you use it. */
export type Component = {
  _context?: Maybe<Context>;
  /** Unique identifier for each content component instance. */
  _id: Scalars['String']['output'];
};

export type ContentItems = {
  __typename?: 'ContentItems';
  items?: Maybe<Array<Maybe<AllModels>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum ContentItemsSortInput {
  ChangedOn = 'changed_on',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnDesc = 'created_on_DESC',
  /** Sort content items by most viewed. */
  Popular = 'popular',
  PublishOn = 'publish_on',
  PublishOnDesc = 'publish_on_DESC'
}

export type ContentItemsWhereInput = {
  _channels_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _customer_relation?: InputMaybe<CustomerRelationWhereInput>;
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _search?: InputMaybe<Scalars['String']['input']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _stories_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _stories_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _tags_has?: InputMaybe<Scalars['Boolean']['input']>;
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _typename_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Context = {
  __typename?: 'Context';
  /** The unique identifier for an A/B test or personalization block used for analytics. */
  group_id?: Maybe<Scalars['String']['output']>;
  /** Returns the kind of personalized content: `PERSONALIZATION` | `AB_TEST`. */
  kind?: Maybe<Scalars['String']['output']>;
  segments?: Maybe<Array<Scalars['String']['output']>>;
  /** A variant ID is a unique identifier assigned to each variant in an A/B test (A/B) or personalization and contains the segments it has been linked too. */
  variant_id?: Maybe<Scalars['String']['output']>;
  /** The unique identifier for an A/B test or personalization variant used for analytics. */
  variant_key?: Maybe<Scalars['String']['output']>;
};

export type CustomerRelationWhereInput = {
  event: _Event;
  id?: InputMaybe<Scalars['String']['input']>;
  reference_id?: InputMaybe<Scalars['String']['input']>;
};

/** Single Homepage. */
export type Homepage = Model & {
  __typename?: 'Homepage';
  /** Count of bookmark events. */
  _bookmarks: Scalars['Int']['output'];
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars['String']['output'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String']['output'];
  /** Count of view events. */
  _event: Scalars['Int']['output'];
  /** Unique identifier for each content item. */
  _id: Scalars['String']['output'];
  _last_published_on?: Maybe<Scalars['String']['output']>;
  /** Count of like events. */
  _likes: Scalars['Int']['output'];
  _locale: Scalars['String']['output'];
  _locales: Array<Scalars['String']['output']>;
  /** This field returns all localizations for this content item. */
  _localizations: Array<Homepage>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
  /** Count of subscribe events. */
  _subscribes: Scalars['Int']['output'];
  /** Count of view events. */
  _views: Scalars['Int']['output'];
  information: Array<Homepage_Information>;
  information_background_color?: Maybe<Scalars['String']['output']>;
  information_text_color?: Maybe<Scalars['String']['output']>;
  inspiration: Array<Homepage_Inspiration>;
  inspiration_background_color?: Maybe<Scalars['String']['output']>;
  inspiration_text_color?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Single Homepage. */
export type Homepage_EventArgs = {
  name?: _Event;
};


/** Single Homepage. */
export type HomepageInformationArgs = {
  personalize?: Scalars['Boolean']['input'];
  personalize_for_country?: InputMaybe<Scalars['String']['input']>;
  personalize_for_segments?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Single Homepage. */
export type HomepageInspirationArgs = {
  personalize?: Scalars['Boolean']['input'];
  personalize_for_country?: InputMaybe<Scalars['String']['input']>;
  personalize_for_segments?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Homepage_Information = Agenda | Image | Soundcloud | Spotify | Tekst;

export type Homepage_Inspiration = Image | Soundcloud | Spotify | Tekst;

/** Image component. */
export type Image = Component & {
  __typename?: 'Image';
  _context?: Maybe<Context>;
  _id: Scalars['String']['output'];
  image?: Maybe<Asset>;
};

/** A model is the content structure of a content item that is used in multiple locations in your CMS. A model consists of a number of fields to store your content. Common examples of models are articles, landing pages and products. */
export type Model = {
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars['String']['output'];
  /** Unique identifier for each content item. */
  _id: Scalars['String']['output'];
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve Agenda. */
  Agenda?: Maybe<Agenda>;
  /** Retrieve items from different model types at once. */
  ContentItems?: Maybe<ContentItems>;
  /** Retrieve Homepage. */
  Homepage?: Maybe<Homepage>;
};


export type QueryAgendaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContentItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  people_also_viewed_id?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ContentItemsSortInput>;
  where?: InputMaybe<ContentItemsWhereInput>;
};


export type QueryHomepageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SearchOptionsInput = {
  includeNumeric?: InputMaybe<Scalars['Boolean']['input']>;
  includeReferences?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SoundCloudPost = {
  __typename?: 'SoundCloudPost';
  _id: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

/** Soundcloud component. */
export type Soundcloud = Component & {
  __typename?: 'Soundcloud';
  _context?: Maybe<Context>;
  _id: Scalars['String']['output'];
  soundcloud?: Maybe<SoundCloudPost>;
};

/** Spotify component. */
export type Spotify = Component & {
  __typename?: 'Spotify';
  _context?: Maybe<Context>;
  _id: Scalars['String']['output'];
  spotify?: Maybe<SpotifyPlaylist>;
};

export type SpotifyPlaylist = {
  __typename?: 'SpotifyPlaylist';
  _id: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

/** Tekst component. */
export type Tekst = Component & {
  __typename?: 'Tekst';
  _context?: Maybe<Context>;
  _id: Scalars['String']['output'];
  distorted?: Maybe<Scalars['Boolean']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

/** Event type is specifying the kind of event the customer has with your content. */
export enum _Event {
  Bookmark = 'Bookmark',
  Clickthrough = 'Clickthrough',
  Comment = 'Comment',
  Like = 'Like',
  Purchase = 'Purchase',
  Share = 'Share',
  Subscribe = 'Subscribe',
  View = 'View',
  Vote = 'Vote'
}

export type HomepageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomepageQuery = { __typename?: 'Query', Homepage?: { __typename?: 'Homepage', _id: string, information_background_color?: string | null, information_text_color?: string | null, inspiration_background_color?: string | null, inspiration_text_color?: string | null, information: Array<{ __typename: 'Agenda', agenda: Array<{ __typename?: 'Booking', date?: any | null, brand_name?: string | null, location?: string | null, ticket_url?: string | null, label?: string | null }> } | { __typename: 'Image', _id: string, image?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null } | { __typename: 'Soundcloud', _id: string, soundcloud?: { __typename?: 'SoundCloudPost', _id: string, url: string } | null } | { __typename: 'Spotify', _id: string, spotify?: { __typename?: 'SpotifyPlaylist', _id: string, url: string } | null } | { __typename: 'Tekst', _id: string, distorted?: boolean | null, text?: string | null }>, inspiration: Array<{ __typename: 'Image' } | { __typename: 'Soundcloud' } | { __typename: 'Spotify' } | { __typename: 'Tekst' }> } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any> | undefined) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const HomepageDocument = new TypedDocumentString(`
    query Homepage {
  Homepage {
    _id
    information {
      __typename
      ... on Spotify {
        _id
        spotify {
          _id
          url
        }
      }
      ... on Soundcloud {
        _id
        soundcloud {
          _id
          url
        }
      }
      ... on Tekst {
        _id
        distorted
        text
      }
      ... on Image {
        _id
        image {
          url
          width
          height
        }
      }
      ... on Agenda {
        agenda {
          date
          brand_name
          location
          ticket_url
          label
        }
      }
    }
    inspiration {
      __typename
    }
    information_background_color
    information_text_color
    inspiration_background_color
    inspiration_text_color
  }
}
    `) as unknown as TypedDocumentString<HomepageQuery, HomepageQueryVariables>;