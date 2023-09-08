import { homeworkData } from '@/utils';
import styles from './homework.module.scss';

type HomeworkProps = {
  params: {
    homework: string;
  };
};

export default function Homework({ params: { homework } }: HomeworkProps) {
  const targetId = homework.slice(9);
  const data = homeworkData.find(({ id }) => id === targetId);

  return (
    <>
      <h1 className={styles.title}>Задание {targetId}</h1>
      <p className={styles.subtitle}>{data?.desc}</p>
    </>
  );
}
