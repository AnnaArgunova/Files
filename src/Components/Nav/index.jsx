import * as S from './index.styled';
import image from '../../image/folder.png'

export default function Nav({active, folder}) {
    return (
        <S.Wrapper>
            <S.Image src={image} title={folder} alt={folder}/>
            <S.Title active = {active}>{folder}</S.Title>
        </S.Wrapper>
    )
}