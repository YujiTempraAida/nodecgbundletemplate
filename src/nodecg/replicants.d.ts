import {Result, Scoreboard} from "./generated";
import {Iku} from "./generated";
import {Match, MatchArray} from "./generated";

type ReplicantMap = {
	scoreboard: Scoreboard;
	iku: Iku;
	match: Match;
	matchArray: MatchArray;
	result: Result;
};

export type {ReplicantMap, Scoreboard, Iku, Match, MatchArray, Result};
