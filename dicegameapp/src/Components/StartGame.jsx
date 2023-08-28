import { styled } from 'styled-components';
import TotalScore from "./TotalScore";
import { useState } from 'react';

import RoleDice from './RoleDice';

const StartGame = () => {
	const selectNum = [1, 2, 3, 4, 5, 6];
	const [selectNumber, setSelectNumber] = useState();
	const [changeImg, setchangeImg] = useState(1);
	const [score, setScore] = useState(0);
	const [error, setError] = useState('');


	const randomNumGenerator = (max, min) => {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	const clickDice = () => {

		if (!selectNumber) {
			setError("You Have Not Selected Any Number");
			return;
		} else {
			setError('');
		}

		const randomNum = randomNumGenerator(1, 7);
		console.log(randomNum);

		setchangeImg((pre) => randomNum);

		if (selectNumber === randomNum) {
			setScore((pre) => pre + 2)
		} else {
			setScore((pre) => pre - 1)
		}

		setSelectNumber('');



	}

	const resetFun= ()=>{
		setScore(0);
	}
	const errorRemoveHandler= (cValue)=>{
		setSelectNumber(cValue);
		setError('');

	}

	return (
		<Wrapper>
			<div className="main">
				<section>
					<TotalScore
						score={score}
					/>
				</section>
				<section>
					<h5 style={{textAlign:'right',fontSize:'1.6rem',paddingBottom:'1rem',color:'red',fontWeight:'500'}} >{error}</h5>
					<section className='selectNum'>

						{selectNum.map((cValue, ind) => (
							<div className={`select ${cValue === selectNumber ? 'selected' : ''} `}
								onClick={() => errorRemoveHandler(cValue)}
								key={ind}
							>
								{cValue}
							</div>
						))}

					</section>
					<h3 style={{ textAlign: "right", marginTop: "1.2rem", fontSize: "1.7rem" }} >Select Number</h3>
				</section>
			</div>

			<RoleDice
				changeImg={changeImg}
				clickDice={clickDice}
				resetFun={resetFun}
			/>

		</Wrapper>

	)
}

export default StartGame;

const Wrapper = styled.div`
width: 100%;
.main{
width: 90%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
.selectNum
{
    display: flex;
    gap: 2rem;

    div.select {
    width: 5rem;
    height: 5rem;
    border: .1rem solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.7rem;
    font-weight: 700;
    cursor: pointer;
    background: #fff;
	}

	div.select.selected{
		background: #000;
		color: #fff;
	}
}

}

`;
