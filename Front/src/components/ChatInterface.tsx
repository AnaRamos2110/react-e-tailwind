import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowLeft, Send } from "lucide-react";

interface ChatInterfaceProps {
    onEnd: () => void;
}

export const ChatInterface = ({ onEnd }: ChatInterfaceProps) => {
    const [input, setInput] = useState("")
    return (
        <div>
            <div>
                <Button variant="ghost" size="icon" onClick={onEnd}>
                    <ArrowLeft/>
                </Button>
                <h2>Conversa de Apoio</h2>
            </div>

            <div>
                {/*Area da Mensagem*/}
            </div>

            <div>
                <form>
                <Input value={input} onChange={(e) => setInput(e.target.value)}/>
                <Button type="submit" size="icon">
                    <Send />
                </Button>
                </form>
            </div>
        </div>
    )

}