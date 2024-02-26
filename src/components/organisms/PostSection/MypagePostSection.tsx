import { instance } from '@/apis';
import Loading from '@/components/atoms/Loading';
import PostArticle from '@/components/molecules/PostArticle';
import Profile from '@/components/molecules/Profile';
import BackButtonHeader from '@/components/organisms/Header/BackButtonHeader';
import Modal from '@/components/organisms/Modal';
import styles from '@/components/organisms/PostSection/PostSection.module.scss';
import useModalInfo from '@/hooks/useModalInfo';
import {
  GetPostItemsProps,
  GetPostDetailProps,
  GetPost,
} from '@/types/GetPost';
import { useQuery } from '@tanstack/react-query';

interface PostSectionProp {
  // postData?: GetPostDetailProps[] | GetPost;
  postData?: any;
}

function MypagePostSection({ postData }: PostSectionProp) {
  const { isShow, closeModal } = useModalInfo();

  const { data, isLoading } = useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => {
      const response = await instance.get(`/members/me`);

      return response;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={styles.wrapper}>
      {isShow && (
        <Modal type={'commentDel'} isShow={isShow} closeModal={closeModal} />
      )}

      <BackButtonHeader pageName={data?.data.nickname} />
      <Profile
        profileImg={data?.data.profileUrl}
        postCount={postData?.length}
        exerciseDays={postData?.length}
        memberId={data?.data.id}
      />

      <div className={styles.inWrapper}>
        {postData.posts.map((item: GetPostDetailProps, index: number) => (
          <div className={styles.postWrapper} key={index}>
            <PostArticle
              postId={item.postId}
              userInfo={item.writerInfo}
              content={item.content}
              imageUrl={item.imageUrl as string | string[] | null}
              registeredAt={item.registeredAt}
              commentCount={item.commentCount}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MypagePostSection;
