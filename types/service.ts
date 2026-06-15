export interface ServiceData {
  slug: string;

  title: string;

  description: string;
  hero: {
    title: string;
    subtitle: string;
  };
  heroImage: string;
  painImage: string;
  benefits: {
    title: string;
    description: string;
  }[];

  introTitle: string;

  introText: string;
  benefitsSection: {
    title: string;
    subtitle?: string;
  };
  cta: {
    title: string;
    buttonText: string;
    whatsappMessage: string;
  };

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
