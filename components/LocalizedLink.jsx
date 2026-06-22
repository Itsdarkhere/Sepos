import { Link as RemixLink, useParams } from "@remix-run/react";

export function Link({ to, ...props }) {
  const { lang } = useParams();
  const currentLang = lang || "en";

  // Only prefix paths that start with / or #
  let localizedTo = to;
  if (typeof to === "string") {
    if (to.startsWith("#")) {
      localizedTo = `/${currentLang}${to}`;
    } else if (to.startsWith("/") && !to.startsWith(`/${currentLang}`)) {
      localizedTo = `/${currentLang}${to}`;
    }
  }

  return <RemixLink to={localizedTo} {...props} />;
}
