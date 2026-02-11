import { WelcomeScreen } from "@/components/WelcomeScreen";
import { ChatInterface } from "@/components/ChatInterface";
import { EndScreen } from "@/components/EndScreen";
import { useState } from "react";

type Screen = "welcome" | "chat" | "end"

const Index = () => {
    const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");

    return(
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to gray-100 p-4">
            <div className="h-[90vh] max-w-6x1 mx-auto bg-white/50 backdrop-blur-sm rounded-3x1 shadow-x1 overflow-hidden">
                {currentScreen === "welcome" && (
                    <WelcomeScreen onStart={() => setCurrentScreen("chat")} />
                )}
                {currentScreen === "chat" && (
                    <ChatInterface onEnd={() => setCurrentScreen("end")} />
                )}
                {currentScreen === "end" && (
                    <EndScreen OnRestart={() => setCurrentScreen("welcome")} />
                )}

            </div>
        </div>
    )
};