Askly – Survey Collection & Feedback Platform
🚀 Live Demo

🔗 https://product-survey-khn7.onrender.com/

📂 GitHub Repository

🔗 https://github.com/Kajal15Shaw/Askly---Feedback-Collection-Platform.git

🧠 Problem Statement

Collecting structured feedback at scale is difficult using traditional tools. Platforms like Google Forms lack:

Monetization

Email-based automated delivery

Centralized response tracking

Control over survey usage

Businesses need a scalable, paid, and automated survey system.

💡 Solution

Askly is a SaaS-based Survey Collection Platform that allows users to:

Create surveys

Send surveys via email

Collect and manage responses

Pay per survey using a credit-based payment model

✨ Key Features

🔐 User Authentication (JWT-based)

📝 Survey Creation & Management

📧 Email-based Survey Distribution

💳 Credit-Based Payment System (Stripe)

📊 Response Collection & Analytics

🔒 Atomic credit deduction (prevents misuse)

🛑 Duplicate submission prevention

📱 Responsive UI

🏗️ System Architecture (High-Level)
Client (React)
   ↓
API Gateway (Express)
   ↓
Authentication Middleware (JWT)
   ↓
Controllers
   ↓
MongoDB (Users, Surveys, Responses, Payments)
   ↓
External Services:
   • Stripe (Payments)
   • Email Service (Survey Delivery)

🛠️ Tech Stack
Frontend

React (SPA, reusable components)

Axios (API communication)

Backend

Node.js

Express.js

JWT Authentication

Database

MongoDB (NoSQL, schema flexibility)

Payment & Services

Stripe (Payment Gateway)

Email Service (Survey distribution)

🗂️ Core Data Models
User
{
  email,
  password,
  credits,
  createdAt
}

Survey
{
  title,
  questions,
  recipients,
  creatorId,
  createdAt
}

Response
{
  surveyId,
  respondentEmail,
  answers,
  submittedAt
}

Payment
{
  userId,
  amount,
  creditsAdded,
  status
}

⚙️ How It Works

User signs up and purchases credits

Credits are atomically deducted

Survey is created and emailed to recipients

Responses are collected securely

Duplicate responses are prevented

🚧 Challenges & Solutions
Challenge	Solution
Payment reliability	Validated Stripe responses before DB update
Duplicate submissions	Restricted responses using email + survey ID
Credit consistency	Atomic DB operations
Scalability	Stateless backend + MongoDB
📈 Future Improvements

Survey analytics dashboard

Admin moderation

Webhooks for responses

Role-based access control

👩‍💻 Author

Kajal Shaw
Aspiring SDE | Full Stack Developer
