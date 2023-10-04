import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.scss";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="app">
      <div className="app-left">
        
      </div>
      <div className="app-right">
        <div className="content">

        </div>
        <div className="steps">
          
        </div>
      </div>
    </div>
  );
}

export default App;
