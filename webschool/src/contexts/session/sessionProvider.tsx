import React, { useEffect, useState } from "react";
import { sessionContext } from "./sessionContext";
import { api } from "../../axios.config";
import { parseCookies } from "nookies";
import { useNavigate } from "react-router";

export default function SessionProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleAuthenticated = async () => {
      const { "webschool.token": token } = parseCookies();

      !token && navigate("/login", { replace: true });

      api.defaults.headers["Authorization"] = `Bearer ${token}`;
      
      try {
        const { data: response } = await api.post("/validate");
        setUser(response);
      } catch (error) {
        console.error("Problemas de autenticação ", error);
        navigate("/login", { replace: true });
      }
    };
    handleAuthenticated();
  }, [navigate]);


  return user && (
    <sessionContext.Provider value={{ user }}>
        {children}
    </sessionContext.Provider>
  )
}