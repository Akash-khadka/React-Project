import { BackgroundImage, Button } from "@mantine/core"
import CoinImage from "../Images/coin.png"
import MainImage from "../Images/home_image.png"
import BottomImage from "../Images/bottom.png"
export const HomePage=()=>{
    return<>
    <section className="flex items-center justify-center">
        <div className="text-area text-center pt-xxl">
            <div className="title text-3xl font-bold text-[64px]">
                Discover your spending habits
            </div>
            <div className="sub-title  text-[44px] font-bold text-secondary-700 ">
                Try our expense tracker
            </div>
            <div className="btn">
            <Button variant="filled" color="orange" size="lg">Try Now</Button>
            <Button variant="outline" color="orange" size="lg" ml='xs'>Learn More</Button>
            </div>
            
        </div>
    </section>   
    <div className="home-image flex h-24 w-full"> 
                <div className="flex-auto w-1/4 flex justify-between items-end">
                <img className="h-[320px]" src={MainImage}/>
                </div>
                <div className="flex-auto w-1/2 flex justify-end items-end object-cover">
                <img className="h-[200px]" src={BottomImage}/>
                </div>
                <div className="flex-auto w-1/4 flex justify-end items-end">
                <img className="h-[200px]" src={CoinImage}/>
                </div>
            </div> 
    </>
}