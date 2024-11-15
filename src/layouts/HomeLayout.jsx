import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LeftNavBar from "../Components/Layout-components/LeftNavBar";
import RightNavBar from "../Components/Layout-components/RightNavBar";
import NavBar from "../Components/NavBar";
import NewsLetter from "../Components/NewsLetter";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <NewsLetter></NewsLetter>
        </section>
      </header>

      <nav className="w-11/12 mx-auto py-3">
        <NavBar></NavBar>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
        <aside className="left col-span-3">
          <LeftNavBar></LeftNavBar>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>

        <aside className="col-span-3">
          <RightNavBar></RightNavBar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
