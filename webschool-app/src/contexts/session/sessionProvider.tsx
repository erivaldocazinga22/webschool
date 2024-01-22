import React, { useEffect, useState } from "react";
import { sessionContext } from "./sessionContext";
import { api } from "../../axios.config";
import { parseCookies } from "nookies";
import { useNavigate } from "react-router";
import { UserData } from "../../types";

export default function SessionProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const handleAuthenticated = async () => {
      const { "webschool.token": token } = parseCookies();

      !token && navigate("/login", { replace: true });

      api.defaults.headers["Authorization"] = `Bearer ${token}`;
      
      try {
          const { data: response } = await api.post("/validate");
          
          setUser(response);
          
          if (+response.nivel === 1) {
            navigate("/dashboard", { replace: true })
          } else {
            navigate("/", { replace: true })
          }
      } catch (error) {
          console.error("Validation error:", error);
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