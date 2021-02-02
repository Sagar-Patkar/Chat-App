import { ChatEngine } from "react-chat-engine";
import "./app.css";
import ChatFeed from "./components/ChatFeed.jsx";
import dotenv from "dotenv";
dotenv.config();

const App = () => {
  const projectId = `${process.env.PROJECT_ID}`;
  console.log(projectId);
  return (
    <ChatEngine
      height="100vh"
      projectID="91971c62-f146-4b94-a915-d626ea3e5df1"
      userName="sagar@example.com"
      userSecret="12345"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
