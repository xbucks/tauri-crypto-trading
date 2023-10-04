import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import News from './components/News';
import Avatar from './components/Avatar';
import Card from './components/Card';
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

        <div className="news-content">
          <News title="Ripple" point={800} />
          <News className="active" title="Ripple" point={800} />
          <News title="Ripple" point={800} />
          <News title="Ripple" point={800} />
          <News title="Ripple" point={800} />
        </div>

        <Avatar fullname="Doodle" username="@doodle" />
      </div>
      <div className="app-right">
        <div className="content">
          <Card />
        </div>
        <div className="steps">

        </div>
      </div>
    </div>
  );
}

export default App;
