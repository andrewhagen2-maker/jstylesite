import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "jstyle",
  title: "J.Style CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "0x8fzrph",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [
    deskTool(),
    visionTool(), // lets you run GROQ queries live from the studio
  ],
  schema: {
    types: schemaTypes,
  },
});
