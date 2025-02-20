import { useState } from "react";
import "./ModalDropdown.scss";
import dropdownArrow from "../../../assets/dropdownIcons/dropdownArrow.svg";

export default function ModalDropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div id="modal-dropdown">
      <div className="dropdown-title-box" onClick={toggleDropdown}>
        <h4 className="dropdown-title">{title}</h4>
        <img
          src={dropdownArrow}
          alt="dropdown icon"
          className={isOpen ? "rotated" : ""}
        />
      </div>
      <div className={`dropdown-content ${isOpen ? "open" : "closed"}`}>
        {children}
      </div>
    </div>
  );
}
