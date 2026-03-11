import { useLocation  } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Bug } from "lucide-react"

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
      console.error(
        "404 Error: User attempted to access non-existent route",
        location.pathname 
    );
    }, [location.pathname]);

    return(
        <div className="min-h-screen flex items-center justify-center bg-cyan-50 ">
            <div className="text-center">
                <Bug 
                size={60} 
                className="text-pink-500 animate-bounce block mx-auto mb-4" 
                />
                <h1 className="text 4x1 font-bold mb-4 text-[45px] text-cyan-800 font-serif">Erro 404</h1>
                <p className="text-x1 text-cyan-600 mb-4 font-serif">Parece que encontramos um pequeno intruso. 
                    Esta página sumiu do mapa!</p>
                
                <Button 
                className="bg-pink-500 h-auto py-4 px-8 hover:bg-pink-50 hover:text-pink-300 
                hover:border-pink-700 transition-all rounded-2xl">

                <a href="/" className="text-pink-300 hover:text-pink-500 text-[37px] rounded-md font-sans">
                    Para retornar, clique aqui
                </a>

                </Button>
            </div>
        </div>
    );
};

export default NotFound;