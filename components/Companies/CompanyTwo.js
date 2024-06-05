import Link from "next/link"

export default function CompanyTwo({ companyObject, lang }) {

    return (
        <div className="card max-h-64 outline-none md:outline md:outline-neutral-700 rounded-md relative">
            <figure className='rounded-md'>
                <img src={companyObject.image} alt="wide-project-img" className="w-full h-full object-cover" />
            </figure>
            <div className="absolute inset-0 flex rounded-md flex-col justify-end items-start p-6 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-zinc-900/70">
                <h2 className="card-title text-white mb-2">{companyObject.name}</h2>
                <p className="text-neutral-300 max-w-96 mb-8">{lang === 'en' ? companyObject.description : companyObject.fin_description}</p>
                <Link
                    target="_blank"
                    href={companyObject.website}
                    className="text-gray-300 text-sm border-b-2 border-b-primary transition duration-300 ease-in-out hover:text-white hover:border-b-yellow-500"
                >
                    {companyObject.displayWebsite}
                </Link>
            </div>
        </div>
    )
}