import "./Banner.css";
import BannerImg from '../../../assets/banner-img.png'



const Banner = () => {
    return (<div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>The global earphones and headphones market size was valued at USD 58,259.2 million in 2022
                    and is expected to grow at a compound annual growth rate of 12.6% from 2023 to 2030.</p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="" />
            
        </div>
    </div>
    );
};

export default Banner;
