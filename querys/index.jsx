import { groq } from "next-sanity";

export const getAllPostQuery = groq`
*[_type == "post"] {
  title,
  slug,
  mainImage,
  author -> {
    name,
    image
  }
}
`;

export const getPostBySlug = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    slug,
    mainImage,
    author -> {
      name,
      image
    }
  }
  `;
