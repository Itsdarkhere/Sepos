import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import ProjectPage from "@/components/ProjectPage/ProjectPage";
import { ProjectArray } from "@/utils/Array";

const PROJECT_INDEX = 4;

export async function loader({ params }: LoaderFunctionArgs) {
  const lang = params.lang || "en";
  return json({ lang });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const isEnglish = data?.lang === "en";

  if (isEnglish) {
    return [
      { title: "Hangon Läntinen Laituri | Sepos Oy" },
      {
        name: "description",
        content: `80 - 100 beach front apartments will be built for seasonal and year-round living at Kuningatarvuori in the Eastern harbour of Hanko city, right next to all the amenities.`,
      },
      { property: "og:title", content: "Hangon Läntinen Laituri | Sepos Oy" },
      {
        property: "og:description",
        content: `80 - 100 beach front apartments will be built for seasonal and year-round living at Kuningatarvuori in the Eastern harbour of Hanko city.`,
      },
      { property: "og:url", content: "https://www.sepos.fi/en/hanko" },
      { property: "og:site_name", content: "Sepos Oy" },
      {
        property: "og:image",
        content:
          "https://ik.imagekit.io/s93qwyistj0/pics-highres/hanko-1_DB4odN3fVj.webp?updatedAt=1653664961782",
      },
      { property: "og:locale", content: "en" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Hangon Läntinen Laituri | Sepos Oy" },
      {
        name: "twitter:description",
        content: `80 - 100 beach front apartments will be built for seasonal and year-round living at Kuningatarvuori in the Eastern harbour of Hanko city.`,
      },
      {
        name: "twitter:image",
        content:
          "https://ik.imagekit.io/s93qwyistj0/pics-highres/hanko-1_DB4odN3fVj.webp?updatedAt=1653664961782",
      },
    ];
  }

  return [
    { title: "Hangon Läntinen Laituri | Sepos Oy" },
    {
      name: "description",
      content: `Kuningatarvuorelle, Itäsatamaan, merenrantaan ja Hangon palvelujen ääreen rakennetaan noin 80 – 100 asuntoa vapaa-ajan ja ympärivuotiseen asumiseen.`,
    },
    { property: "og:title", content: "Hangon Läntinen Laituri | Sepos Oy" },
    {
      property: "og:description",
      content: `Kuningatarvuorelle, Itäsatamaan, merenrantaan ja Hangon palvelujen ääreen rakennetaan noin 80 – 100 asuntoa.`,
    },
    { property: "og:url", content: "https://www.sepos.fi/fi/hanko" },
    { property: "og:site_name", content: "Sepos Oy" },
    {
      property: "og:image",
      content:
        "https://ik.imagekit.io/s93qwyistj0/pics-highres/hanko-1_DB4odN3fVj.webp?updatedAt=1653664961782",
    },
    { property: "og:locale", content: "fi" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Hangon Läntinen Laituri | Sepos Oy" },
    {
      name: "twitter:description",
      content: `Kuningatarvuorelle, Itäsatamaan, merenrantaan ja Hangon palvelujen ääreen rakennetaan noin 80 – 100 asuntoa.`,
    },
    {
      name: "twitter:image",
      content:
        "https://ik.imagekit.io/s93qwyistj0/pics-highres/hanko-1_DB4odN3fVj.webp?updatedAt=1653664961782",
    },
  ];
};

export default function Hanko() {
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
