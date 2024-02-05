import {NodeCG} from "./nodecg";
import {Result} from "../nodecg/generated";

export const result = (nodecg: NodeCG) => {
	// 今後の実装でなんかあったらログ出すようにする
	const log = new nodecg.Logger("result");
	const defaultValue: Result = {
		score0: "0-0",
		score1: "0-0",
		score2: "0-0",
		score3: "0-0",
		rank0: 0,
		rank1: 0,
		rank2: 0,
		rank3: 0,
	};
	const resultRep = nodecg.Replicant("result", {defaultValue: defaultValue});

	resultRep.on("change", () => {
		log.info("result updated");
	});
};
