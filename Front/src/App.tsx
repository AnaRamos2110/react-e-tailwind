import { ChatInterface } from "./components/ChatInterface";

function App() {
  return(
    <div>
      <ChatInterface onEnd={() => console.log("Voltar clicando")} />
    </div>
  )
}

export default App;