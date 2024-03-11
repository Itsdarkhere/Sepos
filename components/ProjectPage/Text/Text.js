import { Link } from 'nextjs13-progress'
import styles from './Text.module.css';

export default function Text({ arrayObject, languagePack }) {
  const getStatus = () => {
    if (languagePack.status !== '') {
      return (
        <div className={styles.status_container}>
          <p className={styles.text_header}>{languagePack.finnish ? 'Hanketilanne' : 'Project status'}</p>
          <p className={styles.text_status}>{languagePack.status}</p>
        </div>
      );
    }
  };

  const getWebsiteLink = () => {
    if (arrayObject.website !== '') {
      return (
        <Link className="text-gray-800 mt-6 border-b-2 border-b-primary transition duration-300 ease-in-out hover:text-gray-700 hover:border-b-yellow-400" target="_blank" href={arrayObject.website}>
          {arrayObject.websiteLinkName}
        </Link>
      );
    }
  };

  const getLocation = () => {
    if (languagePack?.location) {
      return <p className={`${styles.text_description} ${styles.location}`}>{languagePack.location}</p>;
    }
  };

  return (
    <div className={styles.text_outer_container}>
      <div className={styles.text_inner_container}>
        <div className={styles.text_desc_container}>
          {getLocation()}
          <p className={styles.text_description}>{languagePack.description}</p>
        </div>
        <div className={styles.text_button_facts_container}>
          {getStatus()}
          <div className={styles.text_facts}>
            {languagePack.facts.map((fact, index) => {
                return (
                  <li
                    key={index}
                    className={styles.text_fact}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {fact}
                  </li>
                );
            })}
          </div>
          <p className={styles.text_header}>{languagePack.finnish ? 'Faktoja' : 'Facts'}</p>
        </div>
        {getWebsiteLink()}
      </div>
    </div>
  );
}