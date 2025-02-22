import { PortableTextBlock } from "sanity";
import { Author } from "./author";

type NextPost = {
  title: string;
  slug: any;
};

export type Blog = {
  _id: number;
  title: string;
  slug: any;
  category: string;
  metaDescription?: string;
  body?: PortableTextBlock[];
  mainImage?: any;
  author?: Author;
  tags?: string[];
  publishedAt?: string;
  accessLevel?: string;
  nextPost?: NextPost;
  prevPost?: NextPost;
};
