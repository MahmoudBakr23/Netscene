import { useContext, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import { ColorModeContext } from '../utils/ToggleMode';

function useAlan() {
  const { mode, setMode } = useContext(ColorModeContext);
  useEffect(() => {
    alanBtn({
      key: 'd7fc6c8a37c6ee5e058e89fcfbc7bc872e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, type }) => {
        if (command === 'changeMode' && mode !== type) {
          if (type === 'light') {
            setMode('light');
          } else {
            setMode('dark');
          }
        }
      },
    });
  }, []);
}

export default useAlan;
