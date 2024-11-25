import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../services/api";

export default function Signin() {
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  
  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await signin({ email, password });
      localStorage.setItem("token", data.token); 
      navigate("/Brain"); 
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="h-screen bg-gray-800 text-center">
      <h1 className="flex justify-center text-4xl text-white font-bold mb-4">Signin</h1>
      <form className="flex flex-col items-center justify-center p-5 mt-20" onSubmit={handleSignin}>
        <input
          type="text"
          placeholder="email"
          className="bg-gray-700 p-2 rounded-lg text-white w-80 mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="bg-gray-700 p-2 rounded-lg text-white w-80 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-purple-300 p-2 rounded-lg text-white w-80" type="submit">
          Signin
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <p className="text text-pretty text-white">
          Create new account?{" "}
          <Link to="/signup" className="text-purple-300 hover:text-gray-900">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}