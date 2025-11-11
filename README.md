Car Rental (MERN STACK APP)
=================

Project overview
----------------
This repository implements a Car Rental application built with the MERN stack (MongoDB, Express, React, Node). The app allows users to browse cars, create bookings, manage their bookings, and — for admin users — to add, edit and remove cars.

This README explains the technical choices used in the frontend and backend, the project structure, how the app works at a high level, and instructions to run the project locally.

Tech summary
------------
- Frontend: React + Vite, Tailwind CSS for styling, i18n support (i18next), Clerk (or similar) for authentication/localization hooks seen in `src/` files. Uses Vite dev server in `frontend/`.
- Backend: Node.js + Express, MongoDB (likely via Mongoose), Cloudinary integration for image uploads (see `config/cloudinary.js`), webhook handlers (e.g., `controllers/clerkWebhooks.js`) and API routes under `backend/routes`.

Repository layout and what each part contains
-------------------------------------------
Top-level folders:
- `backend/` — Express API server, database connection, models, controllers, middleware and routes.
	- `server.js` — entrypoint for the backend Express server.
	- `config/` — database and third-party service configuration (e.g., `mongodb.js`, `cloudinary.js`).
	- `controllers/` — business logic for routes and webhook handlers (e.g., `clerkWebhooks.js`).
	- `middleware/` — Express middlewares (auth, error handling, etc.).
	- `models/` — Mongoose schemas/models (e.g., `User.js`).
	- `routes/` — Express route definitions that map endpoints to controllers.

- `frontend/` — React single-page application built with Vite and Tailwind.
	- `src/` — app source code (components, pages, assets, localizations).
		- `components/` — reusable UI components and admin UI.
		- `pages/` — page-level views (Home, Listing, CarDetails, MyBookings, admin pages).
		- `locales/` — translation JSON files (e.g., `en.json`, `ar.json`).
		- `i18n.js` — i18n initialization.
	- `index.html`, `vite.config.js`, `tailwind.config.js` — frontend tooling and config.

Key files
---------
- `backend/server.js` — starts the API server and mounts routes.
- `backend/config/mongodb.js` — connects to MongoDB.
- `backend/config/cloudinary.js` — config for Cloudinary uploads.
- `frontend/src/main.jsx` and `frontend/src/App.jsx` — React app bootstrap and routes.

How the app works (high-level)
------------------------------
1. Frontend (React): Users browse cars provided by the backend. Auth is handled via Clerk (or similar) integration; localized UI strings come from `locales/` files. When a user starts a booking, the frontend calls the backend API.
2. Backend (Express): Receives API requests for cars, bookings, and users. It uses database models (in `models/`) to persist data in MongoDB. Images are uploaded to Cloudinary and the returned URLs stored in the DB.
3. Admin flows: Admin pages (under `frontend/src/pages/admin/`) call admin-protected backend endpoints to add or manage cars. Server-side middleware likely protects these routes.

Common flows (examples)
-----------------------
- List cars: Frontend GET /api/cars -> backend route returns car documents from MongoDB.
- Create booking: Frontend POST /api/bookings with user and car info -> backend validates, stores booking.
- Upload image: Frontend uploads images (either directly to Cloudinary or via backend proxy) -> store URL on the car document.

Local setup (quick)
-------------------
1. Backend
	 - Open a terminal and run:

			 cd backend
			 npm install

	 - Create a `.env` file in `backend/` with values described in the next section.
	 - Start backend (the exact script name may differ — check `backend/package.json`):

			 npm run dev

	 Typical dev server runs on a port like `3000` (check `server.js` or `package.json`).

2. Frontend
	 - Open another terminal and run:

			 cd frontend
			 npm install

	 - Start the dev server:

			 npm run dev

	 Vite dev server usually runs on `http://localhost:5173/` unless configured otherwise.

Environment variables (examples)
--------------------------------
Place these in `backend/.env` (names may differ in the project; check files in `backend/config`):
- MONGODB_URI — MongoDB connection string
- PORT — port for Express server (optional)
- CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET — Cloudinary credentials for uploads
- JWT_SECRET or similar — if backend issues JWTs for any custom auth

For the frontend, check `frontend/.env` or `vite.config.js` for any VITE_ prefixed env variables (e.g., public API base URL, Clerk keys).

API reference & where to look for exact routes
---------------------------------------------
I avoided inventing exact endpoints because they are defined in the code. To see exact endpoints and their request/response shapes, open `backend/routes/` and `backend/controllers/` files. Typical routes you'll find or want to look for:
- `routes/cars.js` — car CRUD and listing endpoints
- `routes/bookings.js` — create/list bookings
- `routes/users.js` — user-related endpoints (profile, admin operations)

Developer notes and next steps
------------------------------
- If you add public API docs, consider adding a `docs/` folder or inline OpenAPI (Swagger) spec.
- Add a `CONTRIBUTING.md` with developer setup steps and branch/PR workflow.
- Add basic tests for essential backend routes and a couple of React component tests.

License & requirements
----------------------
- Node.js >= 22 (as noted in the original file).

Where to look for details
-------------------------
- Backend APIs and data models: `backend/routes/`, `backend/controllers/`, `backend/models/`.
- Frontend UI, pages and components: `frontend/src/pages/`, `frontend/src/components/`.

If you'd like, I can:
- open and list actual routes found in `backend/routes/` and summarize each endpoint signature; or
- generate a quick `.env.example` for frontend and backend with exact variable names read from config files.

Completion summary
------------------
I updated this `README` to include a frontend and backend technical summary, a clear folder-structure explanation, a high-level app flow, local run steps, environment variable guidance, and suggestions for next steps. If you want, I can now scan the codebase and produce a precise `API reference` and `.env.example` automatically.

