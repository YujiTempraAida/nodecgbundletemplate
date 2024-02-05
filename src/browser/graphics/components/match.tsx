import {CSSProperties, useEffect} from "react";
import circle from "../images/circle.png";
import cross from "../images/cross.png";
import "../styles/adobe-fonts.js";
import {Match} from "../../../nodecg/generated";

type MatchProps = {
	match: Match;
};

// const imageTextContainer:CSSProperties = {
// 	position: 'relative',
// 	width: '95px',
// 	height: '106px',
// 	backgroundImage: `url(${circle})`,
// 	backgroundSize:'cover',
// 	backgroundPosition: '2px -10px',
// 	display:'flex',
// 	justifyContent:'center',
// 	alignItems:'center',
// };

const imageText: CSSProperties = {
	textAlign: "center",
	fontSize: "35px",
	textShadow:
		"3px 3px 3px #FFFFFF,-3px -3px 3px #FFFFFF,-3px 3px 3px #FFFFFF,3px -3px 3px #FFFFFF,3px 0 3px #FFFFFF,-3px 0px 3px #FFFFFF,0 3px 3px #FFFFFF,0 -3px 3px #FFFFFF",
	padding: "10px",
	color: "rgba(115,115,115,1)",
	position: "relative",
	top: "52px",
	fontFamily: '"kozuka-gothic-pro", sans-serif',
	fontWeight: "900",
	fontStyle: "normal",
	letterSpacing: "4px",
};

export const MatchElem: React.FC<MatchProps> = ({match}) => {
	useEffect(() => {
		console.log("Matchが更新されました:" + match);
	}, [match]);

	if (!match.isDone) {
		return <></>;
	}
	let imageTextContainer: CSSProperties;

	if (match.isLeftPlayerWin) {
		imageTextContainer = {
			position: "relative",
			width: "95px",
			height: "106px",
			backgroundImage: `url(${circle})`,
			backgroundSize: "contain",
			backgroundPosition: "0 0",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		};
	} else {
		imageTextContainer = {
			position: "relative",
			width: "95px",
			height: "106px",
			backgroundImage: `url(${cross})`,
			backgroundSize: "contain",
			backgroundPosition: "0 0",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		};
	}

	return (
		<div style={imageTextContainer}>
			<div style={imageText}>{match.leftScore + "-" + match.rightScore}</div>
		</div>
	);
};
