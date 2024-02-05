import {FC, useState} from "react";
// import styled from "styled-components";
// import {BorderedBox} from "../lib/bordered-box";
// import { useReplicant } from "../../../use-replicant";
import {Grid, Switch, TextField} from "@mui/material";
import {Button} from "@mui/material";
import {useReplicant} from "../../../use-replicant";
import {MatchArray, Result} from "../../../../nodecg/generated";
// import { Match, MatchArray,Result } from "../../../../nodecg/generated";

// const Container = styled(BorderedBox)`
// 	padding: 16px;
// 	display: grid;
// 	grid-template-columns: repeat(2, 1fr);
// 	grid-template-rows: 1fr;
// 	grid-gap: 8px;
// 	user-select: none;
// `;

const matchArrayRep = nodecg.Replicant("matchArray");
const resultRep = nodecg.Replicant("result");

// const defaultValue: MatchArray = {matches: [
// 	{isDone: false, isLeftPlayerWin: false, leftScore:0, rightScore:0},
// 	{isDone: false, isLeftPlayerWin: false, leftScore:0, rightScore:0},
// 	{isDone: false, isLeftPlayerWin: false, leftScore:0, rightScore:0},
// 	{isDone: false, isLeftPlayerWin: false, leftScore:0, rightScore:0},
// 	{isDone: false, isLeftPlayerWin: false, leftScore:0, rightScore:0},
// 	{isDone: false, isLeftPlayerWin: false, leftScore:0, rightScore:0},
// 	{isDone: false, isLeftPlayerWin: false, leftScore:0, rightScore:0},
// 	{isDone: false, isLeftPlayerWin: false, leftScore:0, rightScore:0},
// 	{isDone: false, isLeftPlayerWin: false, leftScore:0, rightScore:0},
// 	{isDone: false, isLeftPlayerWin: false, leftScore:0, rightScore:0},
// 	{isDone: false, isLeftPlayerWin: false, leftScore:0, rightScore:0},
// 	{isDone: false, isLeftPlayerWin: false, leftScore:0, rightScore:0}
// ]}

export const Sample: FC = () => {
	const matchArray = useReplicant("matchArray");
	// const result = useReplicant("result");

	// const [matchArrayState, setMatchArrayState] = useState<MatchArray>(matchArray ?? defaultValue)

	const [isDone0, setIsDone0] = useState(false);
	const [isLeftPlayerWin0, setIsLeftPlayerWin0] = useState(false);
	const [leftScore0, setleftScore0] = useState(0);
	const [rightScore0, setRightScore0] = useState(0);

	const [isDone1, setIsDone1] = useState(false);
	const [isLeftPlayerWin1, setIsLeftPlayerWin1] = useState(false);
	const [leftScore1, setleftScore1] = useState(0);
	const [rightScore1, setRightScore1] = useState(0);

	const [isDone2, setIsDone2] = useState(false);
	const [isLeftPlayerWin2, setIsLeftPlayerWin2] = useState(false);
	const [leftScore2, setleftScore2] = useState(0);
	const [rightScore2, setRightScore2] = useState(0);

	const [isDone3, setIsDone3] = useState(false);
	const [isLeftPlayerWin3, setIsLeftPlayerWin3] = useState(false);
	const [leftScore3, setleftScore3] = useState(0);
	const [rightScore3, setRightScore3] = useState(0);

	const [isDone4, setIsDone4] = useState(false);
	const [isLeftPlayerWin4, setIsLeftPlayerWin4] = useState(false);
	const [leftScore4, setleftScore4] = useState(0);
	const [rightScore4, setRightScore4] = useState(0);

	const [isDone5, setIsDone5] = useState(false);
	const [isLeftPlayerWin5, setIsLeftPlayerWin5] = useState(false);
	const [leftScore5, setleftScore5] = useState(0);
	const [rightScore5, setRightScore5] = useState(0);

	const [rank0, setRank0] = useState(0);
	const [rank1, setRank1] = useState(0);
	const [rank2, setRank2] = useState(0);
	const [rank3, setRank3] = useState(0);

	const [score0, setScore0] = useState("0-0");
	const [score1, setScore1] = useState("0-0");
	const [score2, setScore2] = useState("0-0");
	const [score3, setScore3] = useState("0-0");

	if (matchArray == null) {
		return <></>;
	}

	// const updateScoreboard = (index:number,newMatch:Match) => {
	// 	const reversedMatch:Match = {
	// 		isDone: newMatch.isDone,
	// 		isLeftPlayerWin: !newMatch.isLeftPlayerWin,
	// 		leftScore: newMatch.rightScore,
	// 		rightScore: newMatch.leftScore
	// 	}
	// 	setMatchArrayState(prevMatchArray => ({
	// 		...prevMatchArray,
	// 		matches: prevMatchArray.matches.map((match, idx) =>{
	// 			if (idx === index) {
	// 				return newMatch;
	// 			} else if (idx === index + 6) {
	// 				return reversedMatch;
	// 			}
	// 			return match;
	// 		}),
	// 	}))
	// 	matchArrayRep.value = matchArrayState
	// }

	const updateScoreboard = () => {
		const newMatchArray: MatchArray = {
			matches: [
				{
					isDone: isDone0,
					isLeftPlayerWin: isLeftPlayerWin0,
					leftScore: leftScore0,
					rightScore: rightScore0,
				},
				{
					isDone: isDone1,
					isLeftPlayerWin: isLeftPlayerWin1,
					leftScore: leftScore1,
					rightScore: rightScore1,
				},
				{
					isDone: isDone2,
					isLeftPlayerWin: isLeftPlayerWin2,
					leftScore: leftScore2,
					rightScore: rightScore2,
				},
				{
					isDone: isDone3,
					isLeftPlayerWin: isLeftPlayerWin3,
					leftScore: leftScore3,
					rightScore: rightScore3,
				},
				{
					isDone: isDone4,
					isLeftPlayerWin: isLeftPlayerWin4,
					leftScore: leftScore4,
					rightScore: rightScore4,
				},
				{
					isDone: isDone5,
					isLeftPlayerWin: isLeftPlayerWin5,
					leftScore: leftScore5,
					rightScore: rightScore5,
				},
				{
					isDone: isDone0,
					isLeftPlayerWin: !isLeftPlayerWin0,
					leftScore: rightScore0,
					rightScore: leftScore0,
				},
				{
					isDone: isDone1,
					isLeftPlayerWin: !isLeftPlayerWin1,
					leftScore: rightScore1,
					rightScore: leftScore1,
				},
				{
					isDone: isDone2,
					isLeftPlayerWin: !isLeftPlayerWin2,
					leftScore: rightScore2,
					rightScore: leftScore2,
				},
				{
					isDone: isDone3,
					isLeftPlayerWin: !isLeftPlayerWin3,
					leftScore: rightScore3,
					rightScore: leftScore3,
				},
				{
					isDone: isDone4,
					isLeftPlayerWin: !isLeftPlayerWin4,
					leftScore: rightScore4,
					rightScore: leftScore4,
				},
				{
					isDone: isDone5,
					isLeftPlayerWin: !isLeftPlayerWin5,
					leftScore: rightScore5,
					rightScore: leftScore5,
				},
			],
		};

		matchArrayRep.value = newMatchArray;
	};

	const updateResult = () => {
		const newResult: Result = {
			score0: score0,
			score1: score1,
			score2: score2,
			score3: score3,
			rank0: rank0,
			rank1: rank1,
			rank2: rank2,
			rank3: rank3,
		};
		resultRep.value = newResult;
	};

	return (
		<Grid container spacing={2}>
			<Grid item xs={3}>
				ゴリオカ vs オムアツ
			</Grid>
			<Grid item xs={1.5}>
				完了
				<Switch
					checked={isDone0}
					onChange={(e) => {
						setIsDone0(e.currentTarget.checked);
					}}
				/>
			</Grid>
			<Grid item xs={1.5}>
				左勝
				<Switch
					checked={isLeftPlayerWin0}
					onChange={(e) => {
						setIsLeftPlayerWin0(e.currentTarget.checked);
					}}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					id='leftScore'
					type='number'
					label='leftScore'
					variant='outlined'
					value={leftScore0}
					onChange={(e) => {
						setleftScore0(Number(e.target.value));
					}}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					id='rightScore'
					type='number'
					label='rightScore'
					variant='outlined'
					value={rightScore0}
					onChange={(e) => {
						setRightScore0(Number(e.target.value));
					}}
				/>
			</Grid>
			<Grid item xs={2}>
				{/* <Button variant="contained" onClick={() => updateScoreboard(0,{isDone:isDone0, isLeftPlayerWin:isLeftPlayerWin0, leftScore:leftScore0, rightScore:rightScore0})}>Update</Button> */}
				<Button variant='contained' onClick={() => updateScoreboard()}>
					Update
				</Button>
			</Grid>

			<Grid item xs={3}>
				ゴリオカ vs ロキてん
			</Grid>
			<Grid item xs={1.5}>
				完了
				<Switch
					checked={isDone1}
					onChange={(e) => {
						setIsDone1(e.currentTarget.checked);
					}}
				/>
			</Grid>
			<Grid item xs={1.5}>
				左勝
				<Switch
					checked={isLeftPlayerWin1}
					onChange={(e) => {
						setIsLeftPlayerWin1(e.currentTarget.checked);
					}}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					id='leftScore'
					type='number'
					label='leftScore'
					variant='outlined'
					value={leftScore1}
					onChange={(e) => {
						setleftScore1(Number(e.target.value));
					}}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					id='rightScore'
					type='number'
					label='rightScore'
					variant='outlined'
					value={rightScore1}
					onChange={(e) => {
						setRightScore1(Number(e.target.value));
					}}
				/>
			</Grid>
			<Grid item xs={2}>
				<Button variant='contained' onClick={() => updateScoreboard()}>
					Update
				</Button>
				{/* <Button variant="contained" onClick={() => updateScoreboard(1,{isDone:isDone1, isLeftPlayerWin:isLeftPlayerWin1, leftScore:leftScore1, rightScore:rightScore1})}>Update</Button> */}
			</Grid>

			<Grid item xs={3}>
				ゴリオカ vs たまぴー
			</Grid>
			<Grid item xs={1.5}>
				完了
				<Switch
					checked={isDone2}
					onChange={(e) => {
						setIsDone2(e.currentTarget.checked);
					}}
				/>
			</Grid>
			<Grid item xs={1.5}>
				左勝
				<Switch
					checked={isLeftPlayerWin2}
					onChange={(e) => {
						setIsLeftPlayerWin2(e.currentTarget.checked);
					}}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					id='leftScore'
					type='number'
					label='leftScore'
					variant='outlined'
					value={leftScore2}
					onChange={(e) => {
						setleftScore2(Number(e.target.value));
					}}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					id='rightScore'
					type='number'
					label='rightScore'
					variant='outlined'
					value={rightScore2}
					onChange={(e) => {
						setRightScore2(Number(e.target.value));
					}}
				/>
			</Grid>
			<Grid item xs={2}>
				<Button variant='contained' onClick={() => updateScoreboard()}>
					Update
				</Button>
				{/* <Button variant="contained" onClick={() => updateScoreboard(2,{isDone:isDone2, isLeftPlayerWin:isLeftPlayerWin2, leftScore:leftScore2, rightScore:rightScore2})}>Update</Button> */}
			</Grid>

			<Grid item xs={3}>
				オムアツ vs ロキてん
			</Grid>
			<Grid item xs={1.5}>
				完了
				<Switch
					checked={isDone3}
					onChange={(e) => {
						setIsDone3(e.currentTarget.checked);
					}}
				/>
			</Grid>
			<Grid item xs={1.5}>
				左勝
				<Switch
					checked={isLeftPlayerWin3}
					onChange={(e) => {
						setIsLeftPlayerWin3(e.currentTarget.checked);
					}}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					id='leftScore'
					type='number'
					label='leftScore'
					variant='outlined'
					value={leftScore3}
					onChange={(e) => {
						setleftScore3(Number(e.target.value));
					}}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					id='rightScore'
					type='number'
					label='rightScore'
					variant='outlined'
					value={rightScore3}
					onChange={(e) => {
						setRightScore3(Number(e.target.value));
					}}
				/>
			</Grid>
			<Grid item xs={2}>
				<Button variant='contained' onClick={() => updateScoreboard()}>
					Update
				</Button>
				{/* <Button variant="contained" onClick={() => updateScoreboard(3,{isDone:isDone3, isLeftPlayerWin:isLeftPlayerWin3, leftScore:leftScore3, rightScore:rightScore3})}>Update</Button> */}
			</Grid>

			<Grid item xs={3}>
				オムアツ vs たまぴー
			</Grid>
			<Grid item xs={1.5}>
				完了
				<Switch
					checked={isDone4}
					onChange={(e) => {
						setIsDone4(e.currentTarget.checked);
					}}
				/>
			</Grid>
			<Grid item xs={1.5}>
				左勝
				<Switch
					checked={isLeftPlayerWin4}
					onChange={(e) => {
						setIsLeftPlayerWin4(e.currentTarget.checked);
					}}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					id='leftScore'
					type='number'
					label='leftScore'
					variant='outlined'
					value={leftScore4}
					onChange={(e) => {
						setleftScore4(Number(e.target.value));
					}}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					id='rightScore'
					type='number'
					label='rightScore'
					variant='outlined'
					value={rightScore4}
					onChange={(e) => {
						setRightScore4(Number(e.target.value));
					}}
				/>
			</Grid>
			<Grid item xs={2}>
				<Button variant='contained' onClick={() => updateScoreboard()}>
					Update
				</Button>
				{/* <Button variant="contained" onClick={() => updateScoreboard(4,{isDone:isDone4, isLeftPlayerWin:isLeftPlayerWin4, leftScore:leftScore4, rightScore:rightScore4})}>Update</Button> */}
			</Grid>

			<Grid item xs={3}>
				ロキてん vs たまぴー
			</Grid>
			<Grid item xs={1.5}>
				完了
				<Switch
					checked={isDone5}
					onChange={(e) => {
						setIsDone5(e.currentTarget.checked);
					}}
				/>
			</Grid>
			<Grid item xs={1.5}>
				左勝
				<Switch
					checked={isLeftPlayerWin5}
					onChange={(e) => {
						setIsLeftPlayerWin5(e.currentTarget.checked);
					}}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					id='leftScore'
					type='number'
					label='leftScore'
					variant='outlined'
					value={leftScore5}
					onChange={(e) => {
						setleftScore5(Number(e.target.value));
					}}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					id='rightScore'
					type='number'
					label='rightScore'
					variant='outlined'
					value={rightScore5}
					onChange={(e) => {
						setRightScore5(Number(e.target.value));
					}}
				/>
			</Grid>
			<Grid item xs={2}>
				<Button variant='contained' onClick={() => updateScoreboard()}>
					Update
				</Button>
				{/* <Button variant="contained" onClick={() => updateScoreboard(5,{isDone:isDone5, isLeftPlayerWin:isLeftPlayerWin5, leftScore:leftScore5, rightScore:rightScore5})}>Update</Button> */}
			</Grid>

			<Grid item xs={2}>
				スコア
			</Grid>
			<Grid item xs={2}>
				<TextField
					id='rank'
					type='text'
					label='ゴリオカscore'
					variant='outlined'
					value={score0}
					onChange={(e) => {
						setScore0(e.target.value);
					}}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					id='rank'
					type='text'
					label='オムアツscore'
					variant='outlined'
					value={score1}
					onChange={(e) => {
						setScore1(e.target.value);
					}}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					id='rank'
					type='text'
					label='たまぴーscore'
					variant='outlined'
					value={score2}
					onChange={(e) => {
						setScore2(e.target.value);
					}}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					id='rank'
					type='text'
					label='ロキてんscore'
					variant='outlined'
					value={score3}
					onChange={(e) => {
						setScore3(e.target.value);
					}}
				/>
			</Grid>
			<Grid item xs={2}>
				<Button variant='contained' onClick={() => updateResult()}>
					Update
				</Button>
			</Grid>

			<Grid item xs={2}>
				ランク
			</Grid>
			<Grid item xs={2}>
				<TextField
					id='rank'
					type='number'
					label='ゴリオカrank'
					variant='outlined'
					value={rank0}
					onChange={(e) => {
						setRank0(Number(e.target.value));
					}}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					id='rank'
					type='number'
					label='オムアツrank'
					variant='outlined'
					value={rank1}
					onChange={(e) => {
						setRank1(Number(e.target.value));
					}}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					id='rank'
					type='number'
					label='たまぴーrank'
					variant='outlined'
					value={rank2}
					onChange={(e) => {
						setRank2(Number(e.target.value));
					}}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					id='rank'
					type='number'
					label='ロキてんrank'
					variant='outlined'
					value={rank3}
					onChange={(e) => {
						setRank3(Number(e.target.value));
					}}
				/>
			</Grid>
			<Grid item xs={2}>
				<Button variant='contained' onClick={() => updateResult()}>
					Update
				</Button>
			</Grid>
		</Grid>
	);
};
