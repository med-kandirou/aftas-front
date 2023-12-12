import { Competition } from "./competition.model";
import { Member } from "./member.model";
import { RankingId } from "./rankingId";

export interface Ranking {
  rankingId: RankingId;
  rank: number;
  score: number;
  member: Member;
  competition: Competition;
}