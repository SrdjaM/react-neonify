import { useEffect, useState } from "react";
import Form from "./components/Form";
import WelcomePage from "./components/pages/WelcomePage";

function App() {
  const [enteredName, setEnteredName] = useState("");
  const [isValid, setIsValid] = useState(false);

  const addNameHandler = (data) => {
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    setEnteredName(userData.name);
  };

  const addValidityHandler = (validity) => {
    if (validity) {
      setIsValid(true);
    }
  };

  const onLogoutHandler = () => {
    const isLoggedIn = localStorage.getItem("IsLoggedIn");

    if (isLoggedIn === "1") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  useEffect(() => {
    onLogoutHandler();
  }, []);

  return (
    <>
      {!isValid && (
        <Form onAddName={addNameHandler} onFormValidity={addValidityHandler} />
      )}
      {isValid && <WelcomePage name={enteredName} />}
    </>
  );
}

export default App;
