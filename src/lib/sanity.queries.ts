import { groq } from "next-sanity";

// ——— Blog Posts ———

export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    category,
    excerpt,
    mainImage,
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    category,
    excerpt,
    mainImage,
    body,
  }
`;

export const allPostSlugsQuery = groq`
  *[_type == "post"] { "slug": slug.current }
`;

// ——— Testimonials ———

export const allTestimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    name,
    location,
    service,
    quote,
    featured,
  }
`;

export const featuredTestimonialsQuery = groq`
  *[_type == "testimonial" && featured == true] | order(order asc) {
    _id,
    name,
    location,
    service,
    quote,
  }
`;

// ——— FAQs ———

export const allFaqsQuery = groq`
  *[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer,
  }
`;
