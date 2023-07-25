import React from 'react'
import './Firstcontainer.css' 
import Firstresult from './Firstresult';
const Firstcontainer = () => {
  const arr = [
    {
        img : "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcL5jLOTAi6HXLNlsRDzpf7v08IAzrUNZrAnCbLWgI9pl9--18vxOC0c1HUa-_juV6tdkUCyaNltNHvRw1cjSsoSE8fATn0ATFW2Q9vQltY6Ffnf2BlQhxpAB6wSaf7_9nLp.jpg?r=c0e",
        title : "Peaky Blinders",
        desc : "Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham."
    },
    {
        img : "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSNtJvu8215Gl8GlVv_EEDFMgltlMgvQGUb_8wpfUL6BKCLHa5PYQcZZVizJJhcTCUsy4ST5mhGNGGffm-MYgGgdgvIGJf_OvT0IPUEke88IaN7ireJ4uV_BVLjVTXbwlfo1.jpg?r=c68",
        title : "Stranger Things",
        desc : "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits"
    },
    {
        img : "https://images7.alphacoders.com/617/thumbbig-617964.webp",
        title : "Breaking Bad",
        desc : "Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts"
    },
    {
        img : "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRXabvZzn6TLqPxrKQycbwVeKqSTL4YB5S-gXUZ2hLQ4KeyhMWLs_o8yuvxDxGlbq1LUiT5dYwyPP_Zk2_a4eOxdJ5cAnxoqgz-d-tbckSK6nZr97o0rI_67bdxXaWnLI0h0.jpg?r=5c6",
        title : "Narcos",
        desc : "Netflix chronicles the rise of the cocaine trade in Colombia and the gripping real-life stories of drug kingpins of the late '80s."
    },
    {
        img : "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUORewIp1ymYQSU3Pa8s2rl849zY6rUsC8D_HbasXQ9iM7q9xYQD4Y4WfVnVIgMjMca-UDA8T0UnGnQPK1TuNXmOXLx6tuInsvDWUqqrdR9LhbFODVZ54X4e4bTEM50sewyQ.jpg?r=fb2",
        title : "Never Have I Ever",
        desc : "After a traumatic year, a first-generation Indian-American teenager wants to improve her status at school."
    }
  ];
  return (
    <div className='Firstcontainer'>
    <h2>Popular on Netflix</h2>
    <div className='Firstcontainer__content'>
    {
        arr.map((index,element) =>{
        return (
            <Firstresult key={element} img={index.img} title={index.title} desc={index.desc}/>
        )
        })  
    }
    </div>
    </div>
  )
}

export default Firstcontainer
