import {NodeCG} from "./nodecg";
import {MatchArray} from "../nodecg/generated";

export const matchArray = (nodecg: NodeCG) => {
	// 今後の実装でなんかあったらログ出すようにする
	const log = new nodecg.Logger("matchArray");

	const defaultValue: MatchArray = {
		matches: [
			{isDone: false, isLeftPlayerWin: false, leftScore: 0, rightScore: 0},
			{isDone: false, isLeftPlayerWin: false, leftScore: 0, rightScore: 0},
			{isDone: false, isLeftPlayerWin: false, leftScore: 0, rightScore: 0},
			{isDone: false, isLeftPlayerWin: false, leftScore: 0, rightScore: 0},
			{isDone: false, isLeftPlayerWin: false, leftScore: 0, rightScore: 0},
			{isDone: false, isLeftPlayerWin: false, leftScore: 0, rightScore: 0},
			{isDone: false, isLeftPlayerWin: false, leftScore: 0, rightScore: 0},
			{isDone: false, isLeftPlayerWin: false, leftScore: 0, rightScore: 0},
			{isDone: false, isLeftPlayerWin: false, leftScore: 0, rightScore: 0},
			{isDone: false, isLeftPlayerWin: false, leftScore: 0, rightScore: 0},
			{isDone: false, isLeftPlayerWin: false, leftScore: 0, rightScore: 0},
			{isDone: false, isLeftPlayerWin: false, leftScore: 0, rightScore: 0},
		],
	};
	const matchArrayRep = nodecg.Replicant("matchArray", {
		defaultValue: defaultValue,
	});
	// matchArrayRep.value = defaultValue

	// for (let index = 0; index < 6; index++) {
	// 	matchArrayRep.value?.matches.push(defaultValue)
	// }
	log.info("イクイクイクイクイクイクイクイクイクイクイクイクイクイクイク");
	log.info(matchArrayRep.value);
};
