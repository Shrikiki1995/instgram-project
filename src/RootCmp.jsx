import { Routes, Route } from "react-router";

// import { HomePage } from "./pages/HomePage";
// import { AboutUs, AboutTeam, AboutVision } from "./pages/AboutUs";
// import { CarIndex } from "./pages/CarIndex.jsx";
// import { StoryIndex } from "./pages/StoryIndex.jsx";
// import { ReviewIndex } from "./pages/ReviewIndex.jsx";
// import { ChatApp } from "./pages/Chat.jsx";
// import { AdminIndex } from "./pages/AdminIndex.jsx";

// import { CarDetails } from "./pages/CarDetails";
// import { UserDetails } from "./pages/UserDetails";
// import { BoardDetails } from "./pages/BoardDetails";
// import { TaskDetails } from "./pages/TaskDetails";

import { StoryIndex } from "./pages/StoryIndex";
import { ProfileIndex } from "./pages/ProfileIndex";
import { Manu } from "./cmps/Manu";

export function RootCmp() {
  return (
    <div className="layout">
      <aside>
        <Manu />
      </aside>
      <main>
        <Routes>
          {/* Home */}
          <Route path="" element={<StoryIndex />} />
          {/* About */}
          {
            /* <Route path="about" element={<AboutUs />}>
            <Route path="team" element={<AboutTeam />} />
            <Route path="vision" element={<AboutVision />} />
            </Route>*/
            <Route to="/:userId" element={<ProfileIndex />} />
          }
        </Routes>

      </main>
    </div>
  );
}
