import Header from "./Components/Header/Header";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import DrinkMenuList from "./Components/Menu/MenuList";

function App() {
  return (
    <div className="App">
        <Header />
        <DrinkMenuList />
    </div>
  );
}

export default App;
