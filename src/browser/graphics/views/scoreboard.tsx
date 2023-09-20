import "modern-normalize";
import "../styles/adobe-fonts.js";
import { BoldText } from "../components/lib/text.js";
import {render} from "../../render.js";
import { useReplicant } from "../../use-replicant.js";

const App = () => {
	const scoreboardRep = useReplicant("scoreboard")

	return (
		<>
			<BoldText>
				{"name: " + scoreboardRep?.name}
			</BoldText>
			<BoldText>
				{"score: " + scoreboardRep?.score}
			</BoldText>
		</>
	);
};

render(<App />);
