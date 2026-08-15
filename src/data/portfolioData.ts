import { PortfolioData } from '../types';

/**
 * ============================================================================
 * CENTRALIZED PERSONAL PORTFOLIO CONFIGURATION
 * ============================================================================
 * 
 * Instructions:
 * - Update your details directly in this file.
 * - Replace the placeholder strings (e.g. "[MY FULL NAME]") with your actual details.
 * - Any section in the portfolio website will automatically update across the entire app.
 * - Do not fabricate any information. Empty lists or placeholders will render clean,
 *   tasteful placeholder states in the UI.
 */

export const portfolioData: PortfolioData = {
  // 1. PERSONAL INFORMATION
  personal: {
    fullName: "Karangula Basanth",
    shortName: "Basanth",
    profilePhoto: "", // Leave empty for avatar initials or provide a URL/path (e.g., "/profile.jpg")
    currentRole: "2nd Year Computer Science and Engineering Student",
    shortTagline: "Passionate CSE student exploring software engineering, algorithms, and web technologies",
    aboutMe: "My journey from a school student to a B.Tech 2nd year student.",
    resumeUrl: "", // Provide path to resume PDF (e.g., "/resume.pdf" or Google Drive link)
  },

  // ABOUT ME DETAILED INFORMATION
  aboutDetails: {
    introduction: "I am Karangula Basanth, a 2nd-year Computer Science & Engineering undergraduate with a strong curiosity for software engineering and algorithmic problem solving. I focus on understanding foundational concepts deeply and translating them into functional, reliable code.",
    careerAspirations: "Aspiring to work as a Software Engineer where I can build impactful software, collaborate with engineering teams, and continuously expand my technical capabilities through practical challenges.",
    currentlyLearning: [
      "Data Structures & Algorithms (Competitive Problem Solving)",
      "Full-Stack Web Application Development",
      "Database Management Systems & SQL",
      "Object-Oriented Design & Clean Code Practices"
    ],
    learningJourney: [
      {
        phase: "Year 1 • Foundations",
        title: "Programming Basics & Logic",
        description: "Built strong foundations in basic programming concepts, computational logic, and problem-solving fundamentals.",
      },
      {
        phase: "Year 2 (Current) • Core CS",
        title: "Data Structures & Modern Web Dev",
        description: "Actively studying linear & non-linear data structures, algorithmic time/space analysis, and hands-on full-stack development.",
      },
      {
        phase: "Future Goal • Industry Readiness",
        title: "Software Engineering & Systems",
        description: "Aiming to build end-to-end full-stack projects, contribute to collaborative codebases, and pursue software engineering internships.",
      },
    ],
  },

  // 2. CONTACT INFORMATION
  contact: {
    phoneNumber: "+91 9573421392",
    email: "basanth9d@gmail.com",
    location: "Telangana, India",
  },

  // 3. SOCIAL / CODING PROFILES
  social: {
    github: "https://github.com/KARANGULABASANTH",
    linkedin: "https://www.linkedin.com/in/karangula-basanth-86263b3a5",
    hackerrank: "https://www.hackerrank.com/profile/basanth9d",
    leetcode: "https://leetcode.com/u/KARANGULA_BASANTH/",
    codechef: "https://www.codechef.com/users/k_basanth",
    codeforces: "https://codeforces.com/profile/K_Basanth",
    otherProfiles: [
      // Optional: Add other platform profiles here as you need
      // { name: "GeeksforGeeks", url: "[MY GFG URL]", description: "Practice Profile" }
    ],
  },

  // 4. EDUCATION
  education: {
    current: {
      degree: "B.Tech",
      branch: "Computer Science and Engineering",
      year: "2nd Year",
      college: "BV Raju Institute of Technology",
      university: "JNTUH",
      startYear: "[YEAR]",
      expectedGraduation: "[YEAR]",
      highlights: [
        "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Computer Organization, Database Management Systems",
      ],
    },
    previous: {
      school10th: {
        name: "Pallavi Model School Alwal",
        board: "CBSE",
        year: "[YEAR]",
        score: "88%",
      },
      intermediate12th: {
        name: "Excellencia Junior College",
        stream: "Science / MPC (Maths, Physics, Chemistry)",
        board: "TSBIE / State Board",
        year: "[YEAR]",
        score: "960 / 1000",
      },
      otherAcademic: [
        // Add additional academic qualifications or milestones if required
      ],
    },
  },

  // 5. CERTIFICATES & ACCREDITATIONS
  certificates: [
    {
      id: "cert-jntuh-hackfusion-2026",
      name: "HACKFUSION 2026 — International Level Hackathon & Project Expo",
      issuingOrganization: "ECE Dept, JNTUH & Brainovision Solutions (AICTE Approved)",
      date: "03 - 04 Apr, 2026",
      category: "International Hackathon",
      badgeText: "International Hackathon",
      certificateImageOrPdf: "/certificates/jntuh_hackfusion_2026.jpg",
      description: "Successfully participated in the prestigious 'HACKFUSION 2026' International Level Hackathon & Project Expo held at Jawaharlal Nehru Technological University Hyderabad (JNTUH), in collaboration with Brainovision Solutions.",
    },
    {
      id: "cert-hackerrank-python",
      name: "Python (Basic) Skill Certification",
      issuingOrganization: "HackerRank",
      date: "01 Jul, 2026",
      credentialId: "5783F19504FC",
      category: "Skill Certification",
      badgeText: "Verified Skill",
      certificateImageOrPdf: "/certificates/hackerrank_python_cert.jpg",
      description: "Demonstrated proficiency in Python programming foundations including data structures, logic formulation, functions, and algorithmic problem solving through HackerRank skill assessment.",
    },
    {
      id: "cert-cbb-coding-league",
      name: "CBB Weekly Coding League",
      issuingOrganization: "BVRIT / CB² / Computer Society of India",
      date: "01 Aug, 2026",
      credentialId: "CWCL-AUG26-0104",
      certificateUrl: "https://cwcl.cbbbvrit.org/verify",
      category: "Coding League Participation",
      badgeText: "Participation",
      certificateImageOrPdf: "/certificates/cbb_coding_league.jpg",
      description: "Awarded Certificate of Participation for actively competing in the CBB Weekly Coding League held at BVRIT in association with Computer Society of India.",
    },
    {
      id: "cert-dhruva-acm-coding",
      name: "Dhruva Coding Contest — Rank 5 Finalist",
      issuingOrganization: "BVRIT ACM Student Chapter",
      date: "Aug 2026",
      scoreOrRank: "Rank 5 (885 Pts) — Top 15 Finalist",
      category: "Coding Contest Standing",
      badgeText: "Top 5 Finalist",
      certificateImageOrPdf: "/certificates/dhruva_acm_standings.jpg",
      description: "Achieved 5th place with 885 points with team 'SYNTAX SQUAD' in the competitive collegiate coding contest powered by the BVRIT ACM Student Chapter.",
    },
    {
      id: "cert-codechef-bronze-badge",
      name: "Problem Solver Bronze Badge (50+ Problems)",
      issuingOrganization: "CodeChef",
      date: "2026",
      category: "Competitive Platform Badge",
      badgeText: "Bronze Badge",
      scoreOrRank: "50+ Problems Solved",
      certificateImageOrPdf: "/certificates/codechef_bronze_badge.jpg",
      description: "Earned the Problem Solver Bronze Badge milestone on CodeChef for successfully solving 50+ algorithmic and competitive programming problems.",
    },
  ],

  // 6. INTERESTS
  interests: [
    "Programming",
    "Software Development",
    "Problem Solving",
    "Web Development",
    "Artificial Intelligence",
  ],

  // 7. SKILLS & PROGRAMMING LANGUAGES
  skills: {
    programmingLanguages: [
      "Python",
      "C",
      "Java",
    ],
  },

  // 8. PROJECTS
  // Note: Add your projects here. No fake projects are created.
  projects: [
    // Example template ready for your projects:
    // {
    //   id: "project-1",
    //   name: "[PROJECT NAME]",
    //   description: "[Brief description of what the project does and the problem it solves.]",
    //   technologies: ["[Tech 1]", "[Tech 2]", "[Tech 3]"],
    //   features: [
    //     "[Key Feature 1]",
    //     "[Key Feature 2]",
    //     "[Key Feature 3]"
    //   ],
    //   githubUrl: "[GITHUB REPOSITORY URL]",
    //   liveDemoUrl: "[LIVE DEMO URL]",
    //   dateOrYear: "[YEAR]",
    // }
  ],
};
