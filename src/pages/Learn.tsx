
import { Activity, Trophy, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";

const Learn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Aprenda Xadrez</h1>
          
          <div className="grid gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Activity className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fundamentos</h3>
                  <p className="text-gray-600 mb-4">
                    Aprenda os movimentos básicos, regras e conceitos fundamentais do xadrez
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                      <span className="text-gray-800">1. Movimentos das Peças</span>
                    </div>
                    <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                      <span className="text-gray-800">2. Regras Especiais</span>
                    </div>
                    <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                      <span className="text-gray-800">3. Xeque e Xeque-mate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Táticas</h3>
                  <p className="text-gray-600 mb-4">
                    Domine as táticas essenciais para melhorar seu jogo
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                      <span className="text-gray-800">1. Garfos e Espetos</span>
                    </div>
                    <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                      <span className="text-gray-800">2. Ataques Duplos</span>
                    </div>
                    <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                      <span className="text-gray-800">3. Desvios</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Estratégia</h3>
                  <p className="text-gray-600 mb-4">
                    Aprenda conceitos estratégicos avançados
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                      <span className="text-gray-800">1. Controle do Centro</span>
                    </div>
                    <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                      <span className="text-gray-800">2. Desenvolvimento de Peças</span>
                    </div>
                    <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                      <span className="text-gray-800">3. Estrutura de Peões</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
