import { styled } from 'styled-components';

const TotalScore = ({score}) => {
    return (
        <Wrapper>
            <h1> {score} </h1>
            <h4>Total Score</h4>
        </Wrapper>
    );
}

export default TotalScore;

const Wrapper = styled.div`
 width: 15rem;
 height: 15rem;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 h1{
    font-size: 10rem;
    font-weight: 600;
 }
 h4{
    font-size: 2rem;
    font-weight: 600;
 }

`;