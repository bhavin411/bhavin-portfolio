export const profile = {
  name: "Bhavin Parmar",
  role: "Android & iOS Engineer",
  tagline:
    "I build production-grade mobile apps with Kotlin Multiplatform, Jetpack Compose & SwiftUI — used by thousands every day.",
  location: "Surat, Gujarat, India",
  email: "bhavinparmar2014@gmail.com",
  phone: "+91 8200316379",
  yearsExperience: 7,
  resume: "/Bhavin_Parmar_Resume.pdf",
  photo: "/bhavin.png",
  socials: {
    linkedin: "https://www.linkedin.com/in/bhavin-parmar-47955613a/",
  },
} as const;

export const stats = [
  { label: "Years Experience", value: "7+" },
  { label: "Apps Shipped", value: "10+" },
  { label: "Active Users", value: "100K+" },
  { label: "Play / App Store Rating", value: "4.7★" },
] as const;

export const skills = [
  { name: "Kotlin", category: "language" },
  { name: "Swift", category: "language" },
  { name: "Java", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "Jetpack Compose", category: "framework" },
  { name: "SwiftUI", category: "framework" },
  { name: "Kotlin Multiplatform", category: "framework" },
  { name: "Compose Multiplatform", category: "framework" },
  { name: "Coroutines & Flow", category: "framework" },
  { name: "Ktor", category: "framework" },
  { name: "Room", category: "framework" },
  { name: "SQLDelight", category: "framework" },
  { name: "MVVM", category: "architecture" },
  { name: "Clean Architecture", category: "architecture" },
  { name: "REST APIs", category: "backend" },
  { name: "WebSockets", category: "backend" },
  { name: "Firebase", category: "backend" },
  { name: "Git", category: "tools" },
  { name: "Gradle", category: "tools" },
  { name: "Fastlane", category: "tools" },
  { name: "Figma", category: "tools" },
] as const;

export const skillGroups = [
  {
    title: "Mobile",
    accent: "violet",
    items: ["Jetpack Compose", "SwiftUI", "Kotlin Multiplatform", "Compose Multiplatform", "Android SDK"],
  },
  {
    title: "Languages",
    accent: "cyan",
    items: ["Kotlin", "Swift", "Java", "TypeScript"],
  },
  {
    title: "Architecture",
    accent: "pink",
    items: ["MVVM", "Clean Architecture", "Modularization", "Dependency Injection"],
  },
  {
    title: "Backend & APIs",
    accent: "lime",
    items: ["REST APIs", "WebSockets", "Ktor", "Firebase", "GraphQL"],
  },
] as const;

export const experiences = [
  {
    company: "Tixza Digital Solutions Pvt Ltd",
    role: "Project Manager / Senior Android Developer",
    location: "Surat, Gujarat",
    period: "Apr 2019 — Present",
    highlights: [
      "Lead end-to-end development of Android & iOS apps using Kotlin Multiplatform and Jetpack Compose.",
      "Own the full mobile lifecycle — requirements, architecture, delivery, monitoring.",
      "Ship production apps used by thousands of users in sports, wellness and hospitality.",
      "Architect real-time features with WebSockets for live sports scoring.",
      "Mentor a team of developers; run code reviews and define engineering standards.",
    ],
  },
  {
    company: "Goldenmace IT Solutions",
    role: "Android Developer Intern",
    location: "Navsari, Gujarat",
    period: "Apr 2018 — Apr 2019",
    highlights: [
      "Built Android applications using Java and the Android SDK.",
      "Implemented UI layouts and core application features from spec.",
      "Shipped demo apps to deepen platform knowledge and earn full-time conversion.",
    ],
  },
] as const;

// Descriptions: Sportish is verbatim from the App Store. The other three are
// written in Play Store voice — replace with the exact store copy any time.
export const projects = [
  {
    title: "Sportish",
    subtitle: "Live Sports Scores",
    description:
      "Your ultimate sports companion — made for fans who crave speed, accuracy and smart match data. Real-time live scores, detailed scorecards & match summaries, plus smart analytics for deeper insights. Fast, informative and always on point.",
    tags: ["KMP", "Jetpack Compose", "SwiftUI", "WebSockets", "Ktor"],
    accent: "violet",
    featured: true,
    links: {
      android: "https://play.google.com/store/apps/details?id=com.sportish&hl=en_IN",
      ios: "https://apps.apple.com/us/app/sportish-io/id6743957862",
    },
  },
  {
    title: "FracteQ360",
    subtitle: "Fitness & Wellness",
    description:
      "A complete 360° fitness platform built for members and coaches. Track workouts, log progress and body composition, follow personalised training plans and stay connected with your coach — all from one polished, native Android experience.",
    tags: ["Android", "Jetpack Compose", "Clean Architecture", "REST"],
    accent: "cyan",
    featured: true,
    links: {
      android: "https://play.google.com/store/apps/details?id=com.fracteq.app&hl=en_IN",
    },
  },
  {
    title: "HerbalDuty",
    subtitle: "Ayurvedic Commerce",
    description:
      "Pure Ayurveda, delivered. Browse a curated catalog of herbal products, manage addresses and orders, and check out securely in seconds. Built to feel fast and trustworthy even on low-end devices across tier-2 and tier-3 markets.",
    tags: ["Android", "Kotlin", "MVVM", "Razorpay"],
    accent: "pink",
    featured: false,
    links: {
      android: "https://play.google.com/store/apps/details?id=com.herbalduty",
    },
  },
  {
    title: "Onyx Vacation Club",
    subtitle: "Hospitality & Membership",
    description:
      "Plan, book and manage your luxury vacations in one place. Discover member resorts, view your benefits, request reservations and chat with the concierge — a polished companion app for a real-world hospitality brand.",
    tags: ["Android", "Kotlin", "WebSockets", "Firebase"],
    accent: "lime",
    featured: false,
    links: {
      android: "https://play.google.com/store/apps/details?id=com.onyxvacationclubnew",
    },
  },
] as const;

export const education = [
  {
    degree: "Bachelor of Engineering — Computer Engineering",
    school: "GIDC Degree Engineering College, Navsari",
    period: "2015 — 2019",
  },
] as const;

export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
