import { NavLink } from "react-router-dom";

import "./style/links.css";

const links = [
  { url: "/search", text: "All🔎  " },
  { url: "/image", text: "Images📸  " },
  { url: "/news", text: "News📰  " },
  { url: "/video", text: "Videos📺  " },
];

const Links = ({ darkTheme }) => {
  return (
    <div className={darkTheme ? "dark links" : "white links"}>
      {links.map(({ url, text }) => (
        <NavLink className="nav-links" to={url}>
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
