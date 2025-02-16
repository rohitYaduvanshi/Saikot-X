<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Prisma-black?style=for-the-badge&logoColor=white&logo=prisma&color=2D3748" alt="prisma" />
  </div>

  <h1 align="center">Anonymous Reporting App</h1>
  <h3 align="center">🚀 A Project Built for DoubleCodeSlash 3.0 Hackathon 🚀</h3>
   
   <div align="center">
     <strong>A secure and robust platform for anonymous incident reporting.</strong>
   </div>
</div>

---

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Environment Setup](#environment)
6. 🚀 [Deployment](#deployment)

## 🤖 Introduction

Developed during the **DoubleCodeSlash 3.0 Hackathon**, this cutting-edge anonymous reporting system is built using Next.js 14. The platform ensures complete anonymity and security while reporting incidents.

## ⚙️ Tech Stack

- **Next.js 14** - High-performance framework
- **TypeScript** - Type-safe development
- **Prisma with Neon Database** - Scalable database
- **NextAuth.js** - Secure authentication
- **Tailwind CSS** - Modern UI design
- **React Hook Form** - Efficient form handling
- **Gemini AI** - AI-powered insights
- **BCrypt** - Secure password encryption

## 🔋 Features

✅ Secure anonymous reporting<br>
✅ End-to-end encryption<br>
✅ AI-powered insights using Gemini AI<br>
✅ Seamless authentication with NextAuth.js<br>
✅ Modern UI with Tailwind CSS<br>
✅ Scalable database with Prisma & NeonDB

## 🤸 Quick Start

**Prerequisites**

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

**Installation**

```bash
# Clone the repository
git clone <your-repo-url>
cd anonymous-reporting-system

# Install dependencies
npm install

# Set up the database
npx prisma generate
npx prisma db push

# Start the development server
npm run dev
```

## 🕸️ Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
NEXT_PUBLIC_MAPBOX_API_KEY=your-mapbox-key
DATABASE_URL=postgresql:your-database-url
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000/api/auth"
GEMINI_API_KEY=your-gemini-api-key
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your-mapbox-access-api-key
```

## 🚀 Deployment

Easily deploy your application on **[Vercel](https://vercel.com):**

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Configure the environment variables
4. Deploy!

## 🤝 Contributing

We welcome contributions! Read our [Contributing Guidelines](CONTRIBUTING.md) before you begin.

## 🏆 Hackathon Recognition

This project was proudly developed during the **DoubleCodeSlash 3.0 Hackathon**. It showcases the power of modern web technologies in building secure and scalable platforms.

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
