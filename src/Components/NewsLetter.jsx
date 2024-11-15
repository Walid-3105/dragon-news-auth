import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const NewsLetter = () => {
  return (
    <div className="flex bg-base-200 items-center gap-2 p-2">
      <p className="bg-[#D72050] text-base-200 px-3 py-1">Latest</p>
      <Marquee pauseOnHover={true} speed={150}>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
        </Link>
      </Marquee>
    </div>
  );
};

export default NewsLetter;
