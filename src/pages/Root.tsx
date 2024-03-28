import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function RootLayout() {
  return (
    <>
      <main>
        <NavBar />
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
