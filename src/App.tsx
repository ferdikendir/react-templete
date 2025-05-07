import { useEffect } from 'react';
import './App.scss'
import { AppRoutes } from '@routes';
import { MessageProvider } from '@providers';

function App() {

  const useLocalStorageListener = () => {
    useEffect(() => {
      const handleStorageChange = (event: StorageEvent) => {

        if (event.storageArea === localStorage) {

          location.reload();

        }

      };

      window.addEventListener('storage', handleStorageChange);

      return () => {
        window.removeEventListener('storage', handleStorageChange);
      };
    }, []);
  };

  useLocalStorageListener();

  return (
    <MessageProvider>
      <AppRoutes />
    </MessageProvider>
  );
}

export default App
