export type Player = {
  id: number;
  name: string;
  iconClass: string;
  colorClass: string;
};

export const someVariable = 20;

export type Move = {
  squareId: number;
  player: Player;
};

type GameStatus = {
  isComplete: boolean;
  winner: Player;
};

type Game = {
  moves: Move[];
  status: GameStatus;
};

type GameState = {
  currentGameMoves: any[];
  history: {
    currentRoundGames: Game[];
    allGames: Game[];
  };
};
