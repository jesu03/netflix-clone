import React from 'react'
import './Secondcontainer.css'
import Secondcontainerresult from './Secondcontainerresult';
const Secondcontainer = () => {
    const arr = [
        {
            img : "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZKXOFM6a3iRpx6l69Dwjs4suPf2yjx9X-cwhcU_c88N89lApGtl8LqESD7nH97ut0Vd1yMlwWtHPNMrmQohXTsDHQIgBsAbnN3NVps-sTFsbY4PUMsTiRS3g3ykOZ6OCViu.jpg?r=b38",
            title : "Army of Thieves",
            desc : "In this prequel to \"Army of the Dead,\"a mysterious woman recruits bank teller Dieter to assist in a heist of impossible."
        },
        {
            img : "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXk5Kie7BRxKksHjIbZs7Qk5a07YfwYQE5J4paPASY-lu2NVjmp5D_7-ckx-if96DX-YjVtiRSmtClsmoxb99aDb2_Uc4qQc45V5CoRhXbXxO98hBsjQyScRvp1cJBCnHE6E.jpg?r=e47",
            title : "Man vs. Bee",
            desc : "A homeless man looking for work is mistaken by a business woman for her new house sitter"
        },
        {
            img : "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfNHj91muJFh8mIMCpj5qNBh7kvhmytGYRkYnFWqUHb-hUiMN7nGMWw1EU_xXvF1AbBSO4vnfb72D1t2jAUSBMjghcKo4gC9piXeZQJtztJjcPABbxzAPdaj2nrx7zsk8avg.jpg?r=074",
            title : "6 Underground",
            desc : "Six individuals from all around the globe, each the very best at what they do."
        },
        {
            img : "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTvH-KKZOptDhdnLxOuTqfD-gIcSQbc1OtZoLic7iokSCiYuTZJvISpzKxJ4Bzqt-P3KV9KZVaaTCewTsgvo_6Jtzr2dv6siqCTjJfYC5q5rDBvMeNtYNIkwPyACtFAQlVEe.jpg?r=b32",
            title : "The Mother",
            desc : "While fleeing from dangerous assailants, an assassin comes out of hiding to protect her daughter."
        },
        {
            img : "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdzOeOqPEk1M_DWfMF64utFLlsrEMLTsiViL_B4cVd1PuKFzMNbkkathcJBDLghK2pIeAanGHGL_X5pgpNZDnCQPlbK9mVM8UFdjutj-fHXxQASUlsEWhvy25GXqlXGZVz_3.jpg?r=fb8",
            title : "The Gray Man",
            desc : "When the CIA's top asset -- his identity known to no one -- uncovers agency secrets."
        }
      ];
      return (
        <div className='Firstcontainer'>
        <h2>Trending Now</h2>
        <div className='Firstcontainer__content'>
        {
            arr.map((index,element) =>{
            return (
                <Secondcontainerresult key={element} img={index.img} title={index.title} desc={index.desc}/>
            )
            })  
        }
        </div>
        </div>
      )
}

export default Secondcontainer
