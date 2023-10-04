import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
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
        <div className="head">Today: 4 Oct 23</div>
        <span className="info">Last Updated: 12 minutes ago</span>

        <ButtonGroup className="filters">
          <Button variant="primary">Points</Button>
          <Button variant="secondary">Recent</Button>
          <Button variant="secondary">Unread</Button>
        </ButtonGroup>
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
