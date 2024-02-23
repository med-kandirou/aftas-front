import { IdentityDocumentType } from "../enums/identityDocumentType";

export interface App_user {
    num: number; 
    name: string;
    email: string;
    familyName: string;
    accessionDate: string;
    nationality: string;
    identityDocument: IdentityDocumentType;
    identityNumber: string;
    role: string;
}