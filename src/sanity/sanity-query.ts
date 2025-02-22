import { groq } from "next-sanity";
const postData = `{
  title,
  metaDescription,
  accessLevel,
  category,
  slug,
  tags,
  author->{
    _id,
    name,
    slug,
    image,
    bio,
    description
  },
  mainImage,
  publishedAt,
  body
}`;

const authorData = `{
  _id,
  name,
  description,
  slug,
  image,
  bio,
  description,
  "numberOfPosts": count(*[_type == "post" && references(^._id)])
}`;

export const postQuery = groq`*[_type == "post"] ${postData}`;

export const postQueryBySlug = groq`*[_type == "post" && slug.current == $slug][0] ${postData}`;

export const postQueryByTag = groq`*[_type == "post" && $slug in tags] ${postData}`;

export const postQueryByAuthor = groq`*[_type == "post" && author->slug.current == $slug] ${postData}`;

export const postQueryByCategory = groq`*[_type == "post" && category == $category] ${postData}`;

export const getPrevAndNextPostQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  publishedAt,
  'prevPost': *[_type == 'post' && publishedAt < ^.publishedAt] | order(publishedAt desc)[0],
  'nextPost': *[_type == 'post' && publishedAt > ^.publishedAt] | order(publishedAt asc)[0]
}`;

export const authorQuery = groq`*[_type == "author"] ${authorData}`;
export const authorBySlugQuery = groq`*[_type == "author" && slug.current == $slug][0] ${authorData}`;
