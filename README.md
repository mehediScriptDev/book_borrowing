# MangoBookish 📚

A modern digital library platform where readers can discover, explore, and borrow books online. Built with a focus on clean UI, seamless authentication, and smooth user experience.

## 🌐 Live Demo
[mangobookish.vercel.app](https://mangobookish.vercel.app)

## 🚀 About The Project

MangoBookish started as a personal side project to explore full-stack development with Next.js and modern auth patterns. The idea was simple — build something I'd actually want to use. A clean, fast book borrowing platform that feels native and secure.

The project focuses on:
- Smooth and secure authentication flows
- Clean, responsive UI across all devices
- Fast performance with Next.js App Router
- Real-world patterns like protected routes and session management

## ✨ Features

- 🔐 Email & Google OAuth authentication via BetterAuth
- 📖 Browse and search books by title
- 🗂️ Filter books by category (Story, Tech, Science)
- 📄 Detailed book pages with availability info
- 🙋 User profile with update functionality
- 🔒 Protected routes for authenticated users
- 📱 Fully responsive on mobile, tablet, and desktop
- 🎨 Clean UI with DaisyUI + Tailwind CSS

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS + DaisyUI
- **Authentication:** BetterAuth
- **Database:** MongoDB
- **Animation:** React Spring
- **Form Handling:** React Hook Form
- **Alerts:** SweetAlert2
- **Icons:** Lucide React

## 📦 NPM Packages Used

| Package | Purpose |
|---|---|
| `better-auth` | Authentication |
| `react-hook-form` | Form management |
| `sweetalert2` | Alerts & toasts |
| `@react-spring/web` | Animations |
| `lucide-react` | Icons |
| `mongoose` | MongoDB ODM |

## 🔧 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- Google OAuth credentials

### Installation

```bash
# Clone the repo
git clone https://github.com/mehediScriptDev/book_borrowing.git

# Install dependencies
cd book_borrowing
npm install

# Set up environment variables
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file in the root:

```env
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000
MONGO_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure
src/
├── app/
│   ├── (main)/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── allBooks/
│   │   ├── bookDetails/
│   │   ├── myProfile/
│   │   └── updateProfile/
│   ├── api/auth/
│   └── components/
├── lib/
│   ├── auth.js
│   └── auth-client.js
└── middleware.js

## 📝 License

MIT License — feel free to use this project as inspiration for your own.

---

Made with ❤️ by [Mehedi](https://github.com/mehediScriptDev)