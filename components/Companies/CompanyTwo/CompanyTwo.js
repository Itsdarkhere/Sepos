import Link from "next/link";

export default function CompanyTwo({ companyObject, lang }) {
    return (
        <div className="card rounded-md max-h-72 md:outline outline-neutral-700 relative">
            <figure className='rounded-md'>
                <img src={companyObject.image} alt="wide-project-img" className="w-full h-full object-cover" />
            </figure>
            <div className="absolute inset-0 flex rounded-md flex-col justify-end items-start px-4 py-6 bg-gradient-to-t from-zinc-900 via-zinc-900/90 to-zinc-900/60">
                <h2 className="card-title text-white mb-2">{companyObject.name}</h2>
                <p className=" text-neutral-200 text-base font-light max-w-96 mb-8">{lang === 'en' ? companyObject.description : companyObject.fin_description}</p>
                <Link
                    target="_blank"
                    href={companyObject.website}
                    className="text-neutral-300 border-b-2 border-b-primary transition duration-300 ease-in-out hover:text-white hover:border-b-yellow-500"
                >
                    {companyObject.displayWebsite}
                </Link>
            </div>
        </div>
    );
}