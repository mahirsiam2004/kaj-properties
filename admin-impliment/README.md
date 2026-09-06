# Admin Panel Implementation

Standalone admin dashboard for managing website updates/posts. Works with any React project (CRA, Vite, Next.js).

## Features

- Login/logout with session persistence
- Create, read, update, delete posts (CRUD)
- Image upload via IMGBB API
- Change password
- Dark theme UI
- MongoDB database
- Express.js REST API

## Stack

- **Frontend:** React (pure CSS, no Tailwind needed)
- **Backend:** Express.js + Node.js
- **Database:** MongoDB (Mongoose)
- **Image Hosting:** IMGBB API

## Quick Setup

### 1. Install dependencies

```bash
cd admin-impliment
npm install
```

### 2. Configure environment

The `.env` file is pre-configured with your credentials:

```
MONGODB_URI=mongodb+srv://abimperioinfo_db_user:70kaFECcbS6iXpBy@ab-imperio.ea0rjs0.mongodb.net/kazproperties?retryWrites=true&w=majority
IMGBB_API_KEY=837352934eb053d32ea0e4d9ac7da4ba
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
PORT=5000
```

### 3. Start the server

```bash
npm run server
```

Server runs on `http://localhost:5000`.

### 4. Use in your React project

Copy `src/AdminPage.jsx` and `src/AdminPage.css` into your React project, then:

```jsx
import AdminPage from './AdminPage';

// In your router
<Route path="/admin" element={<AdminPage />} />
```

Set the API URL in your React app's `.env`:

```
REACT_APP_API_URL=http://localhost:5000
```

## Default Login

- **Username:** `admin`
- **Password:** `admin123`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | Login |
| PUT | `/api/auth/change-password` | Change password |
| GET | `/api/updates` | List all updates |
| POST | `/api/updates` | Create update |
| PUT | `/api/updates/:id` | Update post |
| DELETE | `/api/updates/:id` | Delete post |
| GET | `/api/health` | Health check |

## File Structure

```
admin-impliment/
├── .env                      # Environment variables (mongo, API keys)
├── package.json              # Dependencies
├── server/
│   ├── index.js              # Express server entry
│   ├── lib/
│   │   └── mongodb.js        # MongoDB connection
│   ├── models/
│   │   └── Update.js         # Mongoose schema
│   └── routes/
│       ├── auth.js           # Auth routes
│       └── updates.js        # CRUD routes
├── src/
│   ├── index.js              # Export entry
│   ├── AdminPage.jsx         # React component
│   ├── AdminPage.css         # Styles (standalone, no Tailwind)
│   └── .env.example          # Frontend env template
└── README.md
```
