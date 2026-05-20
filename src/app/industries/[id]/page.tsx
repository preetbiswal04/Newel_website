import { notFound } from "next/navigation";
import IndustryDetailClient from "./IndustryDetailClient";
import { INDUSTRY_PAGES_DATA } from "@/data/industryPagesData";

type PageProps = {
  params: {
    id: string;
  };
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(INDUSTRY_PAGES_DATA).map((id) => ({
    id,
  }));
}

export default function IndustryDetailPage({ params }: PageProps) {
  const data = INDUSTRY_PAGES_DATA[params.id];

  if (!data) {
    notFound();
  }

  return <IndustryDetailClient data={data} />;
}
