import About from "./components/About/About";
import Header from "./components/header/Header";
import HumanBody from "./components/humanBody/HumanBody";
import AosProvider from "./providers/AosProvider";

const App = () => {
  return (
    <AosProvider>
      <Header />
      <About />
      <HumanBody
        showHead={true}
        showChest={true}
        showArm={true}
        showAbs={false}
        showLeg={true}
        showBack={false}
      />
    </AosProvider>
  );
};

export default App;
