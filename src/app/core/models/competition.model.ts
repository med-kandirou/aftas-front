export interface Competition {
    code: string;
    date: Date;
    startTime: Date; 
    endTime: Date; 
    numberOfParticipants: number;
    location: string;
    amount: number;
}