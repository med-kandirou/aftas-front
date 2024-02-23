import { Competition } from "./competition.model";
import { App_user } from "./app_user.model";

export interface RankingId{
    member: App_user;
    competition: Competition;
}