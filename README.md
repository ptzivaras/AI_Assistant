# 🛍️ AI-Powered E-commerce Chatbot

An intelligent furniture e-commerce store with an AI shopping assistant powered by Google Gemini and LangGraph. The chatbot helps customers find furniture items using natural language queries and vector search.

## ✨ Features

### 🤖 AI Shopping Assistant
- **Natural Language Search**: Ask questions like "Show me modern sofas" or "I need a dining table for 6 people"
- **Intelligent Recommendations**: AI understands context and provides relevant furniture suggestions
- **Vector Search**: Uses MongoDB Atlas vector search to find products based on semantic similarity
- **Conversation Memory**: Remembers your conversation history for contextual responses
- **Real-time Responses**: Instant AI-powered answers to your furniture shopping queries

### 🏪 E-commerce Store
- Modern, responsive UI with professional design
- Product catalog with furniture items
- Shopping cart and wishlist functionality
- Search bar for quick product lookup
- Clean navigation and user-friendly interface

### 💬 Chat Examples - Try Asking:
- "What sofas do you have?"
- "Show me dining tables"
- "I need bedroom furniture"
- "Do you have office chairs?"
- "What's available in modern style?"

## 🛠️ Technologies

**Backend:**
- Node.js with TypeScript
- Express.js for REST API
- MongoDB Atlas (Vector Search & Conversation State)
- Google Gemini AI (via LangChain)
- LangGraph for AI agent workflow
- Vector embeddings for semantic search

**Frontend:**
- React.js
- React Icons (Font Awesome)
- Pure CSS (no UI frameworks)
- Responsive design

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB Atlas account with vector search enabled
- Google Gemini API key

### Installation

**1. Clone the repository**
```bash
git clone <your-repo-url>
cd AI_Assistant
```

**2. Server Setup**
```bash
cd Server
npm install
```

Create `.env` file in Server directory:
```env
GOOGLE_API_KEY=your_google_gemini_api_key
MONGODB_ATLAS_URI=your_mongodb_connection_string
```

**3. Client Setup**
```bash
cd client
npm install
```

### Running the Application

**Terminal 1 - Start Server:**
```bash
cd Server
npm run dev
```
Server runs on `http://localhost:8000`

**Terminal 2 - Start Client:**
```bash
cd client
npm start
```
Client runs on `http://localhost:3000`

### Seed Database (Optional)
```bash
cd Server
npm run seed
```

## 📁 Project Structure
```
AI_Assistant/
├── Server/
│   ├── agent.ts          # LangGraph AI agent with tools
│   ├── index.ts          # Express server & API endpoints
│   ├── seed-database.ts  # Database seeding script
│   └── .env             # Environment variables (not in git)
├── client/
│   └── src/
│       ├── components/
│       │   ├── ChatWidget.js       # AI chat interface
│       │   └── EcommerceStore.js   # Store UI
│       └── App.css                 # All styling (pure CSS)
└── README.md
```

## 🎨 UI Design
- **Pure CSS** - No UI frameworks (Bootstrap, Material-UI, etc.)
- Professional, modern design
- Fully responsive
- Custom animations and transitions
- All styling in `App.css` (365 lines of handcrafted CSS)

## 🔒 Security
- API keys stored in `.env` (not committed to git)
- `.gitignore` configured for sensitive files
- CORS enabled for frontend-backend communication

## ⚠️ Known Limitations

### Database Seeding
The database seeding functionality (`npm run seed`) requires access to newer Gemini API models that may not be available in the free tier. If you encounter model version errors:

**Error Example:**
```
models/gemini-1.5-flash is not found for API version v1beta
```

This is a known limitation of the Gemini API free tier and doesn't affect the core chat functionality.
