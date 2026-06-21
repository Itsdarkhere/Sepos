import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

import ProjectPage from "@/components/ProjectPage/ProjectPage";
import { ProjectArray } from "@/utils/Array";

const PROJECT_INDEX = 1;

export async function loader({ params }: LoaderFunctionArgs) {
  const lang = params.lang || "en";
  return json({ lang });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const isEnglish = data?.lang === "en";

  if (isEnglish) {
    return [
      { title: "Turun Ratapiha | Sepos Oy" },
      {
        name: "description",
        content: `The Turku Ratapiha development unites the areas separated by the railway yard area and contributes to expanding the city's cultural-, events- and experience offerings. A vibrant city center needs jobs, city center living and modern facilities to produce cultural, entertainment and exercise services that enrichen people's life's.`,
      },
      { property: "og:title", content: "Turun Ratapiha | Sepos Oy" },
      {
        property: "og:description",
        content: `The Turku Ratapiha development unites the areas separated by the railway yard area and contributes to expanding the city's cultural-, events- and experience offerings.`,
      },
      { property: "og:url", content: "https://www.sepos.fi/en/turku" },
      { property: "og:site_name", content: "Sepos Oy" },
      {
        property: "og:image",
        content:
          "https://ik.imagekit.io/s93qwyistj0/pics-highres/turku-1_oyf-qKp8vR.jpg?updatedAt=1653664944232",
      },
      { property: "og:locale", content: "en" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Turun Ratapiha | Sepos Oy" },
      {
        name: "twitter:description",
        content: `The Turku Ratapiha development unites the areas separated by the railway yard area.`,
      },
      {
        name: "twitter:image",
        content:
          "https://ik.imagekit.io/s93qwyistj0/pics-highres/turku-1_oyf-qKp8vR.jpg?updatedAt=1653664944232",
      },
    ];
  }

  return [
    { title: "Turun Ratapiha | Sepos Oy" },
    {
      name: "description",
      content: `Turun Ratapiha -hanke monipuolistaa osaltaan Turun kaupunkikeskustan tapahtuma-, kulttuuri- ja elämystarjontaa ja lisää sen vetovoimaisuutta ja yhdistää ratapiha-alueen erottamia kaupunginosia toisiinsa.`,
    },
    { property: "og:title", content: "Turun Ratapiha | Sepos Oy" },
    {
      property: "og:description",
      content: `Turun Ratapiha -hanke monipuolistaa osaltaan Turun kaupunkikeskustan tapahtuma-, kulttuuri- ja elämystarjontaa.`,
    },
    { property: "og:url", content: "https://www.sepos.fi/fi/turku" },
    { property: "og:site_name", content: "Sepos Oy" },
    {
      property: "og:image",
      content:
        "https://ik.imagekit.io/s93qwyistj0/pics-highres/turku-1_oyf-qKp8vR.jpg?updatedAt=1653664944232",
    },
    { property: "og:locale", content: "fi" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Turun Ratapiha | Sepos Oy" },
    {
      name: "twitter:description",
      content: `Turun Ratapiha -hanke monipuolistaa osaltaan Turun kaupunkikeskustan tapahtuma-, kulttuuri- ja elämystarjontaa.`,
    },
    {
      name: "twitter:image",
      content:
        "https://ik.imagekit.io/s93qwyistj0/pics-highres/turku-1_oyf-qKp8vR.jpg?updatedAt=1653664944232",
    },
  ];
};

export default function Turku() {
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
