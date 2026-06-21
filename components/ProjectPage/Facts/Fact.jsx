export default function Facts({ arrayObject, languagePack, lang }) {
  const getStatus = () => {
    if (languagePack.status !== "") {
      return (
        <div className={"flex flex-col mb-8"}>
          <p className={" text-xl font-semibold text-neutral-700 mb-2"}>
            {languagePack.finnish ? "Hanketilanne" : "Project status"}
          </p>
          <p className={"text-base text-neutral-600"}>{languagePack.status}</p>
        </div>
      );
    }
  };

  const getWebsiteLink = () => {
    if (arrayObject.website !== "") {
      return (
        <a
          className='text-neutral-700 border-b-2 border-b-orange-400 transition duration-300 ease-in-out hover:text-gray-700 hover:border-b-orange-500'
          target='_blank'
          rel="noopener noreferrer"
          href={arrayObject.website}
        >
          {arrayObject.websiteLinkName}
        </a>
      );
    }
  };

  const getLocation = () => {
    if (languagePack?.location) {
      return (
        <p className={` mb-4`}>
          <span className=' text-neutral-700 font-semibold'>
            {lang === "en" ? "Location: " : "Sijainti: "}
          </span>
          {languagePack.location}
        </p>
      );
    }
  };

  const getTitleByIndex = (index) => {
    const titles = ["FACILITIES", "CAPACITY", "SIZE", "HOUSING"]
    return titles[index]
  }

  return (
    <div className={" flex flex-row justify-between px-8 gap-12"}>
      {languagePack.facts.map((fact, index) => {
        return (
          <div key={index} className="flex max-w-96 flex-col items-start gap-4">
            <h6 className=" text-3xl font-semibold text-neutral-200">{getTitleByIndex(index)}</h6>
            <p className=" text-base text-neutral-400">{fact}</p>
          </div>
        );
      })}
    </div>
  );
}
