import React from 'react'
import './Sixthcontainer.css'
import Thirdcontainerresult from './Thirdcontainerresult';
const Sixthcontainer = () => {
    const arr = [
        {
            img : "https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABec-czyWC55KkfiW2DVsYZAFLLoxe82hdWzv9MXfe_6k7xGYpmaSWBPo5Ejz8k2aFrCzlFNrXsVM41yIRCRS6zgmwBacnrTt25p7IDLJiysqqN-PgtguKF9ejEu2XAP15YCq.jpg?r=0fahttps://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABec-czyWC55KkfiW2DVsYZAFLLoxe82hdWzv9MXfe_6k7xGYpmaSWBPo5Ejz8k2aFrCzlFNrXsVM41yIRCRS6zgmwBacnrTt25p7IDLJiysqqN-PgtguKF9ejEu2XAP15YCq.jpg?r=0fahttps://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABec-czyWC55KkfiW2DVsYZAFLLoxe82hdWzv9MXfe_6k7xGYpmaSWBPo5Ejz8k2aFrCzlFNrXsVM41yIRCRS6zgmwBacnrTt25p7IDLJiysqqN-PgtguKF9ejEu2XAP15YCq.jpg?r=0fa",
            title : "The Perfect Date",
            desc : "A high school student creates an app to offer his services as a fake date to earn money for college."
        },
        {
            img : "https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSUcmFqKjEPG9Sm3IWhYLRL25Bag632HGHpVRtQmW3KtFRsruENALRl9D5Pyl5nEGU0tKpPFOywPtFMe-XvoZ4_NaMvHc5s18MZNoXuUnO9ifPAMVx488Rw_OFYyVZTtvF73.jpg?r=44a",
            title : "Make Me Believe",
            desc : "Two meddling grannies trick their adult grandkids into a meet-cute that reignites a childhood crush and old grudges."
        },
        {
            img : "https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZpivgkCuAms7ukg7bkvMeCOM-OCSBAJZgoDeEc8m5MZEve8bgXOnX04feLqZYRK1v8AiHudGt64ZR67tie3CMXGBabB2KL3JEQiMFXNT3SPMJRr4CTiEYoKV5jyaTK7icXG.jpg?r=e2b",
            title : "Me Time",
            desc : "With his family away, a stay-at-home dad enjoys his first me-time in years by reconnecting with an old friend for a wild weekend."
        },
        
        {
            img : "https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZWFza2queZZ9R2OFvJRNH6bZ0MIDlqtCouob6ze04r6fRoZghXYw8vNchM-LGwF0qA1rIA8LAzs99omFJw82EVctewCBRZCZAWV5rjPNxB9sHNGHaV7iymYnbdbrgTW-yk-.jpg?r=5d7",
            title : "Happiness for Beginners",
            desc : "A year after her divorce, 32-year-old Helen Carpenter lets her brother persuade her to sign up for a wilderness survival course."
        },
        {
            img : "https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbVn-cXM5nTGa2Zrx4p9WWbR83cctb10uZLoToojQEXReSUKAxr6GdTqolt6gImSpvlWK0yIywtUzDJqAXEuzl4zsMZwx1JtY8YU2eq3uUUoNV_bDTcKGq6P2Trf4a4ZsmCT.jpg?r=f0e",
            title : "Designated Survivor",
            desc : "When a mysterious attack kills the president and wipes out everybody in the line of succession."
        },
        
      ];
      return (
        <div className='Firstcontainer'>
        <h2>Only On Netflix</h2>
        <div className='Firstcontainer__content'>
        {
            arr.map((index,element) =>{
            return (
                <Thirdcontainerresult key={element} img={index.img} title={index.title} desc={index.desc}/>
            )
            })  
        }
        </div>
        </div>
      )
}

export default Sixthcontainer
