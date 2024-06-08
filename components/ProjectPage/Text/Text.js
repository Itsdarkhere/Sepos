import Link from "next/link";
import styles from './Text.module.css';

export default function Text({ arrayObject, languagePack, lang }) {
  const getStatus = () => {
    if (languagePack.status !== '') {
      return (
        <div className={"flex flex-col mb-8"}>
          <p className={" text-xl font-semibold text-neutral-700 mb-4"}>{languagePack.finnish ? 'Hanketilanne' : 'Project status'}</p>
          <p className={"text-base text-neutral-600"}>{languagePack.status}</p>
        </div>
      );
    }
  };

  const getWebsiteLink = () => {
    if (arrayObject.website !== '') {
      return (
        <Link className="text-neutral-700 border-b-2 border-b-orange-400 transition duration-300 ease-in-out hover:text-gray-700 hover:border-b-orange-500" target="_blank" href={arrayObject.website}>
          {arrayObject.websiteLinkName}
        </Link>
      );
    }
  };

  const getLocation = () => {
    if (languagePack?.location) {
      return <p className={` mb-4`}><span className=" font-semibold" >{lang === 'en' ? "Location: ": "Sijainti: "}</span>{languagePack.location}</p>;
    }
  };

  const formattedDescription = languagePack.description.split('\n').map((line, index) => (
    <p key={index}>
      {line}
    </p>
  ));

  return (
    <div className={" max-w-[600px] w-full"}>
      <div className={styles.text_inner_container}>
        <div className={" text-base text-neutral-600"}>
          {getLocation()}
          <div className={" mb-8"}>
            {formattedDescription}
          </div>
        </div>
        <div className={styles.text_button_facts_container}>
          {getStatus()}
          <div className={" mb-8"}>
            {languagePack.facts.map((fact, index) => {
                return (
                  <li
                    key={index}
                    className={" text-base text-neutral-600"}
                  >
                    {fact}
                  </li>
                );
            })}
          </div>
          <p className={"text-xl font-semibold text-neutral-700 mb-4"}>{languagePack.finnish ? 'Faktoja' : 'Facts'}</p>
        </div>
        {getWebsiteLink()}
      </div>
    </div>
  );
}