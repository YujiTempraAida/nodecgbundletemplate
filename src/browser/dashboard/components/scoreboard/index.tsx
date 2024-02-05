import {FC, useState} from "react";
import styled from "styled-components";
import {BorderedBox} from "../lib/bordered-box";
// import { useReplicant } from "../../../use-replicant";
import {Switch, TextField} from "@mui/material";
import {Button} from "@mui/material";
import {useReplicant} from "../../../use-replicant";

const Container = styled(BorderedBox)`
	padding: 16px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 1fr;
	grid-gap: 8px;
	user-select: none;
`;

export const Sample: FC = () => {
	const matchArrayRep = useReplicant("matchArray");

	const [isDone, setIsDone] = useState(false);
	const [isLeftPlayerWin, setIsLeftPlayerWin] = useState(false);
	const [leftScore, setleftScore] = useState(0);
	const [rightScore, setRightScore] = useState(0);

	if (matchArrayRep == null) {
		return <></>;
	}

	const updateScoreboard = (
		isDone: boolean,
		isLeftPlayerWin: boolean,
		leftScore: number,
		rightScore: number,
	) => {
		matchArrayRep.matches[0] = {
			isDone: isDone,
			isLeftPlayerWin: isLeftPlayerWin,
			leftScore: leftScore,
			rightScore: rightScore,
		};
	};

	return (
		<Container>
			<Switch
				checked={isDone}
				onChange={(e) => {
					setIsDone(e.currentTarget.checked);
				}}
			/>
			<Switch
				checked={isLeftPlayerWin}
				onChange={(e) => {
					setIsLeftPlayerWin(e.currentTarget.checked);
				}}
			/>
			<TextField
				id='leftScore'
				type='number'
				label='leftScore'
				variant='outlined'
				value={leftScore}
				onChange={(e) => {
					setleftScore(Number(e.target.value));
				}}
			/>
			<TextField
				id='rightScore'
				type='number'
				label='rightScore'
				variant='outlined'
				value={rightScore}
				onChange={(e) => {
					setRightScore(Number(e.target.value));
				}}
			/>
			<Button
				variant='contained'
				onClick={() =>
					updateScoreboard(isDone, isLeftPlayerWin, leftScore, rightScore)
				}
			>
				Update
			</Button>
		</Container>
	);
};
