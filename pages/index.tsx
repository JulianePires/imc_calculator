import { useState } from "react";

import Layout from "../components/Layout";
import { Menu } from "../components/Menu";
import { About } from "../screens/About";
import { HomeScreen } from "../screens/HomeScreen";

type activePaths = "Home" | "About";

export default function Home() {
  const [activePath, setActivePath] = useState<activePaths>("Home");

  function toggleSwitchActivePath() {
    if (activePath === "Home") {
      setActivePath("About");
    } else {
      setActivePath("Home");
    }
  }

  function checkCurrentPage(page: string) {
    return page === activePath ? true : false;
  }
  return (
    <Layout title={`${activePath} | IMC Calculator`}>
      <Menu
        isCurrentPage={checkCurrentPage}
        switchActivePath={toggleSwitchActivePath}
      />
      {activePath === "Home" ? <HomeScreen /> : <About />}
    </Layout>
  );
}
