'use client';

import { modeContext } from '@/theme/MuiTheme';
import { useContext } from 'react';

export default function Home() {
  const mode = useContext(modeContext);
  return (
    <>
      <div>Mohammad Hormati</div>
      <button onClick={() => mode?.setMode('light')}>change mode</button>
    </>
  );
}
