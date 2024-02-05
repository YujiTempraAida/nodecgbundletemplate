import "modern-normalize";
import "../styles/adobe-fonts.js";
import {BoldText} from "../components/lib/text.js";
import {render} from "../../render.js";
import {useReplicant} from "../../use-replicant.js";
import Grid from "@mui/material/Grid";
import {CSSProperties} from "react";
import {MatchElem} from "../components/match.js";
// import {OmnEgao} from "../components/omn.js";

const gridStyle: CSSProperties = {
	width: "1204px", // 横幅
	height: "600px", // 高さ
	position: "absolute",
	left: "562px", // X座標
	top: "296px", // Y座標
};

const gridCellStyle: CSSProperties = {
	height: "155px",
	justifyContent: "center",
	alignItems: "center",
	display: "flex",
	padding: "0",
	margin: "0",
};

const scoreStyle1: CSSProperties = {
	fontSize: "66.2px",
	fontFamily: '"kozuka-gothic-pro", sans-serif',
	fontWeight: "900",
	fontStyle: "normal",
	letterSpacing: "7px",
	position: "relative",
	top: "8px",
	color: "#00c9f6",
};
const scoreStyle2: CSSProperties = {
	fontSize: "66.2px",
	fontFamily: '"kozuka-gothic-pro", sans-serif',
	fontWeight: "900",
	fontStyle: "normal",
	letterSpacing: "7px",
	position: "relative",
	top: "8px",
	color: "#00aee8",
};
const scoreStyle3: CSSProperties = {
	fontSize: "66.2px",
	fontFamily: '"kozuka-gothic-pro", sans-serif',
	fontWeight: "900",
	fontStyle: "normal",
	letterSpacing: "7px",
	position: "relative",
	top: "8px",
	color: "#0094da",
};
const scoreStyle4: CSSProperties = {
	fontSize: "66.2px",
	fontFamily: '"kozuka-gothic-pro", sans-serif',
	fontWeight: "900",
	fontStyle: "normal",
	letterSpacing: "7px",
	position: "relative",
	top: "8px",
	color: "#0379d1",
};

const rankStyle: CSSProperties = {
	fontSize: "81px",
	fontFamily: '"kozuka-gothic-pro", sans-serif',
	fontWeight: "900",
	fontStyle: "normal",
	letterSpacing: "7px",
	color: "rgba(0,0,0,1)",
	position: "relative",
	top: "8px",
};

const App = () => {
	const matchArrayRep = useReplicant("matchArray");
	const resultRep = useReplicant("result");
	console.log(matchArrayRep?.matches[0]?.leftScore);
	if (
		matchArrayRep?.matches[0] == null ||
		matchArrayRep?.matches[1] == null ||
		matchArrayRep?.matches[2] == null ||
		matchArrayRep?.matches[3] == null ||
		matchArrayRep?.matches[4] == null ||
		matchArrayRep?.matches[5] == null ||
		matchArrayRep?.matches[6] == null ||
		matchArrayRep?.matches[7] == null ||
		matchArrayRep?.matches[8] == null ||
		matchArrayRep?.matches[9] == null ||
		matchArrayRep?.matches[10] == null ||
		matchArrayRep?.matches[11] == null
	) {
		return <></>;
	}

	if (resultRep == null) {
		return <></>;
	}

	return (
		<div style={gridStyle}>
			<Grid container spacing={2}>
				<Grid item xs={2} style={gridCellStyle}></Grid>
				<Grid item md={2} style={gridCellStyle}>
					<MatchElem match={matchArrayRep?.matches[0]} />
				</Grid>
				<Grid item md={2} style={gridCellStyle}>
					<MatchElem match={matchArrayRep?.matches[1]} />
				</Grid>
				<Grid item md={2} style={gridCellStyle}>
					<MatchElem match={matchArrayRep?.matches[2]} />
				</Grid>
				<Grid item md={1.97} style={gridCellStyle}>
					<BoldText style={scoreStyle1}>{resultRep.score0}</BoldText>
				</Grid>
				<Grid item md={1.38} style={gridCellStyle}>
					<BoldText style={rankStyle}>{resultRep.rank0}</BoldText>
				</Grid>

				<Grid item xs={2} style={gridCellStyle}>
					<MatchElem match={matchArrayRep?.matches[6]} />
				</Grid>
				<Grid item md={2} style={gridCellStyle}></Grid>
				<Grid item md={2} style={gridCellStyle}>
					<MatchElem match={matchArrayRep?.matches[3]} />
				</Grid>
				<Grid item md={2} style={gridCellStyle}>
					<MatchElem match={matchArrayRep?.matches[4]} />
				</Grid>
				<Grid item md={1.97} style={gridCellStyle}>
					<BoldText style={scoreStyle2}>{resultRep.score1}</BoldText>
				</Grid>
				<Grid item md={1.38} style={gridCellStyle}>
					<BoldText style={rankStyle}>{resultRep.rank1}</BoldText>
				</Grid>

				<Grid item xs={2} style={gridCellStyle}>
					<MatchElem match={matchArrayRep?.matches[7]} />
				</Grid>
				<Grid item md={2} style={gridCellStyle}>
					<MatchElem match={matchArrayRep?.matches[9]} />
				</Grid>
				<Grid item md={2} style={gridCellStyle}></Grid>
				<Grid item md={2} style={gridCellStyle}>
					<MatchElem match={matchArrayRep?.matches[5]} />
				</Grid>
				<Grid item md={1.97} style={gridCellStyle}>
					<BoldText style={scoreStyle3}>{resultRep.score2}</BoldText>
				</Grid>
				<Grid item md={1.38} style={gridCellStyle}>
					<BoldText style={rankStyle}>{resultRep.rank2}</BoldText>
				</Grid>

				<Grid item xs={2} style={gridCellStyle}>
					<MatchElem match={matchArrayRep?.matches[8]} />
				</Grid>
				<Grid item md={2} style={gridCellStyle}>
					<MatchElem match={matchArrayRep?.matches[10]} />
				</Grid>
				<Grid item md={2} style={gridCellStyle}>
					<MatchElem match={matchArrayRep?.matches[11]} />
				</Grid>
				<Grid item md={2} style={gridCellStyle}></Grid>
				<Grid item md={1.97} style={gridCellStyle}>
					<BoldText style={scoreStyle4}>{resultRep.score3}</BoldText>
				</Grid>
				<Grid item md={1.38} style={gridCellStyle}>
					<BoldText style={rankStyle}>{resultRep.rank3}</BoldText>
				</Grid>
			</Grid>
		</div>
	);
};

render(<App />);
