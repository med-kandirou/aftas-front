import { Competition } from "./competition.model";
import { Fish } from "./fish.model";
import { Member } from "./member.model";

export interface Hunting {
    id: number;
    numberOfFish:number;
    fish: Fish;
    member: Member;
    competition: Competition;
}