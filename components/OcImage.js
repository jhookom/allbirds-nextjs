import Image from 'next/image'

export default function OcImage({src, alt, className, imageClassName}) {

    return (
        <div className={`${className} relative`}>
            <Image src={src} alt={alt} layout="fill" objectFit="cover" className={imageClassName}/>
        </div>
    )

}