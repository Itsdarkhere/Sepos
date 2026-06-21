import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useEffect } from "react";
import NProgress from "nprogress";
import nProgressStyles from "nprogress/nprogress.css?url";

import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Kameron:wght@400;500;600;700&display=swap",
  },
  { rel: "stylesheet", href: nProgressStyles },
  { rel: "canonical", href: "https://www.sepos.fi" },
  { rel: "alternate", hrefLang: "en", href: "https://www.sepos.fi/en" },
  { rel: "alternate", hrefLang: "fi", href: "https://www.sepos.fi/fi" },
];

export async function loader({ params, context }: LoaderFunctionArgs) {
  const lang = params.lang || "en";
  const env = context as Record<string, string>;
  const apiKey = env?.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";
  console.log("GOOGLE_MAPS_API_KEY:", apiKey ? "loaded" : "missing", "env keys:", Object.keys(env));
  return json({
    lang,
    ENV: {
      GOOGLE_MAPS_API_KEY: apiKey,
    },
  });
}

function ProgressBar() {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "loading") {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [navigation.state]);

  return null;
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi" data-theme="light">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const { lang, ENV } = useLoaderData<typeof loader>();

  if (typeof window !== "undefined") {
    console.log("GOOGLE_MAPS_API_KEY:", ENV.GOOGLE_MAPS_API_KEY || "missing");
  }

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.ENV = ${JSON.stringify(ENV)}`,
        }}
      />
      <ProgressBar />
      <Nav lang={lang} />
      <Outlet context={{ lang }} />
      <Footer lang={lang} />
    </>
  );
}
