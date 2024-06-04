import Image from "next/image";
import klemmari from '../public/klemm.svg'

export default function Title({ partOne, partTwo }) {

    return (
        <div className="flex flex-row p-4 rounded-md gap-4 border border-primary">
            <h2 className=" text-xl text-orange-400">{partOne} <span className=" text-white">{partTwo}</span></h2>
            <Image src={klemmari} alt="logo" />
        </div>
    )
}