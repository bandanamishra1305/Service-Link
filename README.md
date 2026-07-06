# Labour Link

Labour Link is a comprehensive, full-stack platform designed to bridge the gap between homeowners seeking reliable services and verified professionals/shop owners. By integrating secure OTP-based authentication, real-time geolocation tracking, and a seamless gig lifecycle, Labour Link ensures a trustworthy, efficient, and modern service-hiring experience.

## 🚀 Key Features

### For Homeowners
- **Discover & Search**: Browse highly rated shops or search for specific workers like electricians, plumbers, and carpenters.
- **Gig Posting**: Fill out a detailed gig form specifying job descriptions, preferred dates, time slots, and your address.
- **Live Tracking & Verification**: Track assigned employees on a live geospatial map. View employee verification details and photos.
- **Secure Job Lifecycle**: Start and complete jobs securely using a dual-OTP system.
- **Integrated Payments**: Pay via Cash, Net Banking, UPI, or Cards seamlessly after the job is successfully completed.

### For Shop Owners
- **Comprehensive Dashboard**: View daily earnings, tasks completed, and visual earning graphs.
- **Employee Management**: Add and verify employees, assign tasks, and monitor their live locations via a geospatial map.
- **Gig Management**: Accept incoming gig requests and manage accepted jobs efficiently.

### For Employees
- **Streamlined Workflow**: Receive gig assignments with a simple interface to accept or reject them.
- **Live Location Sharing**: Ensure safety and transparency by sharing real-time locations with both the shop owner and the homeowner.

## 🛠️ Architecture & Tech Stack

This project follows a decoupled client-server architecture, containerized with Docker for consistent development and deployment environments.

- **Frontend**: [Next.js](https://nextjs.org/) (App Router), React, Vanilla CSS (Glassmorphism & modern UI/UX).
- **Backend**: [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/), RESTful APIs.
- **Database**: PostgreSQL (Managed via [Prisma ORM](https://www.prisma.io/)).
- **Real-time Engine**: [Socket.io](https://socket.io/) (for live tracking and instant notifications).
- **Authentication**: Custom JWT-based auth combined with Email & SMS OTP verification.
- **Infrastructure**: Docker & Docker Compose.
- **Deployment**: Configured for [Render](https://render.com/) via `render.yaml` infrastructure-as-code.

## 📦 Project Structure

```text
Service-Link/
├── frontend/             # Next.js Application
│   ├── app/              # App router & pages
│   ├── components/       # Reusable React components
│   └── Dockerfile        # Frontend container configuration
├── backend/              # Express.js API Server
│   ├── index.js          # Entry point
│   └── Dockerfile        # Backend container configuration
├── docker-compose.yml    # Local multi-container orchestration
└── render.yaml           # Render deployment blueprint
```

## 💻 Running Locally (Docker)

The easiest way to run the entire stack locally is by using Docker Compose. Ensure you have [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed.

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd Service-Link
   ```

2. **Spin up the stack:**
   ```bash
   docker-compose up --build
   ```
   *This command will simultaneously start the PostgreSQL database, build the Express backend on port `5000`, and launch the Next.js frontend on port `3000`.*

3. **Access the application:**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:5000/api/health](http://localhost:5000/api/health)
