import { notFound } from "next/navigation";

import { servicos } from "@/data/servicos";
import ServiceTemplate from "@/app/components/ServiceTemplate";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = servicos.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceTemplate service={service} />;
}
