import React, { Suspense, lazy, memo } from "react";
import Navigation from "./Navigation";
import ScrollToTop from "util/ScrollToTop/SrollToTop";
import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "styles/GlobalStyles";
import { RouterBody, RouterHead } from "styles/layout/AppRouterStyles";
import { useStore } from "zustand";

const Auth = lazy(() => import("../components/Auth"));
const Home = lazy(() => import("../components/Home"));
const Profile = lazy(() => import("components/Profile"));
const Calendar = lazy(() => import("components/Calender"));
const Visitor = lazy(() => import("../components/Visitor"));
const Mypage = lazy(() => import("components/Mypage"));
const Publish = lazy(() => import("components/component/pages/publish"));
const Detail = lazy(() => import("components/component/pages/detail"));
const Projects = lazy(() => import("components/component/pages/projects"));
const Team = lazy(() => import("components/component/pages/Team"));
const Com = lazy(() => import("components/component/pages/community"));
const Write = lazy(() => import("components/component/pages/write"));
const Mains = lazy(() => import("components/component/pages/mains"));
const Mains2 = lazy(() => import("components/component/pages/ProjectDe"));
const Mains3 = lazy(() => import("components/component/pages/ComDe"));
const Write2 = lazy(() => import("components/component/pages/write2"));
const Write3 = lazy(() => import("components/component/pages/write3"));
const Mains4 = lazy(() => import("components/component/pages/ComDe"));
const Pros = lazy(() => import("components/component/pages/Pros"));
const Teams = lazy(() => import("components/component/pages/Teams"));

const MemoizedNavigation = memo(Navigation);

const AppRouter = () => {
  const { isLoggedIn, userObj, setUserObj } = useStore();
  return (
    <>
      <GlobalStyles />
      <RouterHead>
        {isLoggedIn && <MemoizedNavigation userObj={userObj} />}
      </RouterHead>
      <RouterBody>
        <ScrollToTop />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {isLoggedIn ? (
              <>
                <Route path="/" element={<Home userObj={userObj} />} />
                <Route path="/Vlog" element={<Mypage userObj={userObj} />} />
                <Route
                  path="/profile"
                  element={
                    <Profile userObj={userObj} setUserObj={setUserObj} />
                  }
                />
                <Route
                  path="/Visitor"
                  element={<Visitor userObj={userObj} />}
                />
                <Route path="/Diary" element={<Calendar />} />
                <Route path="/Publish" element={<Publish />} />
                <Route path="/Detail" element={<Detail />} />
                <Route path="/Project" element={<Projects />} />
                <Route path="/Project/:no" element={<Mains2 />} />
                <Route path="/Project/0" element={<Mains4 />} />
                <Route path="/Team" element={<Team />} />
                <Route path="/Team/:no" element={<Mains />} />
                <Route path="/Com" element={<Com />} />
                <Route path="/Com/:no" element={<Mains3 />} />
                <Route path="/Write" element={<Write />} />
                <Route path="/TeamWrite" element={<Write2 />} />
                <Route path="/ComWrite" element={<Write3 />} />
                <Route path="/Mains" element={<Mains />} />
                <Route path="/ProCard" element={<Pros />} />
                <Route path="/TeamCard" element={<Teams />} />
              </>
            ) : (
              <Route path="/" element={<Auth />} />
            )}
          </Routes>
        </Suspense>
      </RouterBody>
    </>
  );
};
export default React.memo(AppRouter);
