import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  { signup }  from "../services/api";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    image: "",
  });
 

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await signup(formData);
        localStorage.setItem("token", response.token);
        navigate("/Brain");
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 text-center">
      <h1 className="flex justify-center text-4xl text-white font-bold mb-4">Signup</h1>
      <form
        className="flex flex-col items-center jsutify-center p-5 mt-20"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="username"
          placeholder="username"
          className="bg-gray-700 p-2 rounded-lg text-white w-80 mb-4"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          className="bg-gray-700 p-2 rounded-lg text-white w-80 mb-4"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="bg-gray-700 p-2 rounded-lg text-white w-80 mb-4"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="image"
          className="bg-gray-700 p-2 rounded-lg text-white w-80 mb-4"
          value={formData.image}
          onChange={handleChange}
        />
        <button className="bg-purple-300 p-2 rounded-lg text-white w-80">
          Signup
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <p className="text text-pretty text-white">
          Already Have an Account?{" "}
          <Link to="/signin" className="text-purple-300 hover:text-gray-900">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}