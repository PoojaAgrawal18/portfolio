import { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Card,
  CardContent,
  Chip,
  LinearProgress,
  Fade,
  Slide,
  Zoom,
  Paper,
  Avatar,
  IconButton,
} from "@mui/material";
import {
  Code,
  Palette,
  PhoneAndroid,
  Psychology,
  Language,
  Speed,
  GitHub,
  LinkedIn,
  Email,
  ArrowForward,
} from "@mui/icons-material";
import githubImg from "./assets/contribution.png";
import githubImg1 from "./assets/contribution1.png";
import linkedinImg from "./assets/linkdin.png";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6366f1",
    },
    secondary: {
      main: "#ec4899",
    },
    background: {
      default: "#0f172a",
      paper: "#1e293b",
    },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
    },
    h2: {
      fontWeight: 700,
      fontSize: "clamp(2rem, 5vw, 2.5rem)",
    },
    h5: {
      fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
    },
    h6: {
      fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          textTransform: "none",
          fontWeight: 600,
          padding: "10px 30px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-8px)",
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1920,
    },
  },
});

const projects = [
  {
    icon: <Code sx={{ fontSize: { xs: 50, md: 60 } }} />,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with advanced features like real-time inventory, payment integration, and analytics dashboard.",
    tags: ["React", "Node.js", "MongoDB"],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    icon: <Palette sx={{ fontSize: { xs: 50, md: 60 } }} />,
    title: "Design System",
    description:
      "Comprehensive component library and design system used across multiple products, ensuring consistency and efficiency.",
    tags: ["React", "TypeScript", "Storybook"],
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    icon: <PhoneAndroid sx={{ fontSize: { xs: 50, md: 60 } }} />,
    title: "Mobile App",
    description:
      "Cross-platform mobile application with offline capabilities, push notifications, and seamless user experience.",
    tags: ["React Native", "Firebase", "Redux"],
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    icon: <Psychology sx={{ fontSize: { xs: 50, md: 60 } }} />,
    title: "AI Dashboard",
    description:
      "Interactive dashboard for visualizing machine learning models and data analytics with real-time insights.",
    tags: ["Vue.js", "Python", "TensorFlow"],
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
  {
    icon: <Language sx={{ fontSize: { xs: 50, md: 60 } }} />,
    title: "Social Platform",
    description:
      "Real-time social networking platform with chat, posts, and community features for thousands of concurrent users.",
    tags: ["Next.js", "Socket.io", "PostgreSQL"],
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  },
  {
    icon: <Speed sx={{ fontSize: { xs: 50, md: 60 } }} />,
    title: "Performance Tool",
    description:
      "Developer tool for monitoring and optimizing web application performance with detailed metrics and suggestions.",
    tags: ["JavaScript", "WebAssembly", "Chrome API"],
    gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
  },
];

const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "CSS / Tailwind", level: 92 },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 85 },
      { name: "Databases", level: 87 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git / GitHub", level: 93 },
      { name: "Docker", level: 80 },
      { name: "UI/UX Design", level: 86 },
    ],
  },
];

export default function Portfolio() {
  const [visible, setVisible] = useState(true);
  const [hoveredContact, setHoveredContact] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* AppBar */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "rgba(15, 23, 42, 0.8)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Toolbar sx={{ px: { xs: 2, sm: 3, md: 4, lg: 6 } }}>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              background: "linear-gradient(135deg, #6366f1, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
            }}
          >
            Portfolio
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            <Button color="inherit" onClick={() => scrollToSection("home")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => scrollToSection("projects")}>
              Projects
            </Button>
            <Button color="inherit" onClick={() => scrollToSection("skills")}>
              Skills
            </Button>
            <Button color="inherit" onClick={() => scrollToSection("contact")}>
              Contact
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 0.5 }}>
            <Button
              size="small"
              color="inherit"
              onClick={() => scrollToSection("home")}
            >
              Home
            </Button>
            <Button
              size="small"
              color="inherit"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background:
            "radial-gradient(circle at 20% 50%, rgba(99,102,241,0.15), transparent 50%), radial-gradient(circle at 80% 50%, rgba(236,72,153,0.15), transparent 50%)",
          px: { xs: 2, sm: 3, md: 6 },
          pt: { xs: 10, md: 12 },
        }}
      >
        <Container maxWidth="xxl">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: 4,
            }}
          >
            {/* LEFT SIDE – TEXT */}
            <Box
              sx={{
                flex: { xs: "1", md: "0 0 58.333333%" },
                mt: { xs: 0, md: -12 },
              }}
            >
              <Fade in={visible} timeout={1000}>
                <Box>
                  <Typography
                    variant="h1"
                    sx={{
                      fontWeight: 900,
                      mb: 4,
                      background:
                        "linear-gradient(90deg, #ffffff, #6366f1, #ec4899, #ffffff)",
                      backgroundSize: "300% 300%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      animation: "shine 6s ease infinite",
                      textShadow: "0 0 30px rgba(99,102,241,0.35)",
                      "@keyframes shine": {
                        "0%": { backgroundPosition: "0% 50%" },
                        "50%": { backgroundPosition: "100% 50%" },
                        "100%": { backgroundPosition: "0% 50%" },
                      },
                    }}
                  >
                    Pooja Agrawal
                  </Typography>

                  <Typography
                    variant="h5"
                    color="text.secondary"
                    sx={{ mb: 3 }}
                  >
                    Creative Frontend Developer
                  </Typography>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      maxWidth: 520,
                      mb: 4,
                      lineHeight: 1.8,
                    }}
                  >
                    I build modern, responsive web applications with clean UI
                    and smooth user experience. Passionate about React, design
                    systems, and performance-driven development.
                  </Typography>

                  <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    <Button
                      variant="contained"
                      onClick={() => scrollToSection("projects")}
                      sx={{
                        background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                      }}
                    >
                      View My Work
                    </Button>

                    <Button
                      variant="outlined"
                      onClick={() => scrollToSection("contact")}
                    >
                      Contact Me
                    </Button>
                  </Box>
                </Box>
              </Fade>
            </Box>

            {/* RIGHT SIDE – PROFILE IMAGE */}
            <Box
              sx={{
                flex: { xs: "1", md: "0 0 41.666667%" },
                mt: { xs: 0, md: -37 },
              }}
            >
              <Zoom in={visible} timeout={1200}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-end" },
                  }}
                >
                  <Avatar
                    src="/profile.jpg"
                    alt="Pooja Agrawal"
                    sx={{
                      width: { xs: 180, md: 260 },
                      height: { xs: 180, md: 260 },
                      border: "6px solid",
                      borderColor: "primary.main",
                      boxShadow: "0 20px 50px rgba(99,102,241,0.4)",
                    }}
                  />
                </Box>
              </Zoom>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box
        id="projects"
        sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, sm: 3, md: 4 } }}
      >
        <Container maxWidth="xxl">
          <Typography
            variant="h2"
            textAlign="center"
            sx={{
              mb: { xs: 4, md: 6 },
              background: "linear-gradient(135deg, #6366f1, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Featured Projects
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 3, md: 4 },
            }}
          >
            {projects.map((project, index) => (
              <Box
                key={index}
                sx={{
                  flex: {
                    xs: "1 1 100%",
                    sm: "1 1 calc(50% - 12px)",
                    md: "1 1 calc(33.333% - 21.333px)",
                  },
                  minWidth: 0,
                }}
              >
                <Zoom in={visible} timeout={500 + index * 100}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      "&:hover": {
                        boxShadow: "0 20px 50px rgba(99, 102, 241, 0.3)",
                        borderColor: "#6366f1",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        height: { xs: 160, sm: 180, md: 200 },
                        background: project.gradient,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                      }}
                    >
                      {project.icon}
                    </Box>
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        p: { xs: 2, md: 3 },
                      }}
                    >
                      <Typography
                        variant="h5"
                        gutterBottom
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: "1.25rem", md: "1.5rem" },
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mb: 2,
                          flexGrow: 1,
                          fontSize: { xs: "0.875rem", md: "0.875rem" },
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                        {project.tags.map((tag, i) => (
                          <Chip
                            key={i}
                            label={tag}
                            size="small"
                            sx={{
                              background: "rgba(99, 102, 241, 0.2)",
                              color: "#6366f1",
                              border: "1px solid rgba(99, 102, 241, 0.3)",
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Zoom>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box
        id="skills"
        sx={{
          py: { xs: 6, md: 10 },
          px: { xs: 2, sm: 3, md: 4 },
          background: "rgba(99, 102, 241, 0.02)",
        }}
      >
        <Container maxWidth="xxl">
          <Typography
            variant="h2"
            textAlign="center"
            sx={{
              mb: { xs: 4, md: 6 },
              background: "linear-gradient(135deg, #6366f1, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Skills & Expertise
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 3, md: 4 },
            }}
          >
            {skills.map((skillGroup, index) => (
              <Box
                key={index}
                sx={{
                  flex: {
                    xs: "1 1 100%",
                    md: "1 1 calc(33.333% - 21.333px)",
                  },
                  minWidth: 0,
                }}
              >
                <Slide in={visible} direction="up" timeout={500 + index * 200}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 3, md: 4 },
                      height: "100%",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      "&:hover": {
                        borderColor: "#6366f1",
                        boxShadow: "0 10px 30px rgba(99, 102, 241, 0.2)",
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 3,
                        color: "#6366f1",
                        fontWeight: 600,
                        fontSize: { xs: "1.25rem", md: "1.5rem" },
                      }}
                    >
                      {skillGroup.category}
                    </Typography>
                    {skillGroup.items.map((skill, i) => (
                      <Box key={i} sx={{ mb: 3 }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mb: 1,
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: { xs: "0.875rem", md: "0.875rem" },
                            }}
                          >
                            {skill.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="primary"
                            sx={{
                              fontSize: { xs: "0.875rem", md: "0.875rem" },
                            }}
                          >
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: { xs: 6, md: 8 },
                            borderRadius: 4,
                            background: "rgba(255, 255, 255, 0.1)",
                            "& .MuiLinearProgress-bar": {
                              background:
                                "linear-gradient(90deg, #6366f1, #ec4899)",
                              borderRadius: 4,
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </Paper>
                </Slide>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Enhanced Contact Section */}
      <Box
        id="contact"
        sx={{
          py: { xs: 8, md: 12 },
          px: { xs: 2, sm: 3, md: 4 },
          position: "relative",
          overflow: "hidden",
          background: "#0a0f1e",
        }}
      >
        {/* Animated Background */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 30%, rgba(99,102,241,0.2), transparent 40%), radial-gradient(circle at 80% 70%, rgba(236,72,153,0.2), transparent 40%)",
            animation: "pulse 8s ease-in-out infinite",
            "@keyframes pulse": {
              "0%, 100%": { opacity: 0.5 },
              "50%": { opacity: 1 },
            },
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              borderRadius: "50%",
              background:
                i % 2 === 0 ? "rgba(99,102,241,0.4)" : "rgba(236,72,153,0.4)",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${
                Math.random() * 10 + 10
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              "@keyframes float": {
                "0%, 100%": {
                  transform: "translateY(0px)",
                },
                "50%": {
                  transform: `translateY(${Math.random() * 50 - 25}px)`,
                },
              },
            }}
          />
        ))}

        <Container maxWidth="xxl" sx={{ position: "relative", zIndex: 1 }}>
          <Fade in={visible} timeout={1000}>
            <Box textAlign="center" mb={6}>
              <Typography
                variant="h2"
                sx={{
                  mb: 2,
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #6366f1, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Let's Work Together
              </Typography>
            </Box>
          </Fade>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
            }}
          >
            {/* Contact Information */}
            <Box sx={{ flex: { xs: "1", md: "0 0 50%" } }}>
              <Slide in={visible} direction="left" timeout={800}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    background: "rgba(30, 41, 59, 0.5)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ mb: 3, fontWeight: 600, color: "white" }}
                  >
                    Contact Information
                  </Typography>

                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                  >
                    {/* Email */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        p: 2,
                        borderRadius: 2,
                        background: "rgba(99, 102, 241, 0.1)",
                        border: "1px solid rgba(99, 102, 241, 0.2)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          background: "rgba(99, 102, 241, 0.2)",
                          transform: "translateX(8px)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background:
                            "linear-gradient(135deg, #6366f1, #8b5cf6)",
                        }}
                      >
                        <Email sx={{ color: "white" }} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                          Email
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          agrawalpuja444@gmail.com
                        </Typography>
                      </Box>
                    </Box>

                    {/* Location */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        p: 2,
                        borderRadius: 2,
                        background: "rgba(59, 130, 246, 0.1)",
                        border: "1px solid rgba(59, 130, 246, 0.2)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          background: "rgba(59, 130, 246, 0.2)",
                          transform: "translateX(8px)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background:
                            "linear-gradient(135deg, #3b82f6, #60a5fa)",
                        }}
                      >
                        <Language sx={{ color: "white" }} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                          Location
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          Noida, Uttar Pradesh, India
                        </Typography>
                      </Box>
                    </Box>

                    {/* Availability */}
                    <Box
                      sx={{
                        mt: 2,
                        p: 3,
                        borderRadius: 2,
                        background:
                          "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(236,72,153,0.1))",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <Box sx={{ flex: { xs: "1", md: "0 0 50%" } }}>
                        <Slide in={visible} direction="left" timeout={800}>
                          <Box sx={{ width: "100%" }}>
                            <Typography
                              variant="h5"
                              sx={{ mb: 3, fontWeight: 600, color: "white" }}
                            >
                              Connect With Me
                            </Typography>

                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 2,
                              }}
                            >
                              {[
                                {
                                  icon: <GitHub sx={{ fontSize: 32 }} />,
                                  label: "GitHub",
                                  value: "github.com/yourusername",
                                  link: "https://github.com/PoojaAgrawal18",
                                  gradient:
                                    "linear-gradient(135deg, #333333, #4a5568)",
                                },
                                {
                                  icon: <LinkedIn sx={{ fontSize: 32 }} />,
                                  label: "LinkedIn",
                                  value: "linkedin.com/in/yourusername",
                                  link: "https://www.linkedin.com/in/pooja-agrawal-a6245126a/",
                                  gradient:
                                    "linear-gradient(135deg, #0077b5, #00a0dc)",
                                },
                              ].map((contact, index) => (
                                <Box key={index} sx={{ flex: "1 1 100%" }}>
                                  <Zoom
                                    in={visible}
                                    timeout={1000 + index * 100}
                                  >
                                    <Paper
                                      component="a"
                                      href={contact.link}
                                      target="_blank"
                                      onMouseEnter={() =>
                                        setHoveredContact(index)
                                      }
                                      onMouseLeave={() =>
                                        setHoveredContact(null)
                                      }
                                      sx={{
                                        p: 2.5,
                                        borderRadius: 2,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 2,
                                        textDecoration: "none",
                                        background:
                                          hoveredContact === index
                                            ? contact.gradient
                                            : "rgba(30, 41, 59, 0.5)",
                                        backdropFilter: "blur(10px)",
                                        border:
                                          "1px solid rgba(255, 255, 255, 0.1)",
                                        transition:
                                          "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                        position: "relative",
                                        overflow: "hidden",
                                        "&::before": {
                                          content: '""',
                                          position: "absolute",
                                          top: 0,
                                          left:
                                            hoveredContact === index
                                              ? 0
                                              : "-100%",
                                          width: "100%",
                                          height: "100%",
                                          background: contact.gradient,
                                          transition: "left 0.4s ease",
                                          zIndex: -1,
                                        },
                                        "&:hover": {
                                          transform: "translateX(8px)",
                                          borderColor: "transparent",
                                          boxShadow:
                                            "0 10px 30px rgba(99,102,241,0.3)",
                                        },
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          width: 56,
                                          height: 56,
                                          borderRadius: 2,
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          background:
                                            hoveredContact === index
                                              ? "rgba(255,255,255,0.2)"
                                              : "rgba(99,102,241,0.1)",
                                          color:
                                            hoveredContact === index
                                              ? "white"
                                              : "#6366f1",
                                          transition: "all 0.3s ease",
                                        }}
                                      >
                                        {contact.icon}
                                      </Box>
                                      <Box sx={{ flexGrow: 1 }}>
                                        <Typography
                                          variant="subtitle1"
                                          sx={{
                                            fontWeight: 600,
                                            color:
                                              hoveredContact === index
                                                ? "white"
                                                : "text.primary",
                                          }}
                                        >
                                          {contact.label}
                                        </Typography>
                                        <Typography
                                          variant="body2"
                                          sx={{
                                            color:
                                              hoveredContact === index
                                                ? "rgba(255,255,255,0.9)"
                                                : "text.secondary",
                                          }}
                                        >
                                          {contact.value}
                                        </Typography>
                                      </Box>
                                      <IconButton
                                        sx={{
                                          color:
                                            hoveredContact === index
                                              ? "white"
                                              : "#6366f1",
                                        }}
                                      >
                                        <ArrowForward />
                                      </IconButton>
                                    </Paper>
                                  </Zoom>
                                </Box>
                              ))}
                            </Box>
                          </Box>
                        </Slide>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </Slide>
            </Box>
            <Box
              sx={{
                flex: { xs: "1", md: "0 0 50%" },
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                gap: 2, // optional, space between multiple images
              }}
            >
              {hoveredContact !== null && (
                <Zoom in={hoveredContact !== null} timeout={400}>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    {hoveredContact === 0 ? (
                      <>
                        {/* GitHub hover images */}
                        <Box
                          sx={{
                            display: "flex",
                            gap: 6, // space between images
                            flexWrap: "wrap", // wrap if screen is small
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            component="img"
                            src={githubImg1} // first image
                            alt="GitHub Visual 1"
                            sx={{
                              width: { xs: 200, md: 600 }, // responsive width
                              borderRadius: 4,
                              boxShadow: "0 20px 50px rgba(99,102,241,0.4)",
                              transition: "all 0.3s ease",
                            }}
                          />
                          <Box
                            component="img"
                            src={githubImg} // second image
                            alt="GitHub Visual 2"
                            sx={{
                              width: { xs: 200, md: 600 }, // match first image
                              borderRadius: 4,
                              boxShadow: "0 20px 50px rgba(99,102,241,0.4)",
                              transition: "all 0.3s ease",
                            }}
                          />
                        </Box>
                      </>
                    ) : (
                      // LinkedIn hover image
                      <Box
                        component="img"
                        src={linkedinImg}
                        alt="LinkedIn Visual"
                        sx={{
                          maxWidth: 600,
                          borderRadius: 4,
                          boxShadow: "0 20px 50px rgba(99,102,241,0.4)",
                          transition: "all 0.3s ease",
                        }}
                      />
                    )}
                  </Box>
                </Zoom>
              )}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          py: { xs: 2, md: 3 },
          textAlign: "center",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          background: "#1e293b",
          px: 2,
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}
        >
          © 2026 Pooja Agrawal. Designed & Built with passion.
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
