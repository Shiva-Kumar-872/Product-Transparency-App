
# 🛡️ Product Transparency App

Empowering ethical, health-conscious decisions with intelligent product reports.

---

## 📄 Business Requirement Document (BRD)

Consumers and businesses today seek clarity around product ethics, sustainability, sourcing, and compliance. EthicalScan meets this need through a transparent, scalable platform that collects detailed product data and transforms it into structured reports. It supports:

- Ethical-first product submissions
- Instant generation of transparency documents
- Product Reports to Pds

---

## 🎯 Product Requirement Document (PRD)

**Objective**: Build a full-stack web application that collects detailed product information through dynamic, intelligent follow-up questions and generates a clean PDF-based Product Transparency Report.

### ✨ Functional Requirements

- Dynamic multi-step form with conditional question flow
- Admin dashboard to view, search, filter, and categorize products
- PDF generation based on submitted product data
- Public-facing homepage to educate and onboard users
- Optional company-authenticated access

### 🧠 AI-Powered Contributions

- Auto-suggestion of categories, tags and fields
- Developer efficiency via GitHub Copilot, Cursor, Tabnine
- Semantic PDF summarization for report generation (planned module)

---

## ⚙️ Tech Stack

| Layer        | Technology Used                            |
| ------------ | ------------------------------------------- |
| Frontend     | **React**, **TypeScript**, **Tailwind CSS** |
| Backend      | **Express.js** (Node.js) or **Nest.js**     |
| Database     | **PostgreSQL**, optionally Firebase/MongoDB |
| API Testing  | **Postman**, **Axios**                      |
| PDF Export   | **jsPDF** or **pdf-lib**                    |
| Deployment   | GitHub Pages / Render / Vercel              |
| AI Tools     | **GitHub Copilot**, **Cursor**, **Tabnine**, Replit |

---

## 📸 Screenshots

| Homepage                             | Dashboard                            |
| ----------------------------------- | ------------------------------------- |
| ![Homepage](./screenshots/home.png) | ![Dashboard](./screenshots/dashboard.png) |

_Add your real screenshots under `/screenshots` folder in the repo._

---


## 📁 📁 Project Directory Structure


Product-Transparency-App/
├── frontend/
│   ├── src/
│   │   ├── pages/         # Individual page components
│   │   ├── components/    # Reusable UI elements
│   │   └── assets/        # Static assets (images, styles)
│   └── public/            # Public files (index.html, favicon)
├── backend/
│   ├── controllers/       # Logic for handling requests
│   ├── routes/            # API route definitions
│   ├── models/            # Data models and schema
│   └── prisma/            # Prisma client and migrations
├── reports/               # Generated PDF reports
├── screenshots/           # UI screen captures for documentation
├── README.md              # Project documentation
└── .gitignore             # Files and folders to exclude from Git tracking


### 👨‍💻 Author: Shiva Kumar

📍 Hyderabad, India  
🌐 GitHub: [Shiva-Kumar-872](https://github.com/Shiva-Kumar-872)  
💬 LinkedIn: [linkedin.com/in/shiva-kumar-7053a429b] 
✉️ Email: shivak24303@example.com 

