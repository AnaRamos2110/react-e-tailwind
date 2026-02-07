import { WelcomeScreen } from "./components/WelcomeScreen";

function App() {
  const handleStart = () => {};
  return (
  <div>
    <WelcomeScreen onStart={handleStart} />
  </div>
  )
}

export default App;
