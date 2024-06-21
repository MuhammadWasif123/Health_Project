'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../utils/context';

const ProtectedRoute = ({ children }) => {
  const { isRegistered,loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isRegistered) {
      router.push('/doctor/signup');
    }
  }, [isRegistered,loading, router]);

  if(loading){
    <div>Loading...</div>
  }

  return isRegistered ? children : null;
};

export default ProtectedRoute;
