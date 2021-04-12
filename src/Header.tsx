import React, { useState, Component } from "react";
import logo from "./assets/images/logo.svg";
import iconDesigner from "./assets/images/iconDesigner.svg";
import smartTag from "./assets/images/smartTag.svg";

interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = (ev: any) => {
    console.log(ev.target.classList);
  };
  return (
    <React.Fragment>
      <nav className="navBarClass">
        <img
          src={logo}
          className="logo"
          alt="logo"
          onClick={() => setIsModalOpen(!isModalOpen)}
        />
        <span className="text-super text">
          Super<span style={{ fontWeight: "bold" }}>Vision</span>
        </span>

        {isModalOpen && (
          <div
            onMouseOver={(ev) => toggleModal(ev)}
            className="modal-design text"
          >
            <p className="text-design">Design Center</p>
            <p>
              <img
                src={iconDesigner}
                className="icon icon-designer"
                alt="logo"
              />
              <p className="text-flow-design"> Flow Designer</p>
            </p>
            <p>
              <img src={iconDesigner} className="icon icon-tag" alt="logo" />
              <p className="text-flow-design"> Smartag</p>
            </p>
            <p className="text-design">Exchange</p>
            <p className="text-design">Management Center </p>
            <p>
              <img
                src={iconDesigner}
                className="icon icon-monitoring"
                alt="logo"
              />
              <p className="text-flow-design"> Monitoring</p>
            </p>
            <p>
              <img
                src={iconDesigner}
                className="icon icon-billing"
                alt="logo"
              />
              <p className="text-flow-design">Billing</p>
            </p>
            <p>
              <img src={iconDesigner} className="icon icon-access" alt="logo" />
              <p className="text-flow-design">Access Management</p>
            </p>
            <p>
              <img
                src={iconDesigner}
                className="icon icon-workforce"
                alt="logo"
              />
              <p className="text-flow-design">Workforce Management</p>
            </p>
          </div>
        )}
      </nav>
    </React.Fragment>
  );
};

export default Header;
