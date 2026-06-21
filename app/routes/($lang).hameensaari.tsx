import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

import ProjectPage from "@/components/ProjectPage/ProjectPage";
import { ProjectArray } from "@/utils/Array";

const PROJECT_INDEX = 3;

export async function loader({ params }: LoaderFunctionArgs) {
  const lang = params.lang || "en";
  return json({ lang });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const isEnglish = data?.lang === "en";

  if (isEnglish) {
    return [
      { title: "Hämeensaari | Sepos Oy" },
      {
        name: "description",
        content: `The Hämeenlinna downtown development project is an attractive, high-quality residential area in the city center and a concentration of services. The whole consists of apartments, accommodation, commercial services, a parking facility, and an urban park on the shore of Lake Vanajavesi.`,
      },
      { property: "og:title", content: "Hämeensaari | Sepos Oy" },
      {
        property: "og:description",
        content: `The Hämeenlinna downtown development project is an attractive, high-quality residential area in the city center and a concentration of services.`,
      },
      { property: "og:url", content: "https://www.sepos.fi/en/hameensaari" },
      { property: "og:site_name", content: "Sepos Oy" },
      {
        property: "og:image",
        content:
          "https://ik.imagekit.io/s93qwyistj0/pics-highres/3_mPMP68khO.png?updatedAt=1653664961057",
      },
      { property: "og:locale", content: "en" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Hämeensaari | Sepos Oy" },
      {
        name: "twitter:description",
        content: `The Hämeenlinna downtown development project is an attractive, high-quality residential area in the city center and a concentration of services.`,
      },
      {
        name: "twitter:image",
        content:
          "https://ik.imagekit.io/s93qwyistj0/pics-highres/3_mPMP68khO.png?updatedAt=1653664961057",
      },
    ];
  }

  return [
    { title: "Hämeensaari | Sepos Oy" },
    {
      name: "description",
      content: `Hämeenlinnan keskustakehityshanke on vetovoimainen keskustan laadukkain asuinalue ja palveluijen keskittymä. Kokonaisuus muodostuu asunnoista, majoituksesta, kaupallisista palveluista, pysäköintilaitoksesta ja Vanajaveden rannan kaupunkipuistosta.`,
    },
    { property: "og:title", content: "Hämeensaari | Sepos Oy" },
    {
      property: "og:description",
      content: `Hämeenlinnan keskustakehityshanke on vetovoimainen keskustan laadukkain asuinalue ja palveluijen keskittymä.`,
    },
    { property: "og:url", content: "https://www.sepos.fi/fi/hameensaari" },
    { property: "og:site_name", content: "Sepos Oy" },
    {
      property: "og:image",
      content:
        "https://ik.imagekit.io/s93qwyistj0/pics-highres/3_mPMP68khO.png?updatedAt=1653664961057",
    },
    { property: "og:locale", content: "fi" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Hämeensaari | Sepos Oy" },
    {
      name: "twitter:description",
      content: `Hämeenlinnan keskustakehityshanke on vetovoimainen keskustan laadukkain asuinalue ja palveluijen keskittymä.`,
    },
    {
      name: "twitter:image",
      content:
        "https://ik.imagekit.io/s93qwyistj0/pics-highres/3_mPMP68khO.png?updatedAt=1653664961057",
    },
  ];
};

export default function Hameensaari() {
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
