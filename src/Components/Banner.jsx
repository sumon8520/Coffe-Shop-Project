import banner from '../assets/banner.jpg';


const Banner = () => {
    return (
        <div className='h-[550px] md:h-[700px]' style={{
            backgroundImage: `url(${banner})` ,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>

        </div>
    );
};

export default Banner;