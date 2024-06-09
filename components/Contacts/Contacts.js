'use client'
import Person from './Person/Person';
import React from 'react';
import dude1 from '../../public/dude1.svg'
import dude2 from '../../public/dude2.svg'
import dude3 from '../../public/dude3.svg'
import dude4 from '../../public/dude4.svg'
import dude5 from '../../public/dude5.svg'


export default function Contacts({ lang }) {
    
    return (
        <div className={"w-full bg-neutral-800 py-16 px-6 flex justify-center items-center"}  id="contact">
            <div className='w-full max-w-7xl'>
                <div className={" mb-4 md:mb-8"}>
                    <div className={" text-xl md:text-3xl font-semibold text-neutral-300"}>
                        <p>{lang === 'en' ? 'Contact Us' : 'Yhteystiedot'}</p>
                    </div>
                </div>
                <div className={"w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4"}>
                    <Person cl={" col-span-1 xl:col-span-3"} image="Bean.jpeg" firstname={"Jouni"} lastname={"Alho"}  phone={'+358 50 3054104'} email="jouni.alho@sepos.fi" />
                    <Person cl={" col-span-1 xl:col-span-3"} image="Bean.jpeg" firstname={"Juha"} lastname={"Pajunen"}  phone={'+358 40 7441272'} email="juha.pajunen@axecon.fi" />    
                    <Person cl={" col-span-1 xl:col-span-2"} image="Bean.jpeg" firstname={"Ilkka"} lastname={"Kilpimaa"}  phone={'+358 40 7435223'} email="ilkka.kilpimaa@sepos.fi" />
                    <Person cl={" col-span-1 xl:col-span-2"} image="Bean.jpeg" firstname={"Timo"} lastname={"Everi"}  phone={'+358 40 8600231'} email="timo.everi@sepos.fi" />
                    <Person cl={" col-span-1 xl:col-span-2"} image="Bean.jpeg" firstname={"Jorma"} lastname={"Alanne"} email="jorma.alanne@taaleri.com" />
                </div>
            </div>
        </div>

    );
}