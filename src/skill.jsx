import { Box, Container, Typography } from "@mui/material";

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

export default function SkillsSection() {
  const flatSkills = skills.flatMap((group) => group.items);

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 3, md: 4 },
        background: "rgba(99, 102, 241, 0.02)",
        overflow: "hidden",
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

        {[1, 2, 3].map((row) => (
          <Box
            key={row}
            sx={{
              display: "flex",
              overflow: "hidden",
              mt: row === 1 ? 0 : 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 6,

                animation:
                  row === 2
                    ? "marqueeRight 22s linear infinite"
                    : "marqueeLeft 20s linear infinite",

                "@keyframes marqueeLeft": {
                  "0%": { transform: "translateX(0%)" },
                  "100%": { transform: "translateX(-50%)" },
                },

                "@keyframes marqueeRight": {
                  "0%": { transform: "translateX(-50%)" },
                  "100%": { transform: "translateX(0%)" },
                },
              }}
            >
              {[...flatSkills, ...flatSkills].map((skill, index) => (
                <Box
                  key={`${row}-${index}`}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minWidth: 100,
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(236,72,153,0.2))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 5px 20px rgba(99,102,241,0.2)",
                      mb: 1,
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.2)",
                      },
                    }}
                  >
                    <Typography sx={{ color: "#6366f1", fontWeight: 700 }}>
                      {skill.name[0]}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    {skill.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
}
