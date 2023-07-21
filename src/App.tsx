import { useEffect, useState } from "react";
import {  Route, Routes, useNavigate } from "react-router-dom";


// Pages
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import Calendar from "./pages/Calendar";
import Chart from "./pages/Chart";
import ECommerce from "./pages/Dashboard/ECommerce";
import FormElements from "./pages/Form/FormElements";
import FormLayout from "./pages/Form/FormLayout";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Tables from "./pages/Tables";
import Alerts from "./pages/UiElements/Alerts";
import Buttons from "./pages/UiElements/Buttons";
import ArticleList from "./pages/Article/ArticleList";
import AddArticle from "./pages/Article/AddArticle";
import Users from "./pages/User";
import Company from "./pages/Company";
import Information from "./pages/Information";
import Outlet from "./pages/Outlet";
import Chat from "./pages/Chat";
import environment from "./environment";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();


  const preloader = document.getElementById("preloader");

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <p className=" text-center text-danger">Failed to lead app</p>
  ) : (
  <>
      <Routes>
      
        <Route path="/" element={<NavigateFromBaseURl />} />
        <Route path="/dashboard" element={<ECommerce />} />
        <Route path="/calendar" element={<Calendar />} />

        <Route path="/administrator/users" element={<Users />} />
        <Route path="/administrator/companies" element={<Company />} />
        <Route path="/administrator/outlets" element={<Outlet />} />
        <Route path="/administrator/informations" element={<Information />} />
        <Route path="/administrator/chats" element={<Chat />} />


        {/* Artikel */}
        <Route path="/artikel/list" element={<ArticleList />} />
        <Route path="/artikel/add-article" element={<AddArticle />} />
        <Route path="/artikel/kategori" element={<FormLayout />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/forms/form-elements" element={<FormElements />} />
        <Route path="/forms/form-layout" element={<FormLayout />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/ui/alerts" element={<Alerts />} />
        <Route path="/ui/buttons" element={<Buttons />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

function NavigateFromBaseURl () {
  const navigate = useNavigate();
  useEffect(() => {
    const url = window.location.href;
    if (url.includes(environment.siteUrl)) {
      navigate("/dashboard");
    }
  }, []);

  return null;
}

export default App;
