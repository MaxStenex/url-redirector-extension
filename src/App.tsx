import { HomeLayout } from "./layouts";
import "./styles/main.css";

const App = () => {
  return (
    <div
      className="bg-slate-200 flex flex-col max-w-lg min-w-def 
      mx-auto min-h-def py-6 px-6 max-h-def overflow-hidden"
    >
      <h2 className="font-bold text-lg">URL Redirector</h2>
      <HomeLayout />
    </div>
  );
};

export default App;
