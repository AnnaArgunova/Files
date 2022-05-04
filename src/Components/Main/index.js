import Sort from "../Sort";
import * as S from './index.styled';
import {useCookies} from "react-cookie";
import {sort} from "../../helpers/configSort";

export default function Main({files, setData}) {
    const [cookies] = useCookies(['sort']);

    const chooseImage = (value) => {
        return value.name.split('.')[1];
    }

    console.log(chooseImage(sort[cookies.sort].sort(files).files[0]));

    return (
        <S.Wrapper>
            <div>
                <S.Title>{files.name}</S.Title>

                <S.MainWrapper>

                    {sort[cookies.sort].sort(files).files.map(item => (
                        <S.Item key={item.name}>
                            <S.ItemImage>{chooseImage(item)}</S.ItemImage>
                            <S.ItemTitle>{item.name}</S.ItemTitle>
                        </S.Item>

                    ))}
                </S.MainWrapper>
            </div>
            <Sort files={sort[cookies.sort].sort(files)} setSortFiles={setData}/>
        </S.Wrapper>
    )
}