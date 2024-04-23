import {
  Package,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import "./style.css";

export function Footer() {
  return (
    <footer>
      <Link to="/" className="logo">
            <div className="container">
                <span>By Gugs Marques.</span>
            </div>
      </Link>


      
    </footer>
  );
}
