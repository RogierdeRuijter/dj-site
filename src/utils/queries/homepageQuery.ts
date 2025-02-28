import gql from "graphql-tag";

export const HomepageQuery = gql`
  query {
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
            datetime {
              from
              until
            }
            brand_name
            location
            ticket_url
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
`;
