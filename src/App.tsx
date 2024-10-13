import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import FileViewer from './components/FileViewer';
import Header from './components/Header';

const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID'; // Replace with your actual Google Client ID

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/files" element={<FileViewer />} />
            </Routes>
          </div>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;