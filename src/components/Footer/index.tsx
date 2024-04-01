import {
  Package,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import "./style.css";

export function Footer() {
  return (
    <footer>
      <Link to="/" className="logo">
        <Package weight="fill" className="icon" />
        <span>Produtos</span>
      </Link>
    </footer>
  );
}
