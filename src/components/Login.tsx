import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
      // Here you would typically send the access token to your backend
      // and handle the authentication process
      navigate('/dashboard');
    },
    scope: 'https://www.googleapis.com/auth/gmail.readonly',
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Mail className="w-16 h-16 text-blue-500 mb-4" />
      <h1 className="text-3xl font-bold mb-8">Gmail Attachment Processor</h1>
      <button
        onClick={() => login()}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;