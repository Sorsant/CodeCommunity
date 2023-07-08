import styles from "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth, getUser, isAdmin } from "./components/Redux/user";
import { getUserExtras } from "./components/Redux/Actions/User/actionUser";
import axios from "axios";
import { API_URL } from "./config";
import Home from "./views/home/home";
import LandingPage from "./views/landing/landing";
import Nav from "./views/Nav/nav";
import Openai from "./views/Q&A/Openai";
import Profile from "./views/profile/profile";
import CommunityForm from "./views/CommunityForm/communityForm";
import PostDetail from "./views/detail/detail";
import NewsPost from "./components/News Post/NewsPost";
import Books from "./views/Education/Books/books";
import Footer from "./views/Footer/footer";
import About from "./views/About/about";
import Instructor from "./views/Instructor/instructor";
import DetailCommunity from "./views/DetailCommunity/detailCommunity";
import FakeHome from "./views/FakeHome/fakeHome";
import ResetPasswordPage from "./containers/ResetPasswordPage";
import LoginPage from "./containers/Login/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./dashboard/scenes/global/TopBar";
import Sidebar from "./dashboard/scenes/global/Sidebar";
import Dashboard from "./dashboard/scenes/dashboardScenes/index";
import Team from "./dashboard/scenes/team/index";
import Invoices from "./dashboard/scenes/invoices/index";
import PostScenes from "./dashboard/scenes/postScenes/index";
import Bar from "./dashboard/scenes/bar/index";
import Form from "./dashboard/scenes/form/index";
import Line from "./dashboard/scenes/line/index";
import Pie from "./dashboard/scenes/pie/index";
import FAQ from "./dashboard/scenes/faq/index";
import Geography from "./dashboard/scenes/geography/index";
import "../src/dashboard/indexDash.css";
import NewScenes from "./dashboard/scenes/newScenes";
import Error404 from "./views/Error/Error404";
import { getAllLanguages } from "./components/Redux/Actions/Community/ActionCommunity";

axios.defaults.baseURL = API_URL;
axios.defaults.withCredentials = true;

const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.userdb);
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const location = useLocation();
  const admin = localStorage.getItem("admin");
  const id = localStorage.getItem("id");

  useEffect(() => {
    dispatch(checkAuth());
    dispatch(getUser());
    dispatch(getUserExtras());
    dispatch(getAllLanguages())
    dispatch(isAdmin());

  }, [dispatch, id]);

  const excludedPaths = [
    "/",
    "/login",
    "/register",
    "/Fakehome",
    "/ResetPassword",
    "/admin",
    "/team",
    "/postscenes",
    "/invoices",
    "/newscenes",
    "/from",
    "/bar",
    "/pie",
    "/line",
    "/faq",
    "/geography",
    "/communities/1",
    "/communities/2",
    "/communities/3",
    "/communities/4",
    "/communities/5",
    "/communities/6",
    "/communities/6",
    "*",
  ];

  const dashboardPaths = [
    "/admin",
    "/team",
    "/postscenes",
    "/invoices",
    "/newscenes",
    "/form",
    "/bar",
    "/pie",
    "/line",
    "/faq",
    "/geography",
  ];

  return (
    <div className={styles.containerApp}>
      {!excludedPaths.includes(location.pathname) && <Nav admin={admin} />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Error404 />} />
        {isAuthenticated ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/communities/:id" element={<DetailCommunity />} />
            <Route path="/groups/:name" element={<DetailCommunity />} />
            <Route path="/education" element={<Books />} />
            <Route path="/communities" element={<CommunityForm />} />
            <Route path="/Q&A" element={<Openai />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/detail/:id" element={<PostDetail />} />
            <Route path="/newspost" element={<NewsPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/instructor" element={<Instructor />} />
          </>
        ) : (
          <>
            <Route path="/Fakehome" element={<FakeHome />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/ResetPassword" element={<ResetPasswordPage />} />
          </>
        )}
      </Routes >

      {
        dashboardPaths.includes(location.pathname) && admin && (
          <>
            <ColorModeContext.Provider value={colorMode}>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                  <Sidebar isSidebar={isSidebar} />
                  <main className="content">
                    <TopBar setIsSidebar={setIsSidebar} />
                    <Routes>
                      <Route path="/admin" element={<Dashboard />} />
                      <Route path="/team" element={<Team />} />
                      <Route path="/postscenes" element={<PostScenes />} />
                      <Route path="/invoices" element={<Invoices />} />
                      <Route path="/newscenes" element={<NewScenes />} />
                      <Route path="/form" element={<Form />} />
                      <Route path="/bar" element={<Bar />} />
                      <Route path="/pie" element={<Pie />} />
                      <Route path="/line" element={<Line />} />
                      <Route path="/faq" element={<FAQ />} />
                      <Route path="/geography" element={<Geography />} />
                    </Routes>
                  </main>
                </div>
              </ThemeProvider>
            </ColorModeContext.Provider>
          </>
        )
      }

      <footer>
        {!excludedPaths.includes(location.pathname) && <Footer />}
      </footer>
    </div>
  );
};

export default App;
