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
      { title: "Inkoonranta | Sepos Oy" },
      {
        name: "description",
        content: `Inkoonranta development is real quality of life by the ocean. It is tranquility, happiness and community spirit. In essence Inkoonranta is a choice without waiver.`,
      },
      { property: "og:title", content: "Inkoonranta | Sepos Oy" },
      {
        property: "og:description",
        content: `Inkoonranta development is real quality of life by the ocean. It is tranquility, happiness and community spirit.`,
      },
      { property: "og:url", content: "https://www.sepos.fi/en/inkoonranta" },
      { property: "og:site_name", content: "Sepos Oy" },
      {
        property: "og:image",
        content:
          "https://ik.imagekit.io/s93qwyistj0/pics-highres/inkoo-1_g_FySAwI-.webp?updatedAt=1653664959274",
      },
      { property: "og:locale", content: "en" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Inkoonranta | Sepos Oy" },
      {
        name: "twitter:description",
        content: `Inkoonranta development is real quality of life by the ocean. It is tranquility, happiness and community spirit.`,
      },
      {
        name: "twitter:image",
        content:
          "https://ik.imagekit.io/s93qwyistj0/pics-highres/inkoo-1_g_FySAwI-.webp?updatedAt=1653664959274",
      },
    ];
  }

  return [
    { title: "Inkoonranta | Sepos Oy" },
    {
      name: "description",
      content: `Inkoonranta on elämänlaatua meren äärellä. Se on omaa rauhaa ja naapurihenkeä, sulassa sovussa. Iloinen Inkoonranta on valinta, ilman luopumista.`,
    },
    { property: "og:title", content: "Inkoonranta | Sepos Oy" },
    {
      property: "og:description",
      content: `Inkoonranta on elämänlaatua meren äärellä. Se on omaa rauhaa ja naapurihenkeä, sulassa sovussa.`,
    },
    { property: "og:url", content: "https://www.sepos.fi/fi/inkoonranta" },
    { property: "og:site_name", content: "Sepos Oy" },
    {
      property: "og:image",
      content:
        "https://ik.imagekit.io/s93qwyistj0/pics-highres/inkoo-1_g_FySAwI-.webp?updatedAt=1653664959274",
    },
    { property: "og:locale", content: "fi" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Inkoonranta | Sepos Oy" },
    {
      name: "twitter:description",
      content: `Inkoonranta on elämänlaatua meren äärellä. Se on omaa rauhaa ja naapurihenkeä, sulassa sovussa.`,
    },
    {
      name: "twitter:image",
      content:
        "https://ik.imagekit.io/s93qwyistj0/pics-highres/inkoo-1_g_FySAwI-.webp?updatedAt=1653664959274",
    },
  ];
};

export default function Inkoonranta() {
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
