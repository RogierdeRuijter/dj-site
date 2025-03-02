import { graphql } from "../../graphql";

export const Homepage = graphql(`
  query Homepage {
    Homepage {
      _id
      information {
        __typename
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
        ... on Highlighted {
          text
          title
          image {
            url
          }
          spotify {
            url
          }
        }
      }
      information_background_color
      information_text_color
      inspiration_background_color
      inspiration_text_color
    }
  }
`);
