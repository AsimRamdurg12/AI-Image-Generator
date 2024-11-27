import React from "react";
import { logo } from "./assets";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { CreatePost, Home } from "./pages";

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
      }}
    >
      <header className="w-full flex justify-between items-center sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 h-28" />
        </Link>
        <Link
          to="/create-post"
          className="border px-4 py-2 font-inter font-medium bg-[#6469ff] text-white rounded-md"
        >
          Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
