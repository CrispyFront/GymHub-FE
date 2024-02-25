import {
  deleteRecordSnapshots,
  postRecordSnapshots,
} from '@/apis/recordController';
import {
  POST_UPDATE,
  RECORD_SAVE,
  RECORD_UPDATE,
  postItems,
  profileItems,
  recordsItems,
} from '@/constants/ToggleMenu';
import useModalInfo from '@/hooks/useModalInfo';
import { ToggleMenuProp } from '@/types/toggle';

import { usePathname, useRouter } from 'next/navigation';

function useToggleItems({ type }: ToggleMenuProp) {
  const router = useRouter();
  const pathName = usePathname();
  const { showModal } = useModalInfo();

  let menuItems = [];

  if (type === 'profile') menuItems = profileItems;
  if (type === 'post') {
    menuItems = postItems;
  } else {
    menuItems = recordsItems;
  }
  if (type === 'records') {
    menuItems = recordsItems;
  }

  const handleOnClick = (
    item: string,
    recordId?: number,
    snapshotId?: number,
  ) => {
    // *: 여기에 토글 메뉴에 관련한 기능 추가해주시면 됩니다.
    switch (item) {
      case POST_UPDATE:
        router.push(`/records/recordId`);
        break;
      case RECORD_SAVE:
        postRecordSnapshots(recordId);
      case RECORD_UPDATE:
        deleteRecordSnapshots(snapshotId);
      default:
        showModal();
        break;
    }
  };
  return { pathName, menuItems, handleOnClick };
}

export default useToggleItems;
