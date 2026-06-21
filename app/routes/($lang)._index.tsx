import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import EntryView from "@/components/EntryView/EntryView";
import ProjectSlider from "@/components/ProjectSlider/ProjectSlider";
import Companies from "@/components/Companies/Companies";
import Contacts from "@/components/Contacts/Contacts";
import { ProjectArray, CompanyArray } from "@/utils/Array";

import styles from "../home.module.css";

export async function loader({ params }: LoaderFunctionArgs) {
  const lang = params.lang || "en";
  return json({ lang });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const isEnglish = data?.lang === "en";

  if (isEnglish) {
    return [
      { title: "Sepos Oy | Real Estate Development" },
      {
        name: "description",
        content: `Sepos Oy is a company founded in 2014 and owned by Timo Everi, Ilkka Kilpimaa and NasdaqOMX Helsinki listed Taaleri Sijoitus Oy. The Company's field of activity is real estate development and investing in companies operating in the active lifestyle value chain.`,
      },
      { property: "og:title", content: "Sepos Oy | Real Estate Development" },
      {
        property: "og:description",
        content: `Sepos Oy is a company founded in 2014 and owned by Timo Everi, Ilkka Kilpimaa and NasdaqOMX Helsinki listed Taaleri Sijoitus Oy. The Company's field of activity is real estate development and investing in companies operating in the active lifestyle value chain.`,
      },
      { property: "og:url", content: "https://www.sepos.fi" },
      { property: "og:site_name", content: "Sepos Oy" },
      {
        property: "og:image",
        content:
          "https://ik.imagekit.io/s93qwyistj0/pics-highres/garden-4_QcB330_WN.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961374",
      },
      { property: "og:image:width", content: "2000" },
      { property: "og:image:height", content: "1333" },
      { property: "og:locale", content: "en" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sepos Oy | Real Estate Development" },
      {
        name: "twitter:description",
        content: `Sepos Oy is a company founded in 2014 and owned by Timo Everi, Ilkka Kilpimaa and NasdaqOMX Helsinki listed Taaleri Sijoitus Oy. The Company's field of activity is real estate development and investing in companies operating in the active lifestyle value chain.`,
      },
      {
        name: "twitter:image",
        content:
          "https://ik.imagekit.io/s93qwyistj0/pics-highres/garden-4_QcB330_WN.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961374",
      },
    ];
  }

  return [
    { title: "Sepos Oy | Kiinteistökehitys" },
    {
      name: "description",
      content: `Sepos Oy on vuonna 2014 perustettu Timo Everin, Ilkka Kilpimaan ja NasdaqOMX listatun Taaleri Oyj:n omistama yritys, jonka toimialana on kiinteistökehitys ja sijoittaminen aktiivisen elämäntavan arvoketjussa toimiviin yrityksiin.`,
    },
    { property: "og:title", content: "Sepos Oy | Kiinteistökehitys" },
    {
      property: "og:description",
      content: `Sepos Oy on vuonna 2014 perustettu Timo Everin, Ilkka Kilpimaan ja NasdaqOMX listatun Taaleri Oyj:n omistama yritys, jonka toimialana on kiinteistökehitys ja sijoittaminen aktiivisen elämäntavan arvoketjussa toimiviin yrityksiin.`,
    },
    { property: "og:url", content: "https://www.sepos.fi" },
    { property: "og:site_name", content: "Sepos Oy" },
    {
      property: "og:image",
      content:
        "https://ik.imagekit.io/s93qwyistj0/pics-highres/garden-4_QcB330_WN.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961374",
    },
    { property: "og:image:width", content: "2000" },
    { property: "og:image:height", content: "1333" },
    { property: "og:locale", content: "fi" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Sepos Oy | Kiinteistökehitys" },
    {
      name: "twitter:description",
      content: `Sepos Oy on vuonna 2014 perustettu Timo Everin, Ilkka Kilpimaan ja NasdaqOMX listatun Taaleri Oyj:n omistama yritys, jonka toimialana on kiinteistökehitys ja sijoittaminen aktiivisen elämäntavan arvoketjussa toimiviin yrityksiin.`,
    },
    {
      name: "twitter:image",
      content:
        "https://ik.imagekit.io/s93qwyistj0/pics-highres/garden-4_QcB330_WN.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961374",
    },
  ];
};

export default function Home() {
  const { lang } = useLoaderData<typeof loader>();
  const projectArray = ProjectArray();
  const companyArray = CompanyArray();

  return (
    <main className={styles.main}>
      <EntryView lang={lang} />
      <ProjectSlider projectArray={projectArray} lang={lang} />
      <Companies companyArray={companyArray} lang={lang} />
      <Contacts lang={lang} />
    </main>
  );
}
