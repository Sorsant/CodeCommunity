import axios from "axios";
import { Route, Routes, useLocation, useRoutes } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import Home from "./views/home/home";
import styles from "./App.css";
import React from "react";
import LandingPage from "./views/landing/landing";
import Nav from "./views/Nav/nav";
import QandA from "./views/QAPage/QAPage";
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
import GoogleLogin from './containers/GoogleLogin';
import DashboardPage from './containers/DashboardPage';
import ResetPasswordPage from "./containers/ResetPasswordPage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import { checkAuth } from "./components/Redux/user";
import { getUser } from "./components/Redux/user";
import { getUserExtras } from "./components/Redux/Actions/User/actionUser";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from '@mui/material';
import TopBar from './dashboard/scenes/global/TopBar';
import Sidebar from './dashboard/scenes/global/Sidebar';
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

import { API_URL } from "./config";
axios.defaults.baseURL = API_URL;
axios.defaults.withCredentials = true;


const App = () => {
  const dispatch = useDispatch();

  const { isAuthenticated, isAdmin } = useSelector((state) => state.userdb
  );
  useEffect(() => {
    dispatch(checkAuth());
    dispatch(getUser());
    dispatch(getUserExtras());
  }, [dispatch]);
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true)
  // const dashboardRoutes = useRoutes([
  //   { path: "/admin", element: isAdmin ? <Dashboard /> : <Navigate to="/" replace /> },
  //   { path: "/team", element: isAdmin ? <Team /> : <Navigate to="/" replace /> },
  //   { path: "/postscenes", element: isAdmin ? <PostScenes /> : <Navigate to="/" replace /> },
  //   { path: "/invoices", element: isAdmin ? <Invoices /> : <Navigate to="/" replace /> },
  //   { path: "/newscenes", element: isAdmin ? <NewScenes /> : <Navigate to="/" replace /> },
  //   { path: "/form", element: isAdmin ? <Form /> : <Navigate to="/" replace /> },
  //   { path: "/bar", element: isAdmin ? <Bar /> : <Navigate to="/" replace /> },
  //   { path: "/pie", element: isAdmin ? <Pie /> : <Navigate to="/" replace /> },
  //   { path: "/line", element: isAdmin ? <Line /> : <Navigate to="/" replace /> },
  //   { path: "/faq", element: isAdmin ? <FAQ /> : <Navigate to="/" replace /> },
  //   { path: "/geography", element: isAdmin ? <Geography /> : <Navigate to="/" replace /> },
  // ])
  const location = useLocation();
  return (
    <div className={styles.containerApp}>
      {location.pathname !== "/" &&
        location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/admin" &&
        location.pathname !== "/team" &&
        location.pathname !== "/postscenes" &&
        location.pathname !== "/invoices" &&
        location.pathname !== "/newscenes" &&
        location.pathname !== "/from" &&
        location.pathname !== "/bar" &&
        location.pathname !== "/pie" &&
        location.pathname !== "/line" &&
        location.pathname !== "/faq" &&
        location.pathname !== "/geography" ? <Nav /> : null}

      {isAuthenticated ?
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/google' element={<GoogleLogin />} />
          <Route path="/communities/:id" element={<DetailCommunity />} />
          <Route path="/groups/:name" element={<DetailCommunity />} />
          <Route path="/education" element={<Books />} />
          <Route path="/communities" element={<CommunityForm />} />
          <Route path="/Q&A" element={<QandA />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/detail/:id" element={<PostDetail />} />
          <Route path="/newspost" element={<NewsPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/instructor" element={<Instructor />} />
        </Routes>


        :
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path='/google' element={<GoogleLogin />} />
          <Route path="/fakeHome" element={<FakeHome />} />
          <Route path="/" element={<LandingPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path="/ResetPassword" element={<ResetPasswordPage />} />

          {(location.pathname === "/admin" ||
            location.pathname === "/team" ||
            location.pathname === "/postscenes" ||
            location.pathname === "/invoices" ||
            location.pathname === "/newscenes") && isAdmin ? (
            <div>
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
            </div>
          ) : null}
        </Routes>
      }


      {location.pathname !== "/" &&
        location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "*" &&
        location.pathname !== "/admin" &&
        location.pathname !== "/team" &&
        location.pathname !== "/postscenes" &&
        location.pathname !== "/invoices" &&
        location.pathname !== "/newscenes" &&
        location.pathname !== "/from" &&
        location.pathname !== "/bar" &&
        location.pathname !== "/pie" &&
        location.pathname !== "/line" &&
        location.pathname !== "/faq" &&
        location.pathname !== "/geography" ? <Footer /> : null}

  );
};

export default App;
