import { tokenize } from "@angular/compiler/src/ml_parser/lexer";

export interface User {
    userName: string;
    token: string;
    photoUrl: string;
    knownAs: string;
    gender: string;
    roles: string[];
}