import Svg from '@/components/atoms/Svg';
import { ComponentProps } from 'react';

//TODO: global color theme 변수로 수정
interface SvgProps extends ComponentProps<typeof Svg> {
  color?: string;
}

function HomeSvg({ color = '#FEFEFE' }: SvgProps) {
  return (
    <Svg width={35} height={34} color={color}>
      <path d="M6.875 26.917V14.385c0-.406.09-.79.272-1.153.182-.362.432-.661.752-.896l8.064-6.075a2.462 2.462 0 0 1 1.535-.513c.575 0 1.088.171 1.538.513l8.065 6.075c.32.235.57.534.752.896.181.363.272.747.272 1.153v12.532c0 .58-.21 1.078-.628 1.497a2.044 2.044 0 0 1-1.497.628h-4.523c-.362 0-.666-.123-.912-.369a1.239 1.239 0 0 1-.368-.912v-6.92c0-.363-.123-.667-.368-.912a1.239 1.239 0 0 0-.912-.368h-2.834c-.362 0-.667.123-.912.368a1.24 1.24 0 0 0-.368.912v6.92c0 .363-.123.667-.368.913-.246.245-.55.368-.913.368H9c-.58 0-1.078-.21-1.497-.628a2.044 2.044 0 0 1-.628-1.497Z" />
    </Svg>
  );
}

export default HomeSvg;
