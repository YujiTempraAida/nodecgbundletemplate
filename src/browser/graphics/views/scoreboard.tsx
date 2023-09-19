import "modern-normalize";
import "../styles/adobe-fonts.js";
import {render} from "../../render.js";
import { useReplicant } from "../../use-replicant.js";



const App = () => {
	const scoreboard = useReplicant("scoreboard")

	return (
		<>
			{scoreboard ? scoreboard.name : "noname"}
			{scoreboard ? scoreboard.score : 0}
		</>
	);
};

render(<App />);
