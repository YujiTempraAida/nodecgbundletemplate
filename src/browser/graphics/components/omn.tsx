import {CSSProperties} from "react";
import omnEgao from "../images/OMNegao.png";

export const OmnEgao = (props: {style: CSSProperties}) => {
	return (
		<img
			src={omnEgao}
			width={500}
			height={500}
			style={{
				...props.style,
			}}
		></img>
	);
};
