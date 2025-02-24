
import { Activity } from "lucide-react";

type Square = {
  piece: string | null;
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
        board.push({
          piece: null,
          color: isWhite ? "white" : "black",
          position: `${file}${rank}`
        });
      });
    });
    return board;
  };

  const board = createBoard();

  return (
    <div className="w-full max-w-[600px] aspect-square">
      <div className="grid grid-cols-8 h-full w-full border-2 border-gray-800">
        {board.map((square, index) => (
          <div
            key={square.position}
            className={`aspect-square flex items-center justify-center ${
              square.color === "white" ? "bg-amber-100" : "bg-amber-800"
            }`}
          >
            {square.piece && <Activity className="w-8 h-8" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChessBoard;
