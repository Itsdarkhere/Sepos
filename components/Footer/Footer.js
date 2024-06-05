import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer({ english }) {
  const RE_ARRAY = [
    { name: "Garden Helsinki", link: "" },
    { name: "Hangon Läntinen Laituri", link: "" },
    { name: "Hippos Jyväskylä", link: "" },
    { name: "Turun Ratapiha  ", link: "" },
    { name: "Hämeensaari", link: "" },
    { name: "Inkoonranta", link: "" },
  ];

  const COMPANY_ARRAY = [
    { name: "Modum Oy", link: "" },
    { name: "LUV Kodit Oy", link: "" },
    { name: "NPC", link: "" },
    { name: "Hög", link: "" },
  ];
  return (
    <footer
      className={" py-12 px-6 flex justify-center items-center bg-neutral-900"}
    >
      <div className=" flex flex-col-reverse lg:flex-row gap-8 justify-between max-w-7xl w-full">
        <div className='flex flex-col gap-8 justify-start'>
          <div className='flex flex-col gap-4'>
            <h5 className=" text-base text-neutral-300">Real Estate Projects</h5>
            <div className=' flex flex-row flex-wrap gap-4'>
              {RE_ARRAY.map((project, i) => {
                return (
                  <FooterLink key={i} name={project.name} link={project.link} />
                );
              })}
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <h5 className=" text-base text-neutral-300">Affiliated Companies</h5>
            <div className=' flex flex-row flex-wrap gap-4'>
              {COMPANY_ARRAY.map((company, i) => {
                return (
                  <FooterLink key={i} name={company.name} link={company.link} />
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

function FooterLink({ name, link }) {
  return (
    <Link href={link} className=' text-neutral-500 text-xs font-light'>
      {name}
    </Link>
  );
}
