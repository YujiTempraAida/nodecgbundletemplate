import "modern-normalize";
import "../styles/adobe-fonts.js";

// import gsap, {Power2} from "gsap";
// import {BoldText, ThinText} from "../components/lib/text";
// import {useReplicant} from "../../use-replicant";
// import moment from "moment";
// import {Fragment, useCallback, useEffect, useRef, useState} from "react";
import {useRef} from "react";
import {OmnEgao} from "../components/omn.js";
import {setup} from "../styles/colors.js";
// import {newlineString} from "../components/lib/util";
import {useFitViewport} from "../components/lib/use-fit-viewport.js";
import {render} from "../../render.js";
import { useReplicant } from "../../use-replicant.js";



const App = () => {
	const ref = useRef<HTMLDivElement>(null);
	useFitViewport(ref);
	const scoreboard = useReplicant("scoreboard")

	{scoreboard ? scoreboard.name : "noname"}
	{scoreboard ? scoreboard.score : 0}

	return (
		<div
			ref={ref}
			style={{
				position: "absolute",
				width: "1920px",
				height: "1020px",
				overflow: "hidden",
				color: setup.text,
			}}
		>
			<OmnEgao
				style={{position: "absolute", left: "30px", top: "20px"}}
			></OmnEgao>
		</div>
	);
};

render(<App />);
