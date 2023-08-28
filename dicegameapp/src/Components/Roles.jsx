import { styled } from 'styled-components';
const Roles = () => {

    
    return (
        <Container>
            <section >
                <h3>How to play dice game</h3>
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>after click on dice if selected number is equal to dice number you will get same point as dice</p>
                <p>if you get wrong guess then 2 point will be dedcuted</p>
            </section>
        </Container>
    );
}

export default Roles;

const Container = styled.div`
width: 100%;
margin-top: 3rem;
margin-bottom: 3rem;

section{
    width: 50%;
    margin: 0 auto;
    padding: 1rem 2rem;
    background-color: #FBF1F1;
    border-radius: .3rem;

    p{
        padding: .4rem;
        font-size: 1.4rem;
        text-align: left;
    }
    h3{
        font-size: 1.7rem;
        padding-bottom: .7rem;
        font-weight: 500;
    }
    
}


`;

