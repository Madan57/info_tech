import React from "react";
import { Row, Col, Typography, Input, Button } from "antd";
import {
  FacebookFilled,
  InstagramFilled,
  TwitterOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

import "./styles/footer.scss";

function Footer() {
  return (
    <>
      <div
        className="footer"
        style={{
          bottom: 0,
          left: 0,
          right: 0,
          color: "#fff !important",
          paddingTop: "30px",
          paddingBottom: "10px",
        }}
      >
        <Row>
          <Typography.Title
            style={{
              paddingLeft: "2.3rem",
              fontSize: "30px",
              color: "#ffffff",
            }}
          >
            Join our newsletter
          </Typography.Title>
        </Row>
        <Row justify="space-between">
          <Typography.Text
            style={{
              paddingLeft: "2.3rem",
              fontSize: "17px",
              color: "#ffffff",
            }}
          >
            Sign up to stay updated with the latest insights, news, and more.
          </Typography.Text>

          <Col
            className="footer-input-container"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              //   paddingRight: "2.5rem",
            }}
            sm={8}
          >
            <Input placeholder="Your email address" /> &nbsp; &nbsp;
            <Button
              style={{
                backgroundColor: "#753BBD",
                borderColor: "#753BBD",
                borderRadius: "8px",
              }}
            >
              Subscribe
            </Button>
          </Col>
        </Row>
        <Col
          xs={24}
          className="container"
          style={{
            marginTop: 0,
            marginBottom: 0,
            paddingRight: "27px",
            paddingLeft: "27px",
          }}
        >
          <Row justify="space-between">
            <Col
              xs={14}
              md={4}
              style={{ marginTop: "10px", paddingLeft: "10px" }}
            >
              <Row>
                <Typography
                  style={{
                    color: "#ffffff",
                    fontSize: "20px",
                    fontWeight: 700,
                    marginBottom: "20px",
                  }}
                >
                  Company
                </Typography>
              </Row>
              <Row>
                <Typography
                  style={{
                    color: "#ffffff",
                    fontSize: "15px",
                    marginBottom: "15px",
                  }}
                >
                  About Us
                </Typography>
              </Row>
              <Row>
                <Typography
                  style={{
                    color: "#ffffff",
                    fontSize: "15px",
                    marginBottom: "15px",
                  }}
                >
                  What We Do
                </Typography>
              </Row>
              <Row>
                <Typography
                  style={{
                    color: "#ffffff",
                    fontSize: "15px",
                    marginBottom: "15px",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  Contact
                </Typography>
              </Row>
            </Col>
            <Col
              xs={10}
              md={4}
              style={{ marginTop: "10px", paddingLeft: "10px" }}
            >
              <Row>
                <Typography
                  style={{
                    color: "#ffffff",
                    fontSize: "20px",
                    fontWeight: 700,
                    marginBottom: "20px",
                  }}
                >
                  Services
                </Typography>
              </Row>
              <Row>
                <Typography
                  style={{
                    color: "#ffffff",
                    fontSize: "15px",
                    marginBottom: "15px",
                  }}
                >
                  Web Design
                </Typography>
              </Row>
              <Row>
                <Typography
                  style={{
                    color: "#ffffff",
                    fontSize: "15px",
                    marginBottom: "15px",
                  }}
                >
                  App Development
                </Typography>
              </Row>
              <Row>
                <Typography
                  style={{
                    color: "#ffffff",
                    fontSize: "15px",
                    marginBottom: "15px",
                  }}
                >
                  Graphics Designing
                </Typography>
              </Row>
              <Row>
                <Typography
                  style={{
                    color: "#ffffff",
                    fontSize: "15px",
                    marginBottom: "15px",
                  }}
                >
                  Digital Marketing
                </Typography>
              </Row>
            </Col>
            <Col
              xs={14}
              md={4}
              style={{ marginTop: "10px", paddingLeft: "10px" }}
            >
              <Row>
                <Typography
                  style={{
                    color: "#ffffff",
                    fontSize: "20px",
                    fontWeight: 700,
                    marginBottom: "20px",
                  }}
                >
                  Join
                </Typography>
              </Row>
              <Row>
                <Typography
                  style={{
                    color: "#ffffff",
                    fontSize: "15px",
                    marginBottom: "15px",
                  }}
                >
                  Carrers at 101InfoTech
                </Typography>
              </Row>
              <Row>
                <Typography
                  style={{
                    color: "#ffffff",
                    fontSize: "15px",
                    marginBottom: "15px",
                  }}
                >
                  Internship
                </Typography>
              </Row>
            </Col>
            <Col
              xs={14}
              md={4}
              style={{ marginTop: "10px", paddingLeft: "10px" }}
            >
              <Row>
                <Typography
                  style={{
                    color: "#ffffff",
                    fontSize: "20px",
                    fontWeight: 700,
                    marginBottom: "20px",
                  }}
                >
                  Connected With Us
                </Typography>
              </Row>
              <Row>
                <Typography
                  style={{
                    color: "#ffffff",
                    fontSize: "15px",
                    marginBottom: "15px",
                  }}
                >
                  Blog
                </Typography>
              </Row>
              <Row>
                <Typography
                  style={{
                    color: "#ffffff",
                    fontSize: "15px",
                    marginBottom: "15px",
                  }}
                >
                  <FacebookFilled
                    style={{
                      color: "#ffffff",
                      marginRight: "1rem",
                      fontSize: "18px",
                    }}
                  />
                  Facebook
                </Typography>
              </Row>
              <Row>
                <Typography
                  style={{
                    color: "#ffffff",
                    fontSize: "15px",
                    marginBottom: "15px",
                  }}
                >
                  <InstagramFilled
                    style={{
                      color: "#fb3958	",
                      marginRight: "1rem",
                      fontSize: "18px",
                    }}
                  />
                  Instagram
                </Typography>
              </Row>
              <Row>
                <Typography
                  style={{
                    color: "#ffffff",
                    fontSize: "15px",
                    marginBottom: "15px",
                  }}
                >
                  <TwitterOutlined
                    style={{
                      color: "#00A7D5	",
                      marginRight: "1rem",
                      fontSize: "18px",
                    }}
                  />
                  Twitter
                </Typography>
              </Row>
              <Row>
                <Typography
                  style={{
                    color: "#ffffff",
                    fontSize: "15px",
                    marginBottom: "15px",
                  }}
                >
                  <LinkedinOutlined
                    style={{
                      color: "#ffffff",
                      marginRight: "1rem",
                      fontSize: "18px",
                    }}
                  />
                  LinkedIn
                </Typography>
              </Row>
              <Row>
                <Typography
                  style={{
                    color: "#ffffff",
                    fontSize: "15px",
                    marginBottom: "15px",
                  }}
                >
                  <YoutubeOutlined
                    style={{
                      color: "#FF0000",
                      marginRight: "1rem",
                      fontSize: "18px",
                    }}
                  />
                  YouTube
                </Typography>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={24}>
          <Row justify="start">
            <span
              style={{
                padding: "1rem",
                marginLeft: "1.5rem",
                color: "#ffffff",
                fontSize: "16px",
                marginTop: "2rem",
              }}
            >
              Copyright 2022 101InfoTech. All rights reserved. &nbsp; &nbsp;
              Privacy Policy
            </span>
          </Row>
        </Col>
      </div>
    </>
  );
}

export default Footer;
