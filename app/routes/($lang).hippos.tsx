import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

import ProjectPage from "@/components/ProjectPage/ProjectPage";
import { ProjectArray } from "@/utils/Array";

const PROJECT_INDEX = 2;

export async function loader({ params }: LoaderFunctionArgs) {
  const lang = params.lang || "en";
  return json({ lang });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const isEnglish = data?.lang === "en";

  if (isEnglish) {
    return [
      { title: "Hippos Jyväskylä | Sepos Oy" },
      {
        name: "description",
        content: `On completion Hippos is not only a meeting place for citizens of Jyväskylä, but also the most significant exercise, professional-sports, health, wellbeing and events center in the Nordic countries. At Hippos sports research and technological product development is combined into a world-class entity.`,
      },
      { property: "og:title", content: "Hippos Jyväskylä | Sepos Oy" },
      {
        property: "og:description",
        content: `On completion Hippos is not only a meeting place for citizens of Jyväskylä, but also the most significant exercise, professional-sports, health, wellbeing and events center in the Nordic countries.`,
      },
      { property: "og:url", content: "https://www.sepos.fi/en/hippos" },
      { property: "og:site_name", content: "Sepos Oy" },
      {
        property: "og:image",
        content:
          "https://ik.imagekit.io/s93qwyistj0/pics-highres/hippos-3_Ms8zCjZOqP.jpg?updatedAt=1653664958297",
      },
      { property: "og:locale", content: "en" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Hippos Jyväskylä | Sepos Oy" },
      {
        name: "twitter:description",
        content: `On completion Hippos is not only a meeting place for citizens of Jyväskylä, but also the most significant exercise, professional-sports, health, wellbeing and events center in the Nordic countries.`,
      },
      {
        name: "twitter:image",
        content:
          "https://ik.imagekit.io/s93qwyistj0/pics-highres/hippos-3_Ms8zCjZOqP.jpg?updatedAt=1653664958297",
      },
    ];
  }

  return [
    { title: "Hippos Jyväskylä | Sepos Oy" },
    {
      name: "description",
      content: `Hippos on valmistuessaan paitsi kaupunkilaisten kohtaamispaikka, myös Pohjoismaiden merkittävin liikunnan, urheilun ja huippu-urheilun, terveyden edistämisen sekä hyvinvoinnin ja tapahtumien keskus. Lisäksi se yhdistää liikunnan tutkimuksen ja teknologisen tuotekehityksen kansainvälisesti merkittäväksi kokonaisuudeksi.`,
    },
    { property: "og:title", content: "Hippos Jyväskylä | Sepos Oy" },
    {
      property: "og:description",
      content: `Hippos on valmistuessaan paitsi kaupunkilaisten kohtaamispaikka, myös Pohjoismaiden merkittävin liikunnan, urheilun ja huippu-urheilun, terveyden edistämisen sekä hyvinvoinnin ja tapahtumien keskus.`,
    },
    { property: "og:url", content: "https://www.sepos.fi/fi/hippos" },
    { property: "og:site_name", content: "Sepos Oy" },
    {
      property: "og:image",
      content:
        "https://ik.imagekit.io/s93qwyistj0/pics-highres/hippos-3_Ms8zCjZOqP.jpg?updatedAt=1653664958297",
    },
    { property: "og:locale", content: "fi" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Hippos Jyväskylä | Sepos Oy" },
    {
      name: "twitter:description",
      content: `Hippos on valmistuessaan paitsi kaupunkilaisten kohtaamispaikka, myös Pohjoismaiden merkittävin liikunnan, urheilun ja huippu-urheilun, terveyden edistämisen sekä hyvinvoinnin ja tapahtumien keskus.`,
    },
    {
      name: "twitter:image",
      content:
        "https://ik.imagekit.io/s93qwyistj0/pics-highres/hippos-3_Ms8zCjZOqP.jpg?updatedAt=1653664958297",
    },
  ];
};

export default function Hippos() {
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
