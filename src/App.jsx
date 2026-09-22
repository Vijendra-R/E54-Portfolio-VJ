import { useState } from "react";
import {
  Alert,
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Nav,
  Navbar,
  ProgressBar,
  Row
} from "react-bootstrap";

// PROJECT DATA

const projects = [
  {
    title: "Smart Attendance Management System",
    category: "Python",
    description:
      "A school-focused application for managing student attendance, records and reports.",
    technologies: ["Python", "MySQL", "Tkinter"]
  },

  {
    title: "Pharmacy Management System",
    category: "Python + MySQL",
    description:
      "A database application for maintaining medicine, customer and transaction records.",
    technologies: ["Python", "MySQL", "Database"]
  },

  {
    title: "Country Information Finder",
    category: "JavaScript",
    description:
      "A web application demonstrating Fetch API, asynchronous programming and REST API data.",
    technologies: ["JavaScript", "Fetch API", "REST API"]
  },

  {
    title: "School Management System",
    category: "React",
    description:
      "A school management application concept for students, teachers, attendance, assignments and results.",
    technologies: ["React", "JavaScript", "MySQL"]
  },

  {
    title: "Graphical Circuit Solver",
    category: "Python",
    description:
      "An educational application demonstrating logic gates and digital circuit concepts.",
    technologies: ["Python", "Algorithms", "Logic Gates"]
  },

  {
    title: "EduAI Teacher Assistant",
    category: "Artificial Intelligence",
    description:
      "An educational AI assistant concept designed to support teachers with lessons and learning resources.",
    technologies: ["React", "AI", "Education"]
  }
];

// SKILL DATA

const skills = [
  {
    name: "Python",
    level: 90
  },

  {
    name: "HTML & CSS",
    level: 90
  },

  {
    name: "JavaScript",
    level: 85
  },

  {
    name: "React",
    level: 80
  },

  {
    name: "MySQL",
    level: 85
  },

  {
    name: "Computer Networking",
    level: 85
  }
];


// APP COMPONENT

function App() {
  const [showContact, setShowContact] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  // Contact form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <>
      {/* NAVIGATION BAR */}
      <Navbar
        expand="lg"
        sticky="top"
        className="portfolio-navbar"
      >
        <Container>
          <Navbar.Brand
            href="#home"
            className="fw-bold fs-4"
          >
            Vijendra <span className="brand-highlight">R</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="portfolio-navbar"
          />
          <Navbar.Collapse id="portfolio-navbar">
            <Nav className="ms-auto">
              <Nav.Link href="#home">
                Home
              </Nav.Link>
              <Nav.Link href="#about">
                About
              </Nav.Link>
              <Nav.Link href="#experience">
                Experience
              </Nav.Link>
              <Nav.Link href="#skills">
                Skills
              </Nav.Link>
              <Nav.Link href="#projects">
                Projects
              </Nav.Link>
              <Nav.Link href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* HERO SECTION */}
      <section
        id="home"
        className="hero-section"
      >
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={7}>
              <Badge
                bg="light"
                text="dark"
                className="px-3 py-2 mb-3"
              >
                React + Bootstrap Portfolio
              </Badge>
              <h1 className="display-3 fw-bold">
                Hello, I'm
                <span className="highlight">
                  {" "}Vijendra R
                </span>
              </h1>
              <h2 className="h3 mb-3">
                Computer Science Educator &
                Technology Enthusiast
              </h2>
              <p className="lead">
                I teach Computer Science and Information
                Technology while exploring programming,
                web development, databases, networking
                and educational technology.
              </p>
              <div className="d-flex gap-3 flex-wrap mt-4">
                <Button
                  href="#projects"
                  variant="light"
                  size="lg"
                >
                  View My Projects
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  onClick={() => setShowContact(true)}
                >
                  Contact Me
                </Button>
              </div>
            </Col>
            <Col lg={5}>
              <div className="profile-card text-center">
                <div className="profile-circle">
                  VR
                </div>
                <h3 className="mt-4">
                  Vijendra R
                </h3>
                <p>
                  B.Sc. • MCA • Computer Science Educator
                </p>
                <div className="d-flex justify-content-center gap-2 flex-wrap">
                  <Badge bg="primary">
                    Python
                  </Badge>

                  <Badge bg="success">
                    React
                  </Badge>

                  <Badge
                    bg="warning"
                    text="dark"
                  >
                    JavaScript
                  </Badge>

                  <Badge
                    bg="info"
                    text="dark"
                  >
                    MySQL
                  </Badge>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      {/* ABOUT SECTION */}

      <section
        id="about"
        className="section-padding"
      >
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={7}>
              <h2 className="section-title">
                About Me
              </h2>
              <p className="text-secondary">
                I am a Computer Science educator with
                an interest in programming, web
                technologies, databases, networking
                and educational technology.
              </p>
              <p className="text-secondary">
                My goal is to make technical concepts
                simple, practical and engaging for
                learners while continuously developing
                useful digital solutions.
              </p>
              <div className="d-flex gap-2 flex-wrap">
                <Badge bg="dark">
                  Computer Science
                </Badge>
                <Badge bg="dark">
                  Information Technology
                </Badge>
                <Badge bg="dark">
                  Programming
                </Badge>
                <Badge bg="dark">
                  Educational Technology
                </Badge>
              </div>
            </Col>
            <Col lg={5}>
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <h5 className="fw-bold">
                    Education
                  </h5>
                  <p>
                    MCA
                  </p>
                  <p>
                    B.Sc.
                  </p>
                  <hr />
                  <h5 className="fw-bold">
                    Professional Focus
                  </h5>

                  <p className="mb-0">
                    Teaching, software projects,
                    web development and
                    technology-enhanced learning.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>


      {/* EXPERIENCE */}
      <section
        id="experience"
        className="section-padding bg-light"
      >
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">
              Professional Journey
            </h2>
            <p className="text-secondary">
              Experience in education and technology.
            </p>
          </div>
          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <Badge bg="primary">
                    Sep 2022 – Present
                  </Badge>
                  <Card.Title className="mt-3">
                    PGT – Computer Science
                  </Card.Title>
                  <Card.Subtitle className="mb-3 text-secondary">
                    Siddharth Village School, Hosur
                  </Card.Subtitle>
                  <Card.Text>
                    Teaching CBSE Computer Science
                    for Grades XI and XII and
                    Information Technology for
                    Grade X.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <Badge bg="secondary">
                    Technology Experience
                  </Badge>
                  <Card.Title className="mt-3">
                    Web & Technology Projects
                  </Card.Title>
                  <Card.Text>
                    Experience with web development,
                    programming, databases and
                    educational technology projects.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SKILLS SECTION */}

      <section
        id="skills"
        className="section-padding"
      >
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">
              My Skills
            </h2>
            <p className="text-secondary">
              Technologies and technical areas.
            </p>
          </div>

          <Row className="g-4">
            {skills.map((skill) => (
              <Col
                md={6}
                key={skill.name}
              >
                <Card className="border-0 shadow-sm">
                  <Card.Body>
                    <div className="d-flex justify-content-between mb-2">
                      <strong>
                        {skill.name}
                      </strong>

                      <span>
                        {skill.level}%
                      </span>
                    </div>
                    <ProgressBar
                      now={skill.level}
                      animated
                    />
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* PROJECT SECTION */}

      <section
        id="projects"
        className="section-padding bg-light"
      >
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">
              Featured Projects
            </h2>
            <p className="text-secondary">
              Some of my programming and
              technology projects.
            </p>
          </div>
          <Row className="g-4">
            {projects.map((project) => (
              <Col
                md={6}
                lg={4}
                key={project.title}
              >
                <Card
                  className="h-100 border-0 shadow-sm project-card"
                >
                  <div className="project-banner">
                    {project.title.charAt(0)}
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Badge
                      bg="dark"
                      className="align-self-start mb-2"
                    >
                      {project.category}
                    </Badge>
                    <Card.Title>
                      {project.title}
                    </Card.Title>
                    <Card.Text className="text-secondary">
                      {project.description}
                    </Card.Text>
                    <div className="mt-auto">
                      {project.technologies.map(
                        (technology) => (
                          <Badge
                            bg="light"
                            text="dark"
                            className="me-1 mb-1"
                            key={technology}
                          >
                            {technology}
                          </Badge>
                        )
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* STATISTICS */}

      <section className="stats-section">
        <Container>
          <Row className="text-center g-4">
            <Col md={4}>
              <div className="stat-number">
                6+
              </div>
              <div>
                Projects
              </div>
            </Col>
            <Col md={4}>
              <div className="stat-number">
                6
              </div>
              <div>
                Technical Skills
              </div>
            </Col>
            <Col md={4}>
              <div className="stat-number">
                100%
              </div>
              <div>
                Learning Mindset
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CONTACT SECTION */}

      <section
        id="contact"
        className="section-padding"
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center mb-4">
                <h2 className="section-title">
                  Contact Me
                </h2>
                <p className="text-secondary">
                  Have a project idea?
                  Let's connect.
                </p>
              </div>
              {submitted && (
                <Alert variant="success">
                  Thank you! Your message
                  has been submitted.
                </Alert>
              )}
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <Form onSubmit={handleSubmit}>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>
                            Name
                          </Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Enter your name"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>
                            Email
                          </Form.Label>
                          <Form.Control
                            required
                            type="email"
                            placeholder="Enter your email"
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Form.Group>
                          <Form.Label>
                            Subject
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter subject"
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Form.Group>
                          <Form.Label>
                            Message
                          </Form.Label>
                          <Form.Control
                            required
                            as="textarea"
                            rows={5}
                            placeholder="Write your message..."
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Button
                          type="submit"
                          variant="primary"
                        >
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FOOTER */}

      <footer className="footer">
        <Container className="text-center">
          <h5>
            Vijendra R
          </h5>
          <p>
            Computer Science Educator |
            Developer |
            Technology Enthusiast
          </p>
          <small>
            © 2026 Vijendra R |
            E54 Assignment 12
          </small>
        </Container>
      </footer>
      {/* CONTACT MODAL */}
      <Modal
        show={showContact}
        onHide={() => setShowContact(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Contact Me
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>
              Computer Science Educator
            </strong>
          </p>
          <p>
            You can connect with me regarding
            programming, web development,
            education and technology projects.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="dark"
            onClick={() => setShowContact(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;