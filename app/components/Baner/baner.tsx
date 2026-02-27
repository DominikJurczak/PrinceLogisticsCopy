export type BanerTypes = {
    image: string;
    alt: string;
    banerText?: string;
    width?: string;
    imgStyle?: React.CSSProperties
}

const Baner = ({image, alt, banerText, width='60%', imgStyle}:BanerTypes) => {
    return ( 
        <div className="group relative block w-full h-[252px] overflow-hidden">
            <div className="absolute inset-0">
                <img src={image} alt={alt} className='w-full h-[253px] object-cover' style={imgStyle}/>
            </div>

            <div className="absolute inset-0 bg-black/10 group-hover:bg:black/60 transition duration-500"></div>

            <div className='relative z-10 flex items-center justify-end h-[252px] mx-auto text-left' style={{width}}>

                <h2 className="text-white text-3xl md:text-5xl font-bold  px4 text-left w-[50%] italic">{banerText}</h2>

            </div>
        </div>
     );
}
 
export default Baner;