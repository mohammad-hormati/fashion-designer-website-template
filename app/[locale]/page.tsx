'use client';

import { modeContext } from '@/theme/MuiTheme';
import { useTranslations } from 'next-intl';
import { useContext } from 'react';

export default function Home() {
  const mode = useContext(modeContext);
  const t = useTranslations('Header');
  return <></>;
}
