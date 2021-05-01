import React, { useState , useEffect} from "react";
import { signInWithGoogle } from "../../firebase";
import { auth } from "../../firebase";

const SignInPage = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState(null);


  const submitHandler = (event) => {
    console.log("preventing default");
    event.preventDefault();
    setState({
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user1) => {
      setUser(user1);
    });
  }, []);

  return (
    <div className="signin-page">
      <h2>Sign In</h2>

      {user ? (
        <div>
          <div>
            <img src={user.photoURL} alt="pic" />
          </div>
          <div>Name: {user.displayName}</div>
          <div>Email: {user.email}</div>

          <button onClick={() => auth.signOut()}>LOG OUT</button>
        </div>
      ) : (
        <button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
      )}

      <form onSubmit={submitHandler}>
        <input
          name="email"
          type="email"
          value={state.email}
          placeholder="Email"
          onChange={(e) => setState({ email: e.target.value })}
          required
        />
        <input
          name="password"
          type="password"
          value={state.password}
          placeholder="Password"
          onChange={(e) => setState({ password: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default SignInPage;
