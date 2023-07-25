import React from 'react'
import './Thirdcontainer.css'
import Thirdcontainerresult from './Thirdcontainerresult';
const Thirdcontainer = () => {
    const arr = [
        {
            img : "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRl_I8QzusjTsWJOr0jB3FVUo9_zr3-RLBXvGwsNVHFrkT777QSt1-Jg-_59XDi0yeu01gyMs1pIa1TR8JZrhMnLoRaI4g032lF9mupcBTMq4HilTN0U20EF3U5VuszIsTd5.jpg?r=bcd",
            title : "He's All That",
            desc : "An influencer who specializes in makeovers bets that she can transform an unpopular classmate into a prom king."
        },
        {
            img : "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTJVuW0nPNprexcMboOdo3wHLbvq501nRqJpceLsF-uBKyAuP4rI8vbWmNsxhvxx63iTTFz50SohCk-4sjuTkwN3aIFze2ZVCgHYr7fCyFZHsCCtrnP1xpp3h-jejkxSdYR4.jpg?r=2c1",
            title : "Tall Girl 2",
            desc : "Jodi Kreyman deals with her newfound popularity. Her miscommunications."
        },
        {
            img : "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZeJPgVJdyIGM1egZ6fD9TYyLku9FkxUqvGJPTQZjohoRqFOG7WJJcaRMHibM99wofypbC6-bHBVXInlUuQXYYsE8Vm-SjL5X7iE0-f_gRE9JT95lVHYaM7TxvHZkzNGRP5W.jpg?r=1b3",
            title : "El Chapo",
            desc : "This drama series chronicles the true story of the rise, capture and escape of notorious Mexican drug lord Joaquín \"El Chapo\" Guzmán."
        },
        {
            img : "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcXIJ-Wdtjp17DZoq42nSnZciBBOtNrsIjTLPB2KvTgZECbBRfMqfW1AEu7zOIDsIcIH2Lde9ukWGqtPxCcP68jUFapn3UwI4aoyvEktQYx5HPTfBAewWLP77lWT3oQzIYGo.jpg?r=b53",
            title : "Another Life",
            desc : "Astronaut Niko Breckinridge is focused on searching the world for alien intelligence."
        },
        {
            img : "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcXs9hwY_Dsay2hZJSPR6XFGff19emnL9SGN1Fxnemk-Iu9uVFpVq59fQS_w_6iOTuG-Z9T0t3QuDfLoWTBb9QaPWwkk1UdCJQsj_iYYfFpp10ZDYWTWkMvRgD2lCz9c0jO5.jpg?r=280",
            title : "The Gift",
            desc : "A married couple, Simon and Robyn, run into Gordo, an old acquaintance. "
        }
      ];
      return (
        <div className='Firstcontainer'>
        <h2>New Releases</h2>
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

export default Thirdcontainer
