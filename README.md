
# GameTix — Sports Event Ticketing App

GameTix is a modern React-based web application that allows users to browse, filter, and purchase tickets for various sports events such as football, basketball, and golf.  
It connects to a local `db.json` backend (via JSON Server) to store and manage event data dynamically.

---

##  Features

1 **Event Listings** – Displays available sports events dynamically.  
2 **Search & Filter** – Filter by sport type or ticket price range.  
3 **Live Ticket Updates** – Ticket count reduces automatically after every purchase.  
4 **Purchase Logging** – Every ticket purchase is recorded in the database.  
5 **Dynamic Event Details** – Click any event to view its detailed information.  
6 **Clean UI & Responsive Design** – Styled with modern, mobile-friendly CSS.  
7 **Modular Components** – Built with reusable React components for scalability.

---

##  Components Overview

| Component | Description |
|------------|-------------|
| **Navbar** | Contains the app title, search bar, and reset button. |
| **Sidebar** | Displays filters (sport type, price range) and selected event details. |
| **EventCard** | Shows each event with image, title, price, and ticket status. |
| **EventDetails** | Displays selected event information under the filters. |
| **Footer** | Simple footer with credits or additional info. |

---

##  Technologies Used

- **React.js (Frontend Framework)**
- **JavaScript (ES6+)**
- **CSS3 (Custom Styling)**
- **JSON Server (Mock Backend)**
- **Fetch API** for CRUD operations
- **Vercel** (Optional hosting)

---


---

##  Setup Instructions

### 1️ Clone the repository

git@github.com:OgechaEnock/GameTix-App.git
cd gametix

### 2️ Install dependencies
 npm install
 
### 3️ Start JSON Server
 npm install -g json-server

 Then run;

 npx json-server --watch db.json --port 3001

 ### 4️ Run the React App
  npm start
  
