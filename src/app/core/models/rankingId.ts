import { Competition } from "./competition.model";
import { Member } from "./member.model";

export interface RankingId{
    member: Member;
    competition: Competition;
}