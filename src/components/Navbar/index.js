import { Row, Typography, Button, Menu, Dropdown, Drawer } from "antd";
import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { FiMenu } from "react-icons/fi";
import { Container } from "../../styledGlobal/container";
import { Navigation, Nav, Logo, NavList } from "./styles/style";
import { NavLink } from "react-router-dom";
import logo from "../../assets/svg/Info tech logo web 1.svg";
import "./styles/style.scss";
const { Text } = Typography;

const Navbar = () => {
  const [mobileDrawer, setMobileDrawer] = useState(false);
  const [windowWidth, setWindowWidth] = useState("");

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", updateWindowSize);
    console.log(windowWidth);
  }, [windowWidth]);

  const updateWindowSize = () => {
    setWindowWidth(window.innerWidth);
  };
  const showDrawer = () => {
    setMobileDrawer(true);
  };

  const hideDrawer = () => {
    setMobileDrawer(false);
  };

  const servicesMenu = (
    <Menu>
      <Menu.Item>
        <NavLink to="/about/college">our services</NavLink>
      </Menu.Item>
    </Menu>
  );
  const NavigationLink = () => {
    return (
      <NavList>
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="/about">
          About
        </NavLink>
        <Dropdown className="navlink" overlay={servicesMenu}>
          <Text>
            Services <DownOutlined />
          </Text>
        </Dropdown>
        <NavLink className="navlink" to="/blogs">
          Blogs
        </NavLink>
        <NavLink className="navlink" to="/contact">
          Contact
        </NavLink>
        <NavLink className="navlink" to="/login">
          <Button
            shape="round"
            style={{
              color: "#753BBD",
              borderColor: "#753BBD",
            }}
          >
            Login
          </Button>
        </NavLink>
      </NavList>
    );
  };

  return (
    <Navigation>
      <Nav>
        <Container>
          {windowWidth > 992 ? (
            <Row
              style={{ width: "100%" }}
              justify="space-between"
              align="middle"
            >
              <Logo>
                <NavLink to="/">
                  <img
                    src={logo}
                    alt=""
                    style={{
                      width: "100px",
                      marginLeft: "-2.5rem",
                      height: "90px",
                    }}
                  />
                </NavLink>
              </Logo>
              <NavigationLink />
            </Row>
          ) : (
            <Row
              style={{
                width: "100%",
                alignItems: "center",
              }}
              justify="space-between"
              align="middle"
            >
              <Logo>
                <NavLink to="/">
                  <img
                    src={logo}
                    alt=""
                    style={{ width: "100px", height: "90px" }}
                  />
                </NavLink>
              </Logo>

              <NavLink className="navlink" to="/login">
                <Button
                  shape="round"
                  style={{
                    color: "#fff",
                    borderColor: "#753BBD",
                    backgroundColor: "#753BBD",
                    marginTop: "1.5rem",
                    marginLeft: "5rem",
                  }}
                >
                  Login
                </Button>
              </NavLink>
              <FiMenu
                style={{ cursor: "pointer", fontSize: "1.2rem" }}
                onClick={showDrawer}
              />

              <Drawer
                placement="right"
                className="mobile"
                closable={true}
                onClose={hideDrawer}
                visible={mobileDrawer}
              >
                <NavigationLink />
              </Drawer>
            </Row>
          )}
        </Container>
      </Nav>
    </Navigation>
  );
};

export default Navbar;
