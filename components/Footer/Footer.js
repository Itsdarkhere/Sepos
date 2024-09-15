import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer({ lang }) {
  const RE_ARRAY = [
    { name: "Garden Helsinki", link: "/garden" },
    { name: "Hangon Läntinen Laituri", link: "/hanko" },
    { name: "Hippos Jyväskylä", link: "/hippos" },
    { name: "Turun Ratapiha  ", link: "/turku" },
    { name: "Hämeensaari", link: "/hameensaari" },
    { name: "Inkoonranta", link: "/inkoonranta" },
  ];

  const COMPANY_ARRAY = [
    { name: "Modum Oy", link: "https://modumdigital.com/en/" },
    { name: "LUV Kodit Oy", link: "http://www.luvkoti.fi/" },
    { name: "NPC", link: "https://www.nordicpictures.fi/" },
    { name: "Hög", link: "https://hoglive.fi" },
  ];

  return (
    <footer
      className={" py-12 px-6 flex justify-center items-center bg-neutral-900"}
    >
      <div className=" flex flex-col-reverse lg:flex-row gap-8 justify-between max-w-7xl w-full">
        <div className='flex flex-col gap-8 justify-start'>
          <div className='flex flex-col gap-4'>
            <h5 className=" text-base text-neutral-300">{lang === "en" ? 'Real Estate Projects' : 'Kiinteistökehitys Projektit'}</h5>
            <div className=' flex flex-row flex-wrap gap-4'>
              {RE_ARRAY.map((project, i) => {
                return (
                  <FooterLink key={i} name={project.name} link={project.link} target="" />
                );
              })}
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <h5 className=" text-base text-neutral-300">{lang === "en" ? 'Affiliated Companies' : 'Osakkuusyhtiöt'}</h5>
            <div className=' flex flex-row flex-wrap gap-4'>
              {COMPANY_ARRAY.map((company, i) => {
                return (
                  <FooterLink key={i} name={company.name} link={company.link} target={"_blank"} />
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.footer_logo_button} aria-label='Home Button'>
          <p className='align'>SEPOS OY</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ name, link, target }) {
  return (
    <Link href={link} target={target} className={`${target !== '' && 'underline'} text-neutral-500 hover:text-neutral-400 text-xs font-light`}>
      {name}
    </Link>
  );
}
