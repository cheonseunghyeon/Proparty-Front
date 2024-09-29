import React, { Suspense, lazy, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "styles/GlobalStyles";
import { RouterBody, RouterHead } from "styles/layout/AppRouterStyles";
import ScrollToTop from "util/ScrollToTop/SrollToTop";
import Navigation from "./Navigation";
import useUserStore from "store/store";

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
const Com = lazy(() => import("components/component/pages/Com"));

const TeamDetail = lazy(() => import("components/component/pages/TeamDetail"));
const ProjectDetail = lazy(() =>
  import("components/component/pages/ProjectDetail")
);
const CommunityDetail = lazy(() =>
  import("components/component/pages/CommunityDetail")
);
const WriteProject = lazy(() =>
  import("components/component/pages/WriteProject")
);
const WriteTeam = lazy(() => import("components/component/pages/WriteTeam"));
const WriteCommunity = lazy(() =>
  import("components/component/pages/WriteCommunity")
);
const Pros = lazy(() => import("components/component/pages/Pros"));
const Teams = lazy(() => import("components/component/pages/Teams"));

const MemoizedNavigation = memo(Navigation);

const AppRouter = () => {
  const { isLoggedIn, userObj } = useUserStore();

  return (
    <>
      <GlobalStyles />
      <RouterHead>
        {/* isLoggedIn이 true일 때만 Navigation을 렌더링 */}
        {isLoggedIn && <MemoizedNavigation userObj={userObj} />}
      </RouterHead>
      <RouterBody>
        <ScrollToTop />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {isLoggedIn ? (
              <>
                {/* 로그인 상태일 때의 라우트 */}
                <Route path="/" element={<Home />} />
                <Route path="/Vlog" element={<Mypage />} />
                <Route path="/profile" element={<Profile />} />
                <Route
                  path="/Visitor"
                  element={<Visitor userObj={userObj} />}
                />
                <Route path="/Diary" element={<Calendar />} />
                <Route path="/Publish" element={<Publish />} />
                <Route path="/Detail" element={<Detail />} />
                <Route path="/Project" element={<Projects />} />
                <Route path="/Project/:no" element={<ProjectDetail />} />
                <Route path="/Project/0" element={<CommunityDetail />} />
                <Route path="/Team" element={<Team />} />
                <Route path="/Team/:no" element={<TeamDetail />} />
                <Route path="/Com" element={<Com />} />
                <Route path="/Com/:no" element={<CommunityDetail />} />
                <Route path="/Write" element={<WriteProject />} />
                <Route path="/TeamWrite" element={<WriteTeam />} />
                <Route path="/ComWrite" element={<WriteCommunity />} />
                {/* <Route path="/Mains" element={<TeamDetail />} /> */}
                <Route path="/ProCard" element={<Pros />} />
                <Route path="/TeamCard" element={<Teams />} />
              </>
            ) : (
              // 비로그인 상태일 때 Auth 라우트
              <Route path="/" element={<Auth />} />
            )}
          </Routes>
        </Suspense>
      </RouterBody>
    </>
  );
};

export default React.memo(AppRouter);
