import { Link } from 'nextjs13-progress'

export default function Company({ companyObject, lang }) {
    return (
        <div className="card relative">
            <figure className='rounded-b-3xl'>
                <img src={companyObject.image} alt="wide-project-img" className="w-full h-full object-cover" />
            </figure>
            <div className="absolute inset-0 flex rounded-2xl flex-col justify-end items-start p-6 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent">
                <h2 className="card-title text-white mb-2">{companyObject.name}</h2>
                <p className="text-white mb-4">{lang === 'en' ? companyObject.description : companyObject.fin_description}</p>
                <Link
                    target="_blank"
                    href={companyObject.website}
                    className="text-gray-300 border-b-2 border-b-primary transition duration-300 ease-in-out hover:text-white hover:border-b-yellow-500"
                >
                    {companyObject.displayWebsite}
                </Link>
            </div>
        </div>
    );
}