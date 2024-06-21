'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isUserName, setIsUserName] = useState('');
  const [isFullyRegistered, setIsFullyRegistered] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('user_login_token');
    const userName = localStorage.getItem('user_login_name');
    const registrationComplete = localStorage.getItem('registration_complete') === 'true';

    if (token) {
      setIsRegistered(true);
      setIsUserName(userName);
      setIsFullyRegistered(registrationComplete);

    }
    setLoading(false);
  }, []);

  const updateRegistrationStatus = (status) => {
    setIsRegistered(status);
  };


  const completeRegistration = () => {
    setIsFullyRegistered(true);
    localStorage.setItem('registration_complete', 'true');
  };

  const logout = () => {
    localStorage.removeItem('user_login_token');
    localStorage.removeItem('user_login_name');
    localStorage.removeItem('user_id')
    setIsRegistered(false);
    setIsUserName('');
    setIsFullyRegistered(false);
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ isRegistered, updateRegistrationStatus, isUserName, setIsUserName, loading, logout,isFullyRegistered,completeRegistration }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
