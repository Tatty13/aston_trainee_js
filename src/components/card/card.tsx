import Link from 'next/link';
import { FC } from 'react';
import { Props } from './card.types';
import styles from './card.module.scss';

export const Card: FC<Props> = ({ id, title, desc }) => {
  return (
    <li className={styles.card}>
      <Link href={`./homework_${id}`}>
        <h2>{title}</h2>
        <span>→</span>
        <p>{desc}</p>
      </Link>
    </li>
  );
};
