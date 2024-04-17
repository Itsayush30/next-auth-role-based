"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // Import useRouter

const LoginForm = () => {
  const router = useRouter(); // Initialize useRouter
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "admin", // default role
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/signup",
        formData
      );
      console.log(response.data); // handle response accordingly
      router.push("/"); // Redirect to home page on successful form submission
    } catch (error) {
      console.error("Error submitting form:", error);
      // handle error
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 px-4 py-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-bold mb-2"
          >
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <span className="block text-gray-700 font-bold mb-2">Role:</span>
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              name="role"
              value="admin"
              checked={formData.role === "admin"}
              onChange={handleChange}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Admin</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="role"
              value="data associate"
              checked={formData.role === "data associate"}
              onChange={handleChange}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Data Associate</span>
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
