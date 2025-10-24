
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  isAuthenticated: boolean;
  user: { email: string } | null;
  login: (email: string, pass: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data - updated to simplify login
const MOCK_USER = { email: 'admin@example.com' };

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check for a logged-in user in localStorage
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Failed to parse user from localStorage', error);
    }
    setLoading(false);
  }, []);

  const login = async (email: string, pass: string) => {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            if (email && pass) { // Allow any non-empty email and password
                const userData = { email };
                setUser(userData);
                try {
                    localStorage.setItem('user', JSON.stringify(userData));
                } catch (error) {
                    console.error('Failed to save user to localStorage', error);
                }
                resolve();
            } else {
                reject(new Error('Please enter a valid email and password'));
            }
        }, 500);
    });
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem('user');
    } catch (error)      {
      console.error('Failed to remove user from localStorage', error);
    }
    router.push('/login');
  };

  const value = {
    isAuthenticated: !!user,
    user,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
