
import Explorer from "./components/Explorer";
import { data } from "./constants/data";

export default function App() {
  return (
    <div className="App">
      <Explorer data={data} />
    </div>
  );
}
