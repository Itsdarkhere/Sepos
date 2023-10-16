import styles from './Text.module.css';

export default function Text({ arrayObject, languagePack }) {
  const getStatus = () => {
    if (languagePack.status !== '') {
      return (
        <div className={styles.status_container}>
          <p className={styles.text_header}>{languagePack.finnish ? 'Projektin tilanne' : 'Project status'}</p>
          <p className={styles.text_status}>{languagePack.status}</p>
        </div>
      );
    }
  };

  const getWebsiteLink = () => {
    if (arrayObject.website !== '') {
      return (
        <div className={styles.website_link_container}>
          <a className={styles.website_link} target="_blank" href={arrayObject.website}>
            {arrayObject.websiteLinkName}
          </a>
        </div>
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