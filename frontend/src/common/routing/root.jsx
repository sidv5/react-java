import { Outlet } from "react-router-dom";
import Header from "../navbar/Header";

export default function Root() {
  return (
    <div>
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
