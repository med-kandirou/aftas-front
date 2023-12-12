import { IdentityDocumentType } from "../enums/identityDocumentType";

export interface Member {
    num: number; 
    name: string;
    familyName: string;
    accessionDate: string;
    nationality: string;
    identityDocument: IdentityDocumentType;
    identityNumber: string;
}