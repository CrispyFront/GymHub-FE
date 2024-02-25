import { post } from '@/constants/MockData';
import { atom, useSetAtom } from 'jotai';
import { ChangeEvent, MutableRefObject, useEffect } from 'react';

export const filterValueAtom = atom<string[]>([]);

interface Props {
  timer: MutableRefObject<NodeJS.Timeout | null>;
  searchValue: string;
  setSearchValue: any; //*: 타입 추정 안됨
}

function useSearchFilter({ timer, searchValue, setSearchValue }: Props) {
  const setFilterValue = useSetAtom(filterValueAtom);

  const searchHashTag = (e: ChangeEvent<HTMLInputElement>) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      let value = e.target.value;
      const blank_pattern = /[\s]/g; // 띄어쓰기 찾아버리는 정규표현식
      if (blank_pattern.test(value)) value = value.replace(/ /g, ''); // 해당 로직은 띄어쓰기를 없애버립니다 참 좋죠?
      setSearchValue(value);
    }, 800);
  };

  // TODO: post부분에 api데이터 넣어주기
  const hashtags = post.postContent
    .match(/#[^\s#]*/g)
    ?.map((val) => val) as RegExpMatchArray;

  useEffect(() => {
    if (searchValue) {
      setFilterValue(
        hashtags
          .map((val) => val.slice(1))
          .filter((val) => val === searchValue.toLocaleLowerCase()),
      );
    }
    if (searchValue.length === 0) {
      setFilterValue([]);
    }
  }, [searchValue]);

  return { searchHashTag };
}

export default useSearchFilter;
