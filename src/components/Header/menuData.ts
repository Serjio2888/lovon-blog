import { Menu } from "@/types/menu";
const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 11,
        title: "Business Blog",
        newTab: false,
        path: "/",
      },
      {
        id: 12,
        title: "Personal Blog",
        newTab: false,
        path: "/personal-blog",
      },
    ],
  },

  {
    id: 2,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 301,
        title: "About Us",
        newTab: false,
        path: "/about",
      },
      {
        id: 31,
        title: "Author Page",
        newTab: false,
        path: "/author",
      },
      {
        id: 31,
        title: "Search Page",
        newTab: false,
        path: "/search",
      },
      {
        id: 34,
        title: "Sign In",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Sign Up",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 35,
        title: "Style Guide Page",
        newTab: false,
        path: "/docs/style-guide",
      },
      {
        id: 36,
        title: "Privacy & Policy Page",
        newTab: false,
        path: "/privacy-policy",
      },
      {
        id: 36,
        title: "Error Page",
        newTab: false,
        path: "/error",
      },
    ],
  },

  {
    id: 3,
    title: "Blogs",
    newTab: false,
    submenu: [
      {
        id: 201,
        title: "Blog Details One",
        newTab: false,
        path: "/blog-details/blog-details-one",
      },
      {
        id: 202,
        title: "Blog Details Two",
        newTab: false,
        path: "/blog-details/blog-details-two",
      },
      {
        id: 203,
        title: "Blog Details Three",
        newTab: false,
        path: "/blog-details/blog-details-three",
      },
      {
        id: 204,
        title: "Blog Archive Page",
        newTab: false,
        path: "/archive",
      },
    ],
  },
  {
    id: 4,
    title: "Docs",
    newTab: false,
    path: "/docs",
  },
  {
    id: 5,
    title: "Support",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
