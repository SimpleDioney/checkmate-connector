
import { Activity } from "lucide-react";

type PieceType = "pawn" | "rook" | "knight" | "bishop" | "queen" | "king" | null;
type PieceColor = "white" | "black";

type Square = {
  piece: PieceType;
  pieceColor?: PieceColor;
  color: "white" | "black";
  position: string;
};

const ChessBoard = () => {
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];

  const createBoard = () => {
    const board: Square[] = [];
    ranks.forEach((rank, rankIndex) => {
      files.forEach((file, fileIndex) => {
        const isWhite = (rankIndex + fileIndex) % 2 === 0;
        const square: Square = {
          piece: null,
          color: isWhite ? "white" : "black",
          position: `${file}${rank}`
        };

        // Configurar peças pretas
        if (rank === '8') {
          square.piece = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'][fileIndex] as PieceType;
          square.pieceColor = 'black';
        } else if (rank === '7') {
          square.piece = 'pawn';
          square.pieceColor = 'black';
        }

        // Configurar peças brancas
        if (rank === '1') {
          square.piece = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'][fileIndex] as PieceType;
          square.pieceColor = 'white';
        } else if (rank === '2') {
          square.piece = 'pawn';
          square.pieceColor = 'white';
        }

        board.push(square);
      });
    });
    return board;
  };

  const board = createBoard();

  const getPieceSize = (piece: PieceType) => {
    switch (piece) {
      case 'pawn':
        return 'w-6 h-6';
      case 'knight':
      case 'bishop':
        return 'w-7 h-7';
      case 'rook':
      case 'queen':
      case 'king':
        return 'w-8 h-8';
      default:
        return 'w-6 h-6';
    }
  };

  return (
    <div className="w-full max-w-[600px] aspect-square">
      <div className="grid grid-cols-8 h-full w-full border-2 border-gray-800">
        {board.map((square) => (
          <div
            key={square.position}
            className={`aspect-square flex items-center justify-center ${
              square.color === "white" ? "bg-amber-100" : "bg-amber-800"
            }`}
          >
            {square.piece && (
              <Activity
                className={`${getPieceSize(square.piece)} ${
                  square.pieceColor === 'white' ? 'text-slate-100' : 'text-slate-800'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChessBoard;
