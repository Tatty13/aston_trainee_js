'use client';

import Link from 'next/link';

import { withJSHighlight } from '@/HOC';
import styles from './homework.module.scss';

function HomeworkLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='container'>
      {children}

      <Link
        href='./'
        rel='noopener noreferrer'
        className={styles.link}>
        <span className={styles.arrow}>←</span>
        <span>На главную</span>
      </Link>
    </div>
  );
}

const HomeworkLayoutWithJSHighlight = withJSHighlight(HomeworkLayout);

export default HomeworkLayoutWithJSHighlight;
