import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {

  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

    return (
      <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT LIBRARY</span>
        <img
          src="https://source.unsplash.com/sfL_QOnmy00/200x200"
          alt=""
        />
        <p>
        Libraries play a very healthy role throughout our life. Libraries provide the students very healthy environment for learning as well as making notes or completing an assignment. Library provides a very calm and disciplined atmosphere which helps students to maintain a good concentration on their studies.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <a href="https://www.facebook.com" target="_facebook"><i className="sidebarIcon fab fa-facebook-square"></i></a>
          <a href="https://twitter.com/?lang=en" target="_twitter"><i className="sidebarIcon fab fa-twitter-square"></i></a>
          <a href="https://in.pinterest.com" target="_pinterest"><i className="sidebarIcon fab fa-pinterest-square"></i></a>
          <a href="https://www.instagram.com/?hl=en" target="_instagram"><i className="sidebarIcon fab fa-instagram-square"></i></a>
        </div>
      </div>
    </div>
    )
}

export default Sidebar;
