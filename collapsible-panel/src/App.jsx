
import CollapsiblePanel from "./components/CollapsiblePanel";

export default function App() {
  return (
    <div className="App">
      <CollapsiblePanel title="Title 1" initialCollapse={false}>
        <p>This is the content of the panel</p>
      </CollapsiblePanel>
      <CollapsiblePanel title="Title 2">
        <p>This is the content of the panel</p>
      </CollapsiblePanel>
    </div>
  );
}
