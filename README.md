# 🚌 Shuttle Management System - Frontend

A smart and responsive frontend interface for managing shuttle bookings on a university campus. This React app connects to a secure Node.js backend and allows both users and admins to interact with the system.

🔗 **Backend Repo**: [Shuttle Management System - Backend](https://github.com/Khushi1620/Shuttle_Management_System)

---

## 🚀 Features

### ✅ User Features
- Register, Login, Logout
- Update/View Profile
- Book Trips (select shuttle, date, route)
- Cancel Trips (auto refund)
- View Trip History
- Wallet: View & Recharge

### ✅ Admin Panel
- View all Users
- Manage Routes/Shuttles (Add, Update, Delete)
- Recharge User Wallets
- View All Bookings

---

## ⚙️ Tech Stack

| Layer     | Technology              |
|-----------|--------------------------|
| Frontend  | React.js, Axios          |
| Styling   | Tailwind CSS / CSS       |
| State Mgmt| React Context API / Redux|
| Auth      | JWT (via Backend)        |
| API       | Connected to Express.js  |

---

📦 Folder Structure
shuttle-management-frontend/
├── public/
│   └── index.html
├── src/
│   ├── assets/                   # Static images, icons, fonts, etc.
│   ├── features/                 # Modular feature-based folders
│   │   ├── authentication/
│   │   ├── user/
│   │   ├── admin/
│   │   ├── booking/
│   │   ├── route/
│   │   ├── shuttle/
│   │   ├── trip/
│   │   ├── wallet/
│   │   ├── utilities/
│   │   └── utilityadmin/
│   ├── responsiveCSS/          # Custom responsive styling
│   │   └── responsive.css
│   ├── App.css                  # Global component styling
│   ├── App.jsx                  # Root component with routing
│   ├── index.css                # Base styles
│   └── main.jsx                 # Vite entry point (or index.js for CRA)
├── .env                         # Environment variables
├── package.json                 # Project dependencies & scripts
└── README.md                    # Project documentation

