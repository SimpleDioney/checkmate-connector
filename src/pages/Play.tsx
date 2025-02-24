
import { Button } from "@/components/ui/button";
import { Trophy, Users, Zap } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";

const Play = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex flex-col items-center gap-4">
              <Zap className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Partida Rápida</h3>
              <p className="text-gray-600 text-center">Encontre um oponente e comece a jogar imediatamente</p>
              <Button className="w-full" asChild>
                <Link to="/partida">Jogar Agora</Link>
              </Button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex flex-col items-center gap-4">
              <Users className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Jogar com Amigo</h3>
              <p className="text-gray-600 text-center">Convide um amigo para uma partida amistosa</p>
              <Button variant="outline" className="w-full">Criar Sala</Button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex flex-col items-center gap-4">
              <Trophy className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Torneios</h3>
              <p className="text-gray-600 text-center">Participe de torneios e dispute prêmios</p>
              <Button variant="outline" className="w-full">Ver Torneios</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
