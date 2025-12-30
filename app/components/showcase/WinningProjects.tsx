"use client";

import { motion } from "framer-motion";
import { Trophy, ExternalLink, Github } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";

const topProjects = [
  {
    rank: 1,
    team: "Pixel Pioneers",
    project: "EcoQuest",
    description: "An environmental education game where players solve puzzles to restore ecosystems. Features procedurally generated levels and a compelling narrative about climate action.",
    techStack: ["Unity", "C#", "Photoshop"],
    color: "from-yellow-400 to-amber-500",
    medal: "🥇",
  },
  {
    rank: 2,
    team: "Code Crusaders",
    project: "Neural Maze",
    description: "A puzzle platformer that teaches basic AI concepts through gameplay. Players train virtual agents to navigate increasingly complex mazes.",
    techStack: ["Godot", "GDScript", "Aseprite"],
    color: "from-gray-300 to-gray-400",
    medal: "🥈",
  },
  {
    rank: 3,
    team: "Binary Beats",
    project: "Rhythm Rescue",
    description: "A rhythm game combined with tower defense mechanics. Defend your base by hitting notes in time with the beat.",
    techStack: ["Phaser.js", "TypeScript", "FL Studio"],
    color: "from-amber-600 to-amber-700",
    medal: "🥉",
  },
];

const otherProjects = [
  { team: "Game Gurus", project: "Starlight Express", techStack: ["Unity", "C#"] },
  { team: "Bit Builders", project: "Dungeon Dash", techStack: ["Godot", "GDScript"] },
  { team: "Logic Lords", project: "Mind Merge", techStack: ["JavaScript", "Canvas"] },
  { team: "Syntax Squad", project: "Cyber Chase", techStack: ["Pygame", "Python"] },
  { team: "Debug Dynasty", project: "Pixel Patrol", techStack: ["Love2D", "Lua"] },
];

export default function WinningProjects() {
  return (
    <SectionWrapper dark>
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-jetbrains-mono)] text-electric-cyan text-sm uppercase tracking-wider"
        >
          The Winners
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-storm-white mt-4"
        >
          Winning Projects
        </motion.h2>
      </div>

      {/* Top 3 Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {topProjects.map((project, index) => (
          <motion.div
            key={project.team}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className={`relative glass rounded-2xl p-6 ${
              project.rank === 1 ? "lg:-mt-4 lg:mb-4 border-2 border-warning-amber/30" : ""
            }`}
          >
            {/* Rank badge */}
            <div className="absolute -top-3 left-6 text-3xl">
              {project.medal}
            </div>

            {/* Trophy icon for 1st place */}
            {project.rank === 1 && (
              <div className="absolute -top-3 right-6">
                <Trophy className="w-6 h-6 text-warning-amber" />
              </div>
            )}

            <div className="mt-4">
              <p className="text-subtle-gray text-sm mb-1">{project.team}</p>
              <h3 className={`font-[family-name:var(--font-space-grotesk)] text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-3`}>
                {project.project}
              </h3>
              <p className="text-subtle-gray text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-ocean-depth rounded-md text-electric-cyan"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <button className="flex items-center gap-1 text-sm text-subtle-gray hover:text-electric-cyan transition-colors">
                  <ExternalLink className="w-4 h-4" /> View Project
                </button>
                <button className="flex items-center gap-1 text-sm text-subtle-gray hover:text-electric-cyan transition-colors">
                  <Github className="w-4 h-4" /> Source
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other projects grid */}
      <div className="mt-12">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-storm-white mb-6 text-center">
          Honorable Mentions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.team}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.05 }}
              className="glass rounded-xl p-4 hover:border-electric-cyan/30 transition-colors"
            >
              <p className="text-subtle-gray text-xs mb-1">{project.team}</p>
              <h4 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-storm-white mb-2">
                {project.project}
              </h4>
              <div className="flex flex-wrap gap-1">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs text-electric-cyan">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
