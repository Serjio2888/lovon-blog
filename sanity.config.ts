import schemas from "@/sanity/schemas";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: "production",
  title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE!,
  token: process.env.SANITY_API_TOKEN!,
  apiVersion: "2024-03-01",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
