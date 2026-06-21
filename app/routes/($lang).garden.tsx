import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import ProjectPage from "@/components/ProjectPage/ProjectPage";
import { ProjectArray } from "@/utils/Array";

const PROJECT_INDEX = 0;

export async function loader({ params }: LoaderFunctionArgs) {
  const lang = params.lang || "en";
  return json({ lang });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const isEnglish = data?.lang === "en";

  if (isEnglish) {
    return [
      { title: "Garden Helsinki | Sepos Oy" },
      {
        name: "description",
        content: `Garden Helsinki, a world class event arena embraced by an extensive selection of complimenting amenities, facilities and services is under development in the heart of Helsinki. The arena, utilizing the most advanced technical solutions in the world, will provide elite sports and culture events and attractions for Helsinki residents and visitors on a daily basis all year round.`,
      },
      { property: "og:title", content: "Garden Helsinki | Sepos Oy" },
      {
        property: "og:description",
        content: `Garden Helsinki, a world class event arena embraced by an extensive selection of complimenting amenities, facilities and services is under development in the heart of Helsinki.`,
      },
      { property: "og:url", content: "https://www.sepos.fi/en/garden" },
      { property: "og:site_name", content: "Sepos Oy" },
      {
        property: "og:image",
        content:
          "https://ik.imagekit.io/s93qwyistj0/pics-highres/garden-4_QcB330_WN.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961374",
      },
      { property: "og:locale", content: "en" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Garden Helsinki | Sepos Oy" },
      {
        name: "twitter:description",
        content: `Garden Helsinki, a world class event arena embraced by an extensive selection of complimenting amenities, facilities and services is under development in the heart of Helsinki.`,
      },
      {
        name: "twitter:image",
        content:
          "https://ik.imagekit.io/s93qwyistj0/pics-highres/garden-4_QcB330_WN.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961374",
      },
    ];
  }

  return [
    { title: "Garden Helsinki | Sepos Oy" },
    {
      name: "description",
      content: `Garden Helsinki on Töölöön, Nordenskiöldinkadun varrelle suunnitteilla oleva kiinteistökehityshanke. Gardeniin suunnitellaan modernia kansainvälisen tason tapahtuma-areenaa ja sen ympärille kehitettäviä kattavia oheispalveluja sekä jokapäiväisiä palveluita kaupunkilaisten käyttöön.`,
    },
    { property: "og:title", content: "Garden Helsinki | Sepos Oy" },
    {
      property: "og:description",
      content: `Garden Helsinki on Töölöön, Nordenskiöldinkadun varrelle suunnitteilla oleva kiinteistökehityshanke.`,
    },
    { property: "og:url", content: "https://www.sepos.fi/fi/garden" },
    { property: "og:site_name", content: "Sepos Oy" },
    {
      property: "og:image",
      content:
        "https://ik.imagekit.io/s93qwyistj0/pics-highres/garden-4_QcB330_WN.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961374",
    },
    { property: "og:locale", content: "fi" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Garden Helsinki | Sepos Oy" },
    {
      name: "twitter:description",
      content: `Garden Helsinki on Töölöön, Nordenskiöldinkadun varrelle suunnitteilla oleva kiinteistökehityshanke.`,
    },
    {
      name: "twitter:image",
      content:
        "https://ik.imagekit.io/s93qwyistj0/pics-highres/garden-4_QcB330_WN.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961374",
    },
  ];
};

export default function Garden() {
  const { lang } = useLoaderData<typeof loader>();
  const projectArray = ProjectArray();
  const languagePack =
    lang === "en"
      ? projectArray[PROJECT_INDEX].english
      : projectArray[PROJECT_INDEX].finnish;

  return (
    <ProjectPage
      projectArray={projectArray}
      lang={lang}
      arrayObject={projectArray[PROJECT_INDEX]}
      languagePack={languagePack}
    />
  );
}
