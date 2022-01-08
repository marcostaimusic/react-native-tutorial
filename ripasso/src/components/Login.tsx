import { useReducer, useEffect } from "react";

interface AuthState {
  validating: boolean;
  token: string | null;
  username: string;
  name: string;
}

const initialState: AuthState = {
  validating: true,
  token: null,
  username: "",
  name: "",
};

type LoginPayload = {
  username: string;
  name: string;
};

// types di Typescript con operatore pipe per or...or
type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validating: false,
        token: null,
        name: "",
        username: "",
      };

    case "login":
      const { name, username } = action.payload;
      return {
        ...state,
        token: "qwerty",
        username,
        name,
      };
    default:
      return state;
  }
};

export const Login = () => {
  const [{ validating, token, username }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: "login",
      payload: {
        username: "tizio123",
        name: "tizio",
      },
    });
  };

  const logout = () => {
    dispatch({
      type: "logout",
    });
  };

  if (validating) {
    return (
      <>
        <h3>Login</h3>
        <hr />
        <div className="alert alert-info">Validating...</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>
      {token ? (
        <div className="alert alert-success">Logged in as {username} </div>
      ) : (
        <div className="alert alert-danger">Unauthorized...</div>
      )}

      {token ? (
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      )}
      <hr />
    </>
  );
};
