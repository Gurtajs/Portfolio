import react from "react";
import Home from './Home'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="flex justify-around">
      <Link to='/home'>
      Home
      </Link>
      <Link to='/projects'>
      Projects
      </Link>
      <Link to='/about'>
      About
      </Link>
    </ul>
  );
}
