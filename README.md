# ☕ Coffee Store - React Firebase CRUD Application

A modern full-stack Coffee Store management system built with **React**, **Express.js**, **MongoDB**, and **Firebase**. It allows users to view, add, update, and delete coffee items in a beautiful and responsive interface.

### 🔗 Live Website  
Click Now👉 [https://coffee-store-9394b.web.app](https://coffee-store-9394b.web.app)

---
---

##  Features

## 🚀 Features 🌟

- ✅ Create / Read / Update / Delete (CRUD) for coffee items
- 🔐 Firebase Authentication (Email/Password based)
- 📦 MongoDB database integration
- 📂 REST API built with Express.js
- 📱 Responsive UI using Tailwind CSS
- 🔄 Data fetching with React hooks
- 🔁 Secure Realtime Update with React Router
- 🔄 Image upload support with server storage
- ✨ Toast notifications for user feedback
- 🔥 Firebase Hosting

---

## 🧱 Tech Stack

| Layer         | Stack                                  |
|---------------|----------------------------------------|
| Frontend      | React (with React Router v6, Context) |
| Build Tool    | Vite                                   |
| Styling       | Tailwind CSS + DaisyUI components     |
| Notifications | SweetAlert2                            |
| Backend API   | Express + MongoDB                      |
| Auth          | Firebase auth or custom AuthProvider   |

---


## ⚙️ Installation & Setup

1. **Clone the repository**  
   ```bash
   git clone https://github.com/Imran775-CT/v1-coffee-store-client-new.git

   
   🚧 Folder Structure
/
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable UI components (Header, SignUp, Users, etc.)
│   ├── providers/           # Auth context & provider
│   ├── firebase/            # Firebase setup (if used)
│   ├── Home.jsx             # Home landing page
│   ├── main.jsx             # App entry point
│   └── index.css            # TailwindCSS imports
├── package.json
└── vite.config.js
🧩 Usage Examples
Add a new coffee
Accessible via “Add Coffee” navigation route.

##🧩 Update coffee
Update item details from the coffee listing via the update route (/updateCoffee/:id).

⚙️ Manage users
Navigate to Users route to list and delete users.

🤝  Contributing : 
     -Contributions are welcome! Please follow:

    ✨   Feature branch workflow (e.g., git checkout -b feature/signup-form)

    ✅  Code style aligned with Tailwind utility first

    📖  Provide clear commit messages and PR descriptions

         You can fork the repo or open an issue to start collaborating.

    🧠  Tips & Tricks
        After signup/login, last sign-in timestamp is patched via a /users PATCH API.

        Make sure your Express backend runs at http://localhost:5000 for API calls to work.

        If you pull updates, npm install again to sync dependencies.

📡 Backend API
Backend repository: v1-coffee-store-server-new
Make sure it's running before using the frontend.

🙋‍♂️ Author
Imran Hossain – Developer Imran
🎓 Programming Hero Learner | MERN Stack Developer | Passionate about full-stack development.

📄 License
This project is open-sourced under the MIT License—feel free to use and improve!

Enjoy contributing or using this Coffee Store client — Brew beautifully! ☕✨

⭐️ If you like this project, consider giving it a star on GitHub!
