import Person from './Person/Person';
import React from 'react';

export default function Contacts({ lang }) {

    return (
        <div className={"w-full bg-neutral-800 py-16 px-6 flex justify-center items-center"}  id="contact">
            <div className='w-full max-w-7xl'>
                <div className={" mb-4 md:mb-8"}>
                    <div className={" text-xl md:text-3xl font-semibold text-neutral-300"}>
                        <p>{lang === 'en' ? 'Contact Us' : 'Yhteystiedot'}</p>
                    </div>
                </div>
                <div className={"w-full grid grid-cols-1 md:grid-cols-3 gap-4"}>
                    <Person cl={"col-span-1"} image="Bean.jpeg" firstname={"Juha"} lastname={"Pajunen"}  phone={'+358 40 7441272'} email="juha.pajunen@axecon.fi" />
                    <Person cl={"col-span-1"} image="Bean.jpeg" firstname={"Ilkka"} lastname={"Kilpimaa"}  phone={'+358 40 7435223'} email="ilkka.kilpimaa@sepos.fi" />
                    <Person cl={"col-span-1"} image="Bean.jpeg" firstname={"Timo"} lastname={"Everi"}  phone={'+358 40 8600231'} email="timo.everi@sepos.fi" />
                </div>
            </div>
        </div>

    );
}
