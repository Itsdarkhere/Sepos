import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
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

export async function loader({ params }: LoaderFunctionArgs) {
  const lang = params.lang || "en";
  return json({ lang });
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
  const { lang } = useLoaderData<typeof loader>();

  return (
    <>
      <ProgressBar />
      <Nav lang={lang} />
      <Outlet context={{ lang }} />
      <Footer lang={lang} />
    </>
  );
}
