import BabelSvg from '@/assets/icons/BabelSvg';
import CloseIconSvg from '@/assets/icons/CloseIconSvg';
import LineSvg from '@/assets/icons/LineSvg';
import PlusIconSvg from '@/assets/icons/PlusIconSvg';
import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/EditRecordsForm/EditRecordsForm.module.scss';

interface EditRecordsFormProps {
  name: string;
}

function EditRecordsForm({ name }: EditRecordsFormProps) {
  // @TODO atom으로 나누기
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <BabelSvg />
        <div className={styles.nameText}>
          <Text records="trackName">{name}</Text>
        </div>
        <CloseIconSvg />
      </div>
      <LineSvg />
      {/* @TODO API로 해당하는 name에 맞는 set 정보 불러오기 */}
      <div className={styles.set}>
        <div className={styles.setText}>
          <Text>1세트</Text>
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.input}>
            <input value={100} />
            <p className={styles.inputText}>kg</p>
          </div>
          <div className={styles.input}>
            <input value={10} />
            <p className={styles.inputText}>회</p>
          </div>
          <button type="button" className={styles.deleteButton}>
            세트 삭제
          </button>
        </div>
      </div>
      <button type="button" className={styles.addButton}>
        <PlusIconSvg />
        세트 추가
      </button>
    </div>
  );
}

export default EditRecordsForm;