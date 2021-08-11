export const getCompositeSlug = (slug: string, num: number) =>
  num ? `${slug}-${num}` : slug;
