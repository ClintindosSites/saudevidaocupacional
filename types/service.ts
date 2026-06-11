export interface ServiceData {
  slug: string;

  title: string;

  description: string;

  heroImage: string;

  benefits: {
    title: string;
    description: string;
  }[];

  introTitle: string;

  introText: string;

  faq: {
    question: string;
    answer: string;
  }[];

  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}
