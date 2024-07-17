"use client";

import secretAlgorithm from "@/lib/algorithm";
import React, { useState, createContext, useContext, useMemo } from "react";

const AppContext = createContext({
  theme: {
    bgColor: "",
  },
  user: {
    name: "John Doe",
    email: "john@example.com",
  },
});

const ThemedButton = React.memo(function ThemedButton() {
  const { theme } = useContext(AppContext);

  secretAlgorithm();

  return (
    <button className={`p-2 rounded ${theme.bgColor} text-white`}>
      Themed Button
    </button>
  );
});

const UserInfo = React.memo(function UserInfo() {
  const { user } = useContext(AppContext);

  secretAlgorithm();

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <h3 className="text-lg font-semibold">User Info</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
});

const Content = React.memo(function Content() {
  return (
    <div className="space-y-4">
      <UserInfo />
      <ThemedButton />
    </div>
  );
});

function ThemeSwitcher() {
  const [theme, setTheme] = useState({
    bgColor: "bg-blue-500",
  });
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
  });
  const contextValue = useMemo(() => ({ user, theme }), [user, theme]);

  const toggleTheme = () => {
    setTheme(
      theme.bgColor === "bg-blue-500"
        ? { bgColor: "bg-green-500" }
        : { bgColor: "bg-blue-500" },
    );
  };

  const updateUser = () => {
    setUser((prevUser) => ({
      ...prevUser,
      name: prevUser.name === "John Doe" ? "Alissia Rodriguez" : "John Doe",
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Theme Switcher</h1>
        <AppContext.Provider value={contextValue}>
          <Content />
        </AppContext.Provider>
        <div className="mt-6 space-y-2">
          <button
            onClick={toggleTheme}
            className="w-full bg-purple-500 text-white p-2 rounded"
          >
            Toggle Theme
          </button>
          <button
            onClick={updateUser}
            className="w-full bg-yellow-500 text-white p-2 rounded"
          >
            Update User
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
