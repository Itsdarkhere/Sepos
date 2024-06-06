import Link from "next/link";
import styles from './Text.module.css';

export default function Text({ arrayObject, languagePack }) {
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
        <Link className="text-neutral-800 border-b-2 border-b-primary transition duration-300 ease-in-out hover:text-gray-700 hover:border-b-yellow-400" target="_blank" href={arrayObject.website}>
          {arrayObject.websiteLinkName}
        </Link>
      );
    }
  };

  const getLocation = () => {
    if (languagePack?.location) {
      return <p className={` mb-4`}>{languagePack.location}</p>;
    }
  };

  return (
    <div className={" max-w-[600px] w-full"}>
      <div className={styles.text_inner_container}>
        <div className={" text-base text-neutral-600"}>
          {getLocation()}
          <p className={" mb-8"}>{languagePack.description}</p>
        </div>
        <div className={styles.text_button_facts_container}>
          {getStatus()}
          <div className={" mb-8"}>
            {languagePack.facts.map((fact, index) => {
                return (
                  <li
                    key={index}
                    className={" text-base text-neutral-600"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
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