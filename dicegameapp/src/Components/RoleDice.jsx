import { useState } from 'react';
import { styled } from 'styled-components';
import Roles from './Roles';
const RoleDice = ({changeImg,clickDice,resetFun}) => {

    const [show, setShow] = useState(false);

    const showRules = ()=>{
        setShow(!show);
    }

    return (
        <Wrapper>

            <div>
                <section className='diceImg'>
                    <div onClick={clickDice} >
                        <img src={`./dice/dice_${changeImg}.png`} alt="" />
                    </div>
                    <h3>Click on Dice to roll</h3>
                    <button className='btn_2' onClick={resetFun} >Reset Score</button>
                    <button className='btn' onClick={showRules} >Show Rules</button>
                </section>
            </div>

            
            {
                show ? <Roles  /> : ''
            }

        </Wrapper>


    );
}

export default RoleDice;

const Wrapper = styled.div`
width: 100%;
padding-top: 6rem;
.diceImg{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h3{
        font-size: 1.8rem;
        padding: .9rem  0rem;
        font-weight:500;
    }
    img{
        width: 22rem;
    }

    div{
        cursor: pointer;
    }

}
;

`;
