import { defineField, defineType } from "sanity";

export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      placeholder: "e.g. Sarasota, FL",
    }),
    defineField({
      name: "service",
      title: "Service Used",
      type: "string",
      options: {
        list: [
          { title: "Personal Styling Session", value: "Personal Styling Session" },
          { title: "Wardrobe Audit", value: "Wardrobe Audit" },
          { title: "Shopping Accompaniment", value: "Shopping Accompaniment" },
          { title: "Virtual Styling", value: "Virtual Styling" },
        ],
      },
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Featured testimonials appear prominently on the Testimonials page and Home page.",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first.",
      initialValue: 99,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "location" },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
