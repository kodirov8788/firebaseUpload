import "./App.css";
import { useFirebaseLogin } from "./hooks/firebaseLogin"

function App() {
  const [SignOut, SignInWithGoogle, localName, localEmail, localPhoto] = useFirebaseLogin()
  return (
    <div className="App">
      <h1>Home</h1>
      {
        !localName && <button onClick={SignInWithGoogle}>Sign in with Google</button>
      }
      <h1>{localName}</h1>
      <h1>{localEmail}</h1>
      <img src={localPhoto} alt="" />
      {
        localName && <button onClick={SignOut}>Sign Out</button>
      }
    </div>
  );
}

export default App;
