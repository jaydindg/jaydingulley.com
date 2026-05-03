import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Jaydin",
  lastName: "Gulley",
  displayName: "Jaydin Gulley",
  username: "jaydindg",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Homelab Learner",
    "Strong with React",
    "Full-Stack Focus",
  ],
  address: "St. Louis, Missouri, USA",
  phoneNumber: "KzEgKDYxOCkgNDcwLTkzMjk=", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "amF5ZGluLmd1bGxleUBvdXRsb29rLmNvbQ==", // base64 encoded
  website: "https://jaydingulley.me",
  jobTitle: "Full-Stack Developer",
  jobs: [
    {
      title: "Full-Stack Developer",
      company: "Feathermark.io",
      website: "https://www.feathermark.io",
      experienceId: "feathermarkio",
    },
    {
      title: "Founder",
      company: "Feathermark.io",
      website: "https://feathermark.io",
      experienceId: "feathermark",
    },
  ],
  about: `
- Full-Stack Developer with 4+ years of experience, most familiar with with the React.js / Next.js ecosystem - dabbling with Svelte + Phoenix (Elixir).
- Passionate about learning the ins/outs of technologies and developing websites for clients and myself. 
- Creator of [jaydingulley.me](https://github.com/jaydindg/jaydingulley.me), [feathermark.io](https://www.feathermark.io) ($15k+ facilitated in donations for non-profits), and more websites for clients.
`,
  avatar: "https://assets.jaydingulley.me/images/jaydindg-avatar-ghibli.webp",
  ogImage:
    "https://assets.jaydingulley.me/images/screenshot-og-image-dark.png?v=8",
  namePronunciationUrl: "https://assets.chanhdai.com/audio/chanhdai.mp3",
  timeZone: "America/Chicago",
  keywords: [
    "jaydindg",
    "jaydingulley",
    "jaydin gulley",
    "iamjaydindg",
    "quaric",
    "zadark",
    "Jaydin Gulley",
  ],
  dateCreated: "2026-05-03", // YYYY-MM-DD
}
