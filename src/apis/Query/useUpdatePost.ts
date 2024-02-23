import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { submitPostProps, updatePost } from '@/apis/post';

interface useUpdatePostProp {
  Id?: string;
  param: submitPostProps;
}

function useUpdatePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['updatePost'],
    mutationFn: ({ Id, param }: useUpdatePostProp) => {
      const response = updatePost(Id, param);
      return response;
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['postDetail'] });
    },
    onError(error) {
      console.error('error : ', error);
      toast.error('게시글을 수정 하지 못했습니다.');
    },
  });
}

export default useUpdatePost;
