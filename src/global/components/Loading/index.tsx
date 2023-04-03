import Image from 'next/image';
import * as S from "./styles";
import LoaderSrc from '../../assets/img/loading3.gif';

export function Loading() {
  return (
    <S.Wrapper>
      <Image src={LoaderSrc} alt='loading' />
    </S.Wrapper>
  );
}
