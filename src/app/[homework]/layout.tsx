import Link from 'next/link';
import styles from './homework.module.scss';

export default function HomeworkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
