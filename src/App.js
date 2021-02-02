import { ChatEngine } from "react-chat-engine";
import "./app.css";
import ChatFeed from "./components/ChatFeed.jsx";
import LoginForm from "./components/LoginForm.jsx";
import dotenv from "dotenv";
dotenv.config();

const App = () => {
  if (!localStorage.getItem("username")) {
    return <LoginForm />;
  }
  return (
    <ChatEngine
      height="100vh"
      projectID="91971c62-f146-4b94-a915-d626ea3e5df1"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
