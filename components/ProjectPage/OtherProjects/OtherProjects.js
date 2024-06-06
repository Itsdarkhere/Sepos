'use client'
import Project from "@/components/ProjectSlider/Project";

export default function OtherProjects({ projectArray, lang }) {
  return (
    <div className=' w-full bg-zinc-800 flex justify-center items-center py-16 px-6'>
      <div className='w-full flex flex-col items-start md:items-center max-w-7xl gap-4  md:gap-8'>
        <div
          className={" text-base md:text-3xl font-semibold text-neutral-300"}
        >
          <p>{lang === "en" ? "Other Projects" : "Muut Projektit"}</p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {projectArray.map((project, i) => {
              return (
                <Project key={i} project={project} lang={lang} projectIndex={i} projectPage={true} />
              )
            })}
        </div>
      </div>
    </div>
  );
}
