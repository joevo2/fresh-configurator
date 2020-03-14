import React from "react";
import HeaderBar from "./components/HeaderBar";

import ConnectionSettings from "./managers/ConnectionSettings";
import ConnectControls from "./managers/ConnectControls";
import Navigation from "./managers/Navigation";
import TabRouter from "./managers/TabRouter";

import FcStatusProvider from "./providers/FcStatusProvider";
import MainLayout from "./layouts/MainLayout";
import Setup from "./tabs/Setup";

const App: React.FC = () => (
  <MainLayout>
    <header>
      <HeaderBar>
        <div className="tools">
          <ConnectionSettings />
          <ConnectControls />
        </div>
      </HeaderBar>
    </header>
    <main>
      <nav>
        <Navigation />
      </nav>
      <TabRouter>
        <div id="landing">This is some landing page</div>
        <div id="setup">
          <Setup />
        </div>
      </TabRouter>
    </main>
    <footer>
      <div>
        <FcStatusProvider />
      </div>
    </footer>
  </MainLayout>
);

export default App;
