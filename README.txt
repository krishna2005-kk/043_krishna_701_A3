
# Assignment Solution (MSc.It) - ZIP package

This archive contains three main parts:
1) `cdn_components` - two HTML files using React via CDN (no build tools).
2) `vite-react-app` - A Vite React app scaffold with Bootstrap and React Router. Contains components demonstrating:
   - Function components, conditional rendering, lists, nested components & children (containment).
   - Forms using useState and useRef.
   - Digital clock using useState and useEffect.
   - Live form validation and live data filtering.
   - Frontend UI for CRUD operations (expects Express API at /api/employees).
3) `react-employee-frontend` - A Vite React frontend for **Problem 5** (employee site) with:
   - Login (JWT) (expects POST /api/auth/login returning {token}).
   - Profile page (GET /api/employees/profile with Authorization header).
   - Leave application (GET/POST /api/leaves with Authorization header).
   Note: This folder contains only the frontend. A backend (Express + Mongoose) is required for full functionality. Fallback sample data is used when backend is not available.

## How to use

### A) CDN files (no node required)
Open the files in `cdn_components` with a browser:
- hello_component.html
- counter_form.html

### B) Vite React App (vite-react-app)
1. Open terminal in `vite-react-app` folder.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the dev server (Vite) and open the URL shown in terminal.
4. Use the navigation links to explore components and functionality.
5. For CRUD page: the UI will attempt to call `/api/employees`. You can either run your Express backend on the same host and port (or use a proxy) or adjust the fetch URLs in `src/components/CrudFrontend.jsx` to point to your API.

### C) React Employee Frontend (react-employee-frontend)
1. Open terminal in `react-employee-frontend` folder.
2. Run `npm install`.
3. Run `npm run dev`.
4. The app expects an Express backend providing JWT login and employee endpoints. If backend not present, the app will use sample fallback data but login will fail (alert shown).

## Notes & Backend expectations (brief)
For full, end-to-end operation you need an Express + Mongoose backend implementing:
- POST /api/auth/login  -> { token }
- GET /api/employees/profile -> employee profile (protected)
- GET /api/leaves -> list of leaves for logged-in employee (protected)
- POST /api/leaves -> create leave (protected)
- CRUD endpoints for /api/employees for the CRUD frontend

## What I included
- Working React component examples that satisfy the practical requirements.
- Basic frontend to integrate with the backend described in assignment (JWT-based login flow).
- Step-by-step instructions above for running the projects.
- Small inline comments in code where needed.

If you want, I can also:
- Provide an Express + Mongoose backend skeleton (with JWT login, employee schema, leave schema, admin CRUD and email sending) in the same ZIP. (Tell me and I will add the backend files into the archive.)
