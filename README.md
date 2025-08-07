# 🚀 CoffeeStore Client

A modern, responsive React & Vite front-end for **Brew Haven**, a Coffee Store web application. Seamlessly integrated with backend APIs to manage coffee items and user authentication.

---

## 🌟 Features

- 🚪 **Sign In / Sign Up / Auth Flow**  
  User registration and login with Firebase authentication or custom API integration.

- ☕ **Add • View • Update Coffee Items**  
  💻 Admin interface for managing coffee listings (only authenticated users).

- 📋 **User Management**  
  View and delete users from within the client application.

- 📱 **Fully Responsive**  
  Designed with Tailwind CSS for great experience on mobile, tablet, and desktop.

- ✅ **Form Validation & Alerts**  
  Interactive UI with SweetAlert2 confirmations and error handling.

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

🤝 Contributing
Contributions are welcome! Please follow:

✨ Feature branch workflow (e.g., git checkout -b feature/signup-form)

✅ Code style aligned with Tailwind utility first

📖 Provide clear commit messages and PR descriptions

You can fork the repo or open an issue to start collaborating.

🧠 Tips & Tricks
After signup/login, last sign-in timestamp is patched via a /users PATCH API.

Make sure your Express backend runs at http://localhost:5000 for API calls to work.

If you pull updates, npm install again to sync dependencies.

📄 License
This project is open-sourced under the MIT License—feel free to use and improve!

Enjoy contributing or using this Coffee Store client — Brew beautifully! ☕✨
