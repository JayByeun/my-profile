"use strict";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { cn } from "@/lib/utils";
// type Children = {
//   id: string;
//   title: string;
//   description?: string;
//   children?: Node;
//   tech?: string[];
// };
// type Node = {
//   id: string;
//   title: string;
//   children: Children[];
// };
// const projectData = {
//   id: "root",
//   title: "Projects",
//   children: [
//     {
//       id: "p1",
//       title: "Multiple CI/CD System",
//       description:
//         "Designed and implemented a multi-profile CI/CD pipeline management system that automates containerized workspace deployments and task execution across environments.",
//       tech: [
//         "Node.js",
//         "LitElement",
//         "MobX",
//         "Docker",
//         "Ceph",
//         "YAML",
//         "Chokidar",
//         "WebSocket",
//         "Kubernates",
//       ],
//       children: [
//         {
//           id: "p1-frontend",
//           title: "Frontend",
//           description:
//             "Built with LitElement web components and MobX for state management. The frontend provides an interactive UI to create, edit, and manage multiple CI/CD configuration profiles, rendered as YAML.",
//           tech: ["LitElement", "MobX", "Monaco Editor", "WebSocket"],
//         },
//         {
//           id: "p1-backend",
//           title: "Backend — CI/CD Execution Engine",
//           description:
//             "Developed in Node.js, integrating with Ceph for per-user workspace storage. Used Chokidar and fs to detect configuration changes and dynamically execute build/test commands inside isolated Docker containers, streaming live logs via WebSocket.",
//           tech: ["Node.js", "Ceph", "Docker", "Chokidar", "fs", "YAML Parser"],
//         },
//       ],
//     },
//     {
//       id: "p2",
//       title: "File Search Optimization System",
//       description:
//         "Engineered a high-performance file search service that reduced file generation and lookup time by over 90%. Replaced recursive bash grep scanning with an optimized pipeline using fzf and FIFO communication for safe parallel file access.",
//       tech: ["Bash", "fzf", "FIFO", "Node.js", "WebSocket"],
//       children: [
//         {
//           id: "p2-architecture",
//           title: "Architecture & Performance Design",
//           description:
//             "Implemented real-time search execution through FIFO (named pipes) ensuring non-blocking access to file trees. Used WebSocket streaming to deliver incremental results to the frontend UI.",
//           tech: ["FIFO", "WebSocket", "Stream API"],
//         },
//         {
//           id: "p2-frontend",
//           title: "Frontend — File Search Modal",
//           description:
//             "Built a responsive file search modal with live updates as results streamed from the backend, giving users instant feedback while typing queries.",
//           tech: ["LitElement", "MobX", "WebSocket"],
//         },
//       ],
//     },
//   ],
// };
// function ProjectNode({
//   node,
//   className,
// }: {
//   node: Children;
//   className: string;
// }) {
//   const [open, setOpen] = useState(true);
//   return (
//     <div className={cn("w-full p-10", className)}>
//       <div
//         className="cursor-pointer flex items-center gap-2"
//         onClick={() => setOpen(!open)}
//       >
//         <span
//           className={`${
//             node.title === "Projects" ? "text-3xl" : "text-xl"
//           } font-bold`}
//         >
//           {node.title}
//         </span>
//         {node.children && (
//           <span className="text-gray-500 text-sm p-3">
//             {open ? "[-]" : "[+]"}
//           </span>
//         )}
//       </div>
//       {node.description && (
//         <p className="text-sm text-gray-600">{node.description}</p>
//       )}
//       {node.tech && (
//         <div className="mt-1 flex flex-wrap gap-1">
//           {node.tech.map((t) => (
//             <span
//               key={t}
//               className="text-xs bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded"
//             >
//               {t}
//             </span>
//           ))}
//         </div>
//       )}
//       <AnimatePresence>
//         {open && node.children && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="border-l border-gray-300 pl-3"
//           >
//             {node.children?.map((child: Children) => (
//               <ProjectNode className="p-5" key={child.id} node={child} />
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="relative min-h-screen flex justify-center overflow-hidden group group-hover:text-white"
//     >
//       <ProjectNode node={projectData} />
//     </section>
//   );
// }
