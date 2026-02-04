import { ChatMessage } from "./components/ChatMessage";

function App() {
  return (
    <div className="p-4">
      <ChatMessage
        message="Olá isso é uma mensagem de IA 😊"
        isAi={true}
      />
      <ChatMessage
        message="Olá, preciso de ajuda!"
        isAi={false}
      />
    </div>
  );
}

export default App;