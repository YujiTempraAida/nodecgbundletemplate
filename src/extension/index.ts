import {NodeCG} from "./nodecg";
import {scoreboard} from "./scoreboard";
import {matchArray} from "./matchArray";
import {result} from "./result";

export default (nodecg: NodeCG) => {
	scoreboard(nodecg);
	matchArray(nodecg);
	result(nodecg);
};
