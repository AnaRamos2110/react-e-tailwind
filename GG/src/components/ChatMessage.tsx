import { motion } from "framer-motion";

interface ChatMessageProps {
    message: string;
    isAi: boolean;
}

export const ChatMessage = ({ message, isAi }: ChatMessageProps) => {
    return (
        <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         className={` flex ${isAi ? "justify-start" : "justify-end"} mb-4`}
         >
            <div>
                <p className="text-lg">{message}</p>
            </div>
        
        
        </motion.div>
    )
};