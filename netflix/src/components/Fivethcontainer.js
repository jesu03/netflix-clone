import React from 'react'
import './Fivethcontainer.css'
import Fivethcontainerresult from './Fivethcontainerresult';
const Fivethcontainer = () => {
    const arr = [
        {
            img : "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTPztrrybbafuIbVGlMXXdmX_pxTcagF3omYgI8OhRTC42EtXsAdSf3hdHP-0Llk8N1CVs790B1QT021GLGooMv2ZUzi4qJc3ADN76L7ry_fxKM_THpwn_eZakDNTd49OTXR.jpg?r=22c",
            title : "Sex Education",
            desc : "Socially awkward high school student Otis may not have much experience in the lovemaking department."
        },
        {
            img : "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABevcCxnF415ASm6tsQDgqPIzvyFOiqGRtCzMNCr8kP7l9MbBlktMqNYxFLGuunhrB4wy383CgM7-V71_kBF_5JgEToHstJMnNx3zCWf7JAjN_VQ_fZyeyYRcYpZbNYo429d5.jpg?r=d98",
            title : "Wish Dragon",
            desc : "Determined teen Din is longing to reconnect with his childhood best friend when he meets a wish-granting dragon."
        },
        {
            img : "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYt384ty1HnNsM5ICJCvgchrEVW_N3kyH410aKCQoRwF1Z37LUridQIdlSM29oie2YN_rJkDzSUkSOJ1Nx3AmwR_2TmI3U-Ga6DLrEtbePcmq5_t3jxGY4GF5wkq2SOyi5nm.jpg?r=15a",
            title : "Red Rose",
            desc : "An original horror series exploring the relationship between teenagers and their online lives."
        },
        {
            img : "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABS-Hmw84kLyJ8vapcMviYjRYyRrdzgKQTbCG-jYubZ23gFg6kltxs7gNwx5cLdnBvZF1nZJqjT2_Fi_uL0tGaEwJ-yHc6FInO0yjmQc0fQVZ8uUKQNwFKWq1pEoCzRg7px7I.jpg?r=648",
            title : "Outer Banks",
            desc : "A teenager enlists his three best friends to hunt for a legendary treasure linked to his father's disappearance."
        },
        {
            img : "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZrNo5lFWJE4Kg02TFrHAB2HOAM26VINOGkmBQt3yaALmh_AkdxYfjsK1n4Mqcr8GR_Q-1YlNPxB1ccJF7iD3tOjkrc9vNKX-82-ZO0gua3TaXVWjEcAYwGPjHszdnkbX_aT.jpg?r=097",
            title : "A Tale Dark & Grimm",
            desc : "Hansel and Gretel walk out of their own story and into other wicked and witty tales full of strange and scary surprises."
        }
      ];
      return (
        <div className='Firstcontainer'>
        <h2>Continue Watching</h2>
        <div className='Firstcontainer__content'>
        {
            arr.map((index,element) =>{
            return (
                <Fivethcontainerresult key={element} img={index.img} title={index.title} desc={index.desc}/>
            )
            })  
        }
        </div>
        </div>
      )
}

export default Fivethcontainer
