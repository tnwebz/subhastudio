import { useState, useEffect } from 'react';

export function useAdmin() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const adminState = sessionStorage.getItem('isAdmin');
    if (adminState === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const login = (password: string) => {
    if (password === '4814') {
      sessionStorage.setItem('isAdmin', 'true');
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    sessionStorage.removeItem('isAdmin');
    setIsAdmin(false);
  };

  return { isAdmin, login, logout };
}
