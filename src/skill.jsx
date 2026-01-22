import { Box, Typography } from "@mui/material";

// Import SVGs (make sure these files exist in ./assets/svg/)
import ReactIcon from "./assets/svg/react.svg";
import TypeScriptIcon from "./assets/svg/typescript-icon.svg";
import CssIcon from "./assets/svg/css-3.svg";
import NodeIcon from "./assets/svg/nodejs.svg";
import MySqlIcon from "./assets/svg/mysql.svg";
import GitIcon from "./assets/svg/github-icon.svg";
import NestJs from "./assets/svg/nestjs.svg";
import Html from "./assets/svg/html-5.svg";
import Express from "./assets/svg/express.svg";
import Redis from "./assets/svg/redis.svg";


const skills = [
  { name: "React / Next.js", icon: ReactIcon },
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "CSS / Tailwind", icon: CssIcon },
  { name: "Node.js", icon: NodeIcon },
  { name: "MySQL", icon: MySqlIcon },
  { name: "Git / GitHub", icon: GitIcon },
  { name: "NestJS", icon: NestJs },
  { name: "HTML5", icon: Html },
  { name: "Express", icon: Express },
  { name: "Redis", icon: Redis },
];

export default function SkillsSection() {
  return (
    <Box
      sx={{
        mt: 6,
        overflow: "hidden",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 6,
          width: "max-content",
          animation: "marquee 20s linear infinite",
          "@keyframes marquee": {
            "0%": { transform: "translateX(0%)" },
            "100%": { transform: "translateX(-50%)" },
          },
        }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              px: 3,
              py: 1,
              borderRadius: 20,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(6px)",
              whiteSpace: "nowrap",
            }}
          >
            <Box
              component="img"
              src={skill.icon}
              alt={skill.name}
              sx={{ width: 20, height: 20 }}
            />
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                color: "text.secondary",
              }}
            >
              {skill.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
