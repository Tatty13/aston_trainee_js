import styles from './page.module.scss';
import { Card } from '@/components';
import { homeworkData } from '@/utils';

export default function Home() {
  return (
    <div className='container'>
      <h1 className={styles.title}>Домашние работы</h1>

      <ol className={styles.grid}>
        {homeworkData.map((homework) => (
          <Card
            key={homework.id}
            {...homework}
          />
        ))}
      </ol>
    </div>
  );
}
