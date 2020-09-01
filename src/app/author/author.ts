import { BoardGame } from '../boardgame/boardgame';

export class Author {
    id: number;
    authorname: string;
    authorsurname: string;
    shortbio: string;
    boardgames: BoardGame[];
}