
import { Navbar } from "@/components/Navbar";
import ChessBoard from "@/components/ChessBoard";
import { Button } from "@/components/ui/button";
import { Activity, Flag, MessageSquare, RotateCcw } from "lucide-react";

const Game = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Área do tabuleiro */}
          <div className="flex-1 flex justify-center">
            <ChessBoard />
          </div>

          {/* Área lateral */}
          <div className="w-full lg:w-80 space-y-6">
            {/* Informações do oponente */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <Activity className="h-10 w-10 text-primary" />
                <div>
                  <h3 className="font-semibold">Oponente</h3>
                  <p className="text-sm text-gray-600">Ranking: 1200</p>
                </div>
              </div>
            </div>

            {/* Controles do jogo */}
            <div className="bg-white p-4 rounded-lg shadow-lg space-y-3">
              <Button variant="outline" className="w-full">
                <RotateCcw className="mr-2" />
                Desfazer
              </Button>
              <Button variant="outline" className="w-full">
                <Flag className="mr-2" />
                Desistir
              </Button>
              <Button variant="outline" className="w-full">
                <MessageSquare className="mr-2" />
                Chat
              </Button>
            </div>

            {/* Histórico de movimentos */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="font-semibold mb-3">Histórico de Movimentos</h3>
              <div className="h-48 overflow-y-auto space-y-2">
                <div className="text-sm text-gray-600">1. e4 e5</div>
                <div className="text-sm text-gray-600">2. Nf3 Nc6</div>
                <div className="text-sm text-gray-600">3. Bb5 a6</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
