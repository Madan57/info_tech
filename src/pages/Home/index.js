import React from "react";

import { Typography, Row, Col, Button, Card } from "antd";

import heroImg from "../../assets/svg/Rectangle 2592.svg";
import educationImg from "../../assets/svg/mortarboard-education-svgrepo-com.svg";
import locationImg from "../../assets/svg/location-2955.svg";
import cvImg from "../../assets/svg/24040511582994873.svg";
import telephoneImg from "../../assets/svg/telephone.svg";
import "./styles/style.scss";

const { Title, Text } = Typography;

const Home = () => {
  return (
    <>
      <Row>
        <Col className="home-top-left" sm={24} lg={9} md={9} xl={9}>
          <Title
            style={{
              position: "absolute",
              left: "96px",
              top: "200px",
              fontSize: "40px",
            }}
          >
            Join Our Team At
          </Title>{" "}
          <br />
          <Title
            style={{
              color: "#753BBD",
              position: "absolute",
              left: "96px",
              top: "250px",
              fontSize: "30px",
            }}
          >
            101 Infotech
          </Title>
          <Text
            style={{
              position: "absolute",
              left: "96px",
              top: "300px",
              fontSize: "16px",
            }}
          >
            Lorem ipsum dolor sit amet.
          </Text>
          <Button
            shape="round"
            style={{
              position: "absolute",
              left: "96px",
              top: "350px",
              background: "#753BBD",
              color: "#fff",
            }}
          >
            View Openings
          </Button>
        </Col>
        <Col style={{}}>
          <img
            className="homeImg"
            width={801}
            height={709}
            src={heroImg}
            alt="hero img"
          />
        </Col>
      </Row>
      <div
        style={{
          position: "absolute",
          padding: "6rem",
          left: "0px",
          height: "720px",
          top: "850px",
          background: "#F9F3FF",
        }}
      >
        <Row
          style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}
          className="home-card1"
          gutter={[40, 40]}
        >
          <Col sm={24} lg={6} md={6} xl={6}>
            <Card
              style={{
                background: "#ffffff",
                color: "753BBD",
                boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.12)",
                borderRadius: "20px",
                marginTop: "-3rem",
                marginLeft: "-1rem !important",
              }}
              title="Great Co workers"
            >
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                dicta minus molestiae beatae natus eveniet ratione temporibus
                aperiam harum alias officiis{" "}
              </Text>
            </Card>
          </Col>
          <Col className="card-performance-award" sm={24} lg={6} md={6} xl={6}>
            <Card
              style={{
                background: "#ffffff",
                boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.12)",
                borderRadius: "20px",
                marginTop: "-3rem",
              }}
              cover={
                <img
                  height={80.73}
                  width={134.03}
                  alt="example"
                  src={educationImg}
                />
              }
              title="Education Opportunity"
            >
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                dicta minus molestiae beatae natus eveniet ratione temporibus
                aperiam harum alias officiis{" "}
              </Text>
            </Card>
          </Col>
        </Row>
        <Row gutter={[40, 40]}>
          <Col className="card-easy-location" sm={24} lg={6} md={6} xl={6}>
            <Card
              style={{
                background: "#ffffff",
                boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.12)",
                borderRadius: "20px",
                marginTop: "-3rem",
              }}
              cover={
                <img
                  height={50.73}
                  width={100.03}
                  style={{ marginTop: "0.5rem" }}
                  alt="example"
                  src={locationImg}
                />
              }
              title="Easy Location"
            >
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                dicta minus molestiae beatae natus eveniet ratione temporibus
                aperiam harum alias officiis{" "}
              </Text>
            </Card>
          </Col>
          <Col className="card-performance-award" sm={24} lg={6} md={6} xl={6}>
            <Card
              style={{
                background: "#ffffff",
                boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.12)",
                borderRadius: "20px",
                marginTop: "0.5rem",
              }}
              cover={
                <img
                  height={50.73}
                  width={100.03}
                  style={{ marginTop: "0.5rem" }}
                  alt="example"
                  src={locationImg}
                />
              }
              title="Performance Award"
            >
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                dicta minus molestiae beatae natus eveniet ratione temporibus
                aperiam harum alias officiis{" "}
              </Text>
            </Card>
          </Col>
          <Col
            className="home-your-life"
            sm={24}
            lg={6}
            md={6}
            xl={6}
            style={{}}
          >
            <Title style={{ margin: "1rem 0" }} level={2}>
              Your Life At{" "}
              <span style={{ color: "#753BBD" }}>101 Infotech</span>{" "}
            </Title>
            <div
              style={{ width: "452px", height: "295px", textAlign: "justify" }}
            >
              <Text className="home-your-life-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                dicta minus molestiae vel beatae natus eveniet ratione
                temporibus aperiam harum alias officiis assumenda officia
                quibusdam deleniti eos cupiditate dolore doloribus!ratione
                temporibus aperiam harum alias officiis assumenda officia
                quibusdam deleniti eos cupiditate dolore doloribus!
              </Text>
              <Button
                className="learnmore-btn"
                shape="round"
                style={{
                  background: "#753BBD",
                  color: "#fff",
                  marginTop: "2rem",
                }}
              >
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </div>

      <div style={{ height: "2rem", color: "#fff" }}></div>
      <div className="join-team">
        <Title
          className="joinus-title"
          style={{ fontSize: "32px", textAlign: "center", padding: "2rem" }}
        >
          Are You Ready To Join our{" "}
          <span style={{ color: "#753BBD" }}>Team</span>
        </Title>
        <div
          style={{
            paddingLeft: "6rem",
            left: "128px",
            height: "700px",
            background: "#F9F3FF",
          }}
        >
          <Row gutter={[16, 16]}>
            <Col sm={24} lg={8} md={12} xl={8}>
              <div
                style={{
                  width: "346px",
                  height: "168px",
                  background: "#FFFFFF",
                  boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.12)",
                  borderRadius: "10px",
                  padding: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <Title style={{ fontSize: "18px", marginTop: "1rem" }}>
                  Word Press Designer (Intern)
                </Title>
                <Text>101Infotech | Full-time, Temporary or Contact</Text>
                <Button
                  shape="round"
                  style={{
                    background: "#753BBD",
                    color: "#fff",
                    marginTop: "2rem",
                  }}
                >
                  Apply Now
                </Button>
              </div>
            </Col>
            <Col sm={24} lg={8} md={12} xl={8}>
              <div
                style={{
                  width: "346px",
                  height: "168px",
                  background: "#FFFFFF",
                  boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.12)",
                  borderRadius: "10px",
                  padding: "1rem",
                }}
              >
                <Title style={{ fontSize: "18px", marginTop: "1rem" }}>
                  Digital Marketing
                </Title>
                <Text>101Infotech | Full-time, Temporary or Contact</Text>
                <Button
                  shape="round"
                  style={{
                    background: "#753BBD",
                    color: "#fff",
                    marginTop: "2rem",
                  }}
                >
                  Apply Now
                </Button>
              </div>
            </Col>

            <Col sm={24} lg={8} md={12} xl={8}>
              <div
                style={{
                  width: "346px",
                  height: "168px",
                  background: "#FFFFFF",
                  boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.12)",
                  borderRadius: "10px",
                  padding: "1rem",
                }}
              >
                <Title style={{ fontSize: "18px", marginTop: "1rem" }}>
                  Graphic Designer
                </Title>
                <Text>101Infotech | Full-time, Temporary or Contact</Text>
                <Button
                  shape="round"
                  style={{
                    background: "#753BBD",
                    color: "#fff",
                    marginTop: "2rem",
                  }}
                >
                  Apply Now
                </Button>
              </div>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col sm={24} lg={8} md={12} xl={8}>
              <div
                style={{
                  width: "346px",
                  height: "168px",
                  background: "#FFFFFF",
                  boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.12)",
                  borderRadius: "10px",
                  padding: "1rem",
                  marginTop: "1rem",
                }}
              >
                <Title style={{ fontSize: "18px", marginTop: "1rem" }}>
                  Front-End Developer
                </Title>
                <Text>101Infotech | Full-time, Temporary or Contact</Text>
                <Button
                  shape="round"
                  style={{
                    background: "#753BBD",
                    color: "#fff",
                    marginTop: "2rem",
                  }}
                >
                  Apply Now
                </Button>
              </div>
            </Col>

            <Col sm={24} lg={8} md={12} xl={8}>
              <div
                style={{
                  width: "346px",
                  height: "168px",
                  background: "#FFFFFF",
                  boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.12)",
                  borderRadius: "10px",
                  padding: "1rem",
                  marginTop: "1rem",
                }}
              >
                <Title style={{ fontSize: "18px", marginTop: "1rem" }}>
                  Back-End Developer
                </Title>
                <Text>101Infotech | Full-time, Temporary or Contact</Text>
                <Button
                  shape="round"
                  style={{
                    background: "#753BBD",
                    color: "#fff",
                    marginTop: "2rem",
                  }}
                >
                  Apply Now
                </Button>
              </div>
            </Col>
          </Row>
          <Row justify="center">
            <Button
              shape="round"
              style={{
                background: "#753BBD",
                color: "#fff",
                marginTop: "4rem",
              }}
            >
              View All Openings
            </Button>
          </Row>
          <Row
            className="team-info"
            style={{
              background:
                "linear-gradient(266.61deg, #2A165A -56.6%, #12105C -56.58%, #4F3376 103.93%)",
              borderRadius: "20px",
              padding: "1rem",
              width: "1190px",
              height: "234px",
              marginTop: "2rem",
              alignItems: "center",
            }}
            justify="space-between"
          >
            <div>
              <Title style={{ color: "#ffffff" }}>45+</Title>
              <Text style={{ color: "#ffffff" }}>Team Members</Text>
            </div>
            <div>
              <Title style={{ color: "#ffffff" }}>35+</Title>
              <Text style={{ color: "#ffffff" }}>Projects</Text>
            </div>
            <div>
              <Title style={{ color: "#ffffff" }}>250+</Title>
              <Text style={{ color: "#ffffff" }}>Happy User</Text>
            </div>
            <div>
              <Title style={{ color: "#ffffff" }}>25k</Title>
              <Text style={{ color: "#ffffff" }}>Happy Moments</Text>
            </div>
          </Row>
          <Row justify="center" style={{ margin: "4rem 0" }}>
            <Title style={{ fontSize: "32px" }}>
              Learn Our Recruitment{" "}
              <span style={{ color: "#753BBD" }}>Process</span>
            </Title>
          </Row>
          <Row gutter={[16, 16]}>
            <Col sm={24} lg={6} md={12} xl={6}>
              <div
                className="recuitement-card"
                style={{
                  width: "290px",
                  height: "313px",
                  background: "#FFFFFF",
                  boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.12)",
                  borderRadius: "10px",
                  padding: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <img src={cvImg} width={40} height={40} alt="cv submission" />

                <Title style={{ fontSize: "18px", marginTop: "1rem" }}>
                  CV Submission
                </Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  dicta minus molestiae beatae natus eveniet ratione temporibus
                  aperiam harum alias officiis{" "}
                </Text>
              </div>
            </Col>
            <Col sm={24} lg={6} md={12} xl={6}>
              <div
                className="recuitement-card"
                style={{
                  width: "290px",
                  height: "313px",
                  background: "#FFFFFF",
                  boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.12)",
                  borderRadius: "10px",
                  padding: "1rem",
                }}
              >
                <img
                  src={telephoneImg}
                  width={40}
                  height={40}
                  alt="cv submission"
                />

                <Title style={{ fontSize: "18px", marginTop: "1rem" }}>
                  Phone Screnning{" "}
                </Title>
                <Text>
                  101Infotech | FLorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Qui dicta minus molestiae beatae natus
                  eveniet ratione temporibus aperiam harum alias officiis{" "}
                </Text>
              </div>
            </Col>

            <Col sm={24} lg={6} md={12} xl={6}>
              <div
                className="recuitement-card"
                style={{
                  width: "290px",
                  height: "313px",
                  background: "#FFFFFF",
                  boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.12)",
                  borderRadius: "10px",
                  padding: "1rem",
                }}
              >
                <img src={cvImg} width={40} height={40} alt="cv submission" />

                <Title style={{ fontSize: "18px", marginTop: "1rem" }}>
                  Skill Assessment
                </Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  dicta minus molestiae beatae natus eveniet ratione temporibus
                  aperiam harum alias officiis{" "}
                </Text>
              </div>
            </Col>
            <Col sm={24} lg={6} md={12} xl={6}>
              <div
                className="recuitement-card"
                style={{
                  width: "290px",
                  height: "313px",
                  background: "#FFFFFF",
                  boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.12)",
                  borderRadius: "10px",
                  padding: "1rem",
                }}
              >
                <img src={cvImg} width={40} height={40} alt="cv submission" />
                <Title style={{ fontSize: "18px", marginTop: "1rem" }}>
                  Full Interview
                </Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  dicta minus molestiae beatae natus eveniet ratione temporibus
                  aperiam harum alias officiis{" "}
                </Text>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Home;
