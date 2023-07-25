import React from 'react'
import './Fourthcontainer.css'
import Fourthcontainerresult from './Fourthcontainerresult';
const Fourthcontainer = () => {
    const arr = [
        {
            img : "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYj8Zhknq6PlTA-akZOg-2WbqlAy8r0s4ZxSAL44E62nf7bbSADU-Qe22m_UQ4OAsFhgHRUC2PrIfx8jR3LBWLvrbvy3ujn_l7vX5pGvb9pNaFQQLEk-9mSIvq8rCOv2UAt3.jpg?r=883",
            title : "Jurassic Park",
            desc : "Jurassic Park, later also referred to as Jurassic World, is an American science fiction media franchise created by Michael Crichton."
        },
        {
            img : "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXuDQfvvXT45bJAQ9mFyPupsyx9Nuby2wMGvFGA5bXDiZbTOGRqWqcToExRZlL-fOoEnUMoV3ttVJAj0clTmnbYoEBbQmgvlkgW9c1h0V2Q9gPwtyvdPVxGXwvwWCDfcUQ-a.jpg?r=fda",
            title : "Dark Desire",
            desc : "A married woman spends a fateful weekend away from home that ignites passion but ends in tragedy."
        },
        {
            img : "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABc3Jvf3KrcbA5TU6NYeu4YBWiXsSUbOkdyUZZ7htRuuisKZRteW8TRVAENhbGwb84rF3XZCdVHZV8-EozxDq2OmlHaHWg6_0XtOXlVObw3ATT_s5e1bgSU1q-5GwIQW1T0Mj.jpg?r=116",
            title : "Don't Look Up",
            desc : "Two low-level astronomers must go on a giant media tour to warn mankind of an approaching comet."
        },
        {
            img : "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYEWKTDd_YPgNr1y5SZNv0yGUXfGskBMXBjVllwCKh5iu3yytnFkwlyjDoqWcbzAClwYUkPSxK8dSpeBiNADdjqriX2hhJpyHrRy7TFRGYAxLl7aKBPKWd4aVMH0gTj7nWD1.jpg?r=4aa",
            title : "Mindhunte",
            desc : "Catching a criminal often requires the authorities to get inside the villain's mind to figure out how he thinks."
        },
        {
            img : "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeJS8fp-Pty_LeKOpX-5ViMUyz2MvbCX4vJCblq3Js4C558mk5ffq0P-LpDAtSVGkR1HJCOfXtGj5dkGdLCXzwXFHFbWip-V7oIu3Jawe9xyB8qpQDj1NWdLfPD5hbckXW4v.jpg?r=4e8",
            title : "The Elephant Whisperers",
            desc : "Bomman and Bellie, a couple in South India, devote their lives to caring for an orphaned baby elephant named Raghu."
        }
      ];
      return (
        <div className='Firstcontainer'>
        <h2>Watch it Again</h2>
        <div className='Firstcontainer__content'>
        {
            arr.map((index,element) =>{
            return (
                <Fourthcontainerresult key={element} img={index.img} title={index.title} desc={index.desc}/>
            )
            })  
        }
        </div>
        </div>
      )
}

export default Fourthcontainer
