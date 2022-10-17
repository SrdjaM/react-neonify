import { useState, useContext } from "react";
import Form from "./components/Form";
import WelcomePage from "./components/pages/WelcomePage";
import AuthContext from "./context/auth-context";

function App() {
  const [enteredName, setEnteredName] = useState("");

  const ctx = useContext(AuthContext);

  const addNameHandler = (data) => {
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    setEnteredName(userData.name);
  };

  return (
    <>
      {!ctx.isLoggedIn && <Form onAddName={addNameHandler} />}
      {ctx.isLoggedIn && <WelcomePage name={enteredName} />}
    </>
  );
}

export default App;
