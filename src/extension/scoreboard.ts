import {NodeCG} from "./nodecg";
import { Scoreboard } from "../nodecg/generated";

export const scoreboard = (nodecg: NodeCG) => {
	const log = new nodecg.Logger("scoreboard");

	if (!nodecg == null) {
		log.warn("replicant is null")
	}



	const updateScoreboard = (data: Scoreboard) => {
		console.log("ikuyo")
		console.log(data.name)
		console.log(data.score)
		const scoreboardRep = nodecg.Replicant("scoreboard")

		if (scoreboardRep.value==undefined) {
			log.warn("scoreboardRep.value is undefined")
			return
		}

		// scoreboardRep.value.name = data.name
		// scoreboardRep.value.score = data.score

	}

	nodecg.listenFor("scoreboard:update",updateScoreboard)
};
