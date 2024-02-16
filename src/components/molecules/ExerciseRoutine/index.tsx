import styles from '@/components/molecules/ExerciseRoutine/ExerciseRoutine.module.scss';
import UserRoutineArticle from '@/components/molecules/UserRoutineArticle';
import { postProfile } from '@/constants/MockData';

function ExerciseRoutine() {
  // TODO: API 연동시, 데이터 변경 필요
  return (
    <div className={styles.wrapper}>
      <UserRoutineArticle name={postProfile.name} />
      {postProfile.exerciseArea.map((val) => (
        <div key={val.id} className={styles.inWrapper}>
          <p className={styles.exerciseArea}>{val.name}</p>
          <div className={styles.exerciseWrapper}>
            <ul className={styles.exerciseInWrapper}>
              {val.exerciseEquipment.map((val2) => (
                <li key={val2.id} className={styles.exercise}>
                  {val2.name}
                </li>
              ))}
            </ul>
            <div className={styles.setWrapper}>
              {val.exerciseEquipment.map((val2) => (
                <p key={val2.id}>{val2.set}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExerciseRoutine;