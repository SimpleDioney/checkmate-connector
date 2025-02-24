
import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Activity className="h-8 w-8 text-primary" />
            <span className="text-xl font-semibold text-primary">ChessMaster</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline">Entrar</Button>
            <Button className="bg-primary hover:bg-primary/90">Criar Conta</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
