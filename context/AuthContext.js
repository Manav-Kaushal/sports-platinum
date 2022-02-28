import { NEXT_URL } from "@utils/config";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const { createContext, useState } = require("react");

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  const signup = async (user) => {
    console.log(user);
  };

  const signin = async ({ email: identifier, password }) => {
    const res = await fetch(`${NEXT_URL}/api/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    const data = await res.json();
    console.log("data in AuthContext:", data);
    if (res.ok) {
      setUser(data.user);
      router.push("/auth/dashboard");
    } else {
      setError(data.message);
    }
  };

  const signout = async (user) => {
    console.log(user);
  };

  const checkUserLoggedIn = async (user) => {
    console.log("check");
  };

  return (
    <AuthContext.Provider value={{ user, error, signin, signup, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
