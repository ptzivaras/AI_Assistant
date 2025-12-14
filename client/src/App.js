import React from 'react'
import './App.css'
import ChatWidget from './components/ChatWidget'

function App() {
  return (
    <div className="App">
      <div className="hero-section">
        <div className="hero-content">
          <h1>AI Shopping Assistant</h1>
          <p>Ask me anything about furniture and home decor!</p>
          <div className="features">
            <div className="feature-card">
              <span className="feature-icon">💬</span>
              <h3>Smart Search</h3>
              <p>Natural language queries</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🎯</span>
              <h3>Personalized</h3>
              <p>AI-powered recommendations</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">⚡</span>
              <h3>Instant</h3>
              <p>Real-time responses</p>
            </div>
          </div>
        </div>
      </div>
      <ChatWidget />
    </div>
  )
}

export default App