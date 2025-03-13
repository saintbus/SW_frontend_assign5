import styles from './card.module.css'
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';

export default function Card({ venueName, imgSrc} : { venueName:string, imgSrc:string}) {
    return (
        <InteractiveCard>
            <div className="w-full h-[70%] relative rounded-t-lg">
                <Image src={imgSrc}
                alt='Venue Picture'
                fill={true}
                className='object-cover rounded-t-lg'
                />
            </div>
            <div className="h-[30%] p-2 text-sm font-bold text-emerald-700 underline">
                <div>{venueName}</div>
            </div>
        </InteractiveCard>
    );
}