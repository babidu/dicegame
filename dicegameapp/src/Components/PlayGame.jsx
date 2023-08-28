import { styled } from 'styled-components';
export const PlayGame = ({toggleBtn}) => {

    return (
        <Wrapper>
            <section className='dice'>
                <section className="left">
                    <img src="./dice/dices 1.png" alt="dice" />
                </section>
                <section className="left left_2">
                    <h1>Dice game</h1>
                    <button onClick={toggleBtn} className='btn'>Play Now</button>
                </section>
            </section>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    /* background-color: green; */
    .dice
    {
        width: 65%;
        height: 100vh;
        margin: 0 auto;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 1rem;
        section{
            width: 45%;
            h1{
                font-size: 6rem;
                text-transform: uppercase;
                font-weight: 800 !important;
                font-family: sans-serif;
            }
            
        }
        .left_2 
       {
        text-align: right;
        
       }
        img{
            width: 100%;
        }
    }

`;
