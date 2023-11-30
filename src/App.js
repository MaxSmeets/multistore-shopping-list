import GetMilk from "./components/GetMilk";
import TopBar from "./components/TopBar";
import { ShoppingCartProvider } from "./providers/ShoppingCartProvider";

function App() {
  return (
    <ShoppingCartProvider>
      <TopBar />
      <GetMilk />
    </ShoppingCartProvider>
  );
}

export default App;
