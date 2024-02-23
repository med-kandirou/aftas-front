import { Competition } from "./competition.model";
import { Fish } from "./fish.model";
import { App_user } from "./app_user.model";

export interface Hunting {
    id: number;
    numberOfFish:number;
    fish: Fish;
    member: App_user;
    competition: Competition;
}