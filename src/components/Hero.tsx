
import { Button } from "@/components/ui/button";
import { ChessKnight, Trophy, Users, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] gap-8 text-center">
          <div className="animate-fadeIn space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tight">
              Domine o Tabuleiro
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Jogue xadrez online, aprimore suas habilidades e conecte-se com jogadores do mundo todo.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Zap className="mr-2 h-5 w-5" />
              Jogar Agora
            </Button>
            <Button size="lg" variant="outline">
              Aprenda Xadrez
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="glass-card p-6 rounded-lg">
              <Trophy className="h-10 w-10 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Torneios Diários</h3>
              <p className="text-slate-600">Participe de torneios e ganhe prêmios</p>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <Users className="h-10 w-10 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Comunidade Ativa</h3>
              <p className="text-slate-600">Conecte-se com jogadores do mundo todo</p>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <ChessKnight className="h-10 w-10 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Aprenda & Evolua</h3>
              <p className="text-slate-600">Aulas e puzzles para todos os níveis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
