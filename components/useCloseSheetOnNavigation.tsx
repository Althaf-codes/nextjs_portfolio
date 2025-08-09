import { useEffect } from 'react';

const useCloseSheetOnNavigation = (closeSheet: () => void) => {
  useEffect(() => {
    const handleRouteChange = () => {
      closeSheet(); // Call the function to close the sheet
    };

    // Listen to the navigation events
    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('pushState', handleRouteChange);
    window.addEventListener('replaceState', handleRouteChange);

    return () => {
      // Clean up the event listeners
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('pushState', handleRouteChange);
      window.removeEventListener('replaceState', handleRouteChange);
    };
  }, [closeSheet]);
};

export default useCloseSheetOnNavigation;
