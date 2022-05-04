import Sort from "../Sort";
import * as S from './index.styled';
import {useCookies} from "react-cookie";
import {sort} from "../../helpers/configSort";
import {useState} from "react";

export default function Main({files, setData}) {
    const [cookies] = useCookies(['sort']);
    const sorting = cookies.sort || 'name';

    const chooseImage = (value) => {
        return value.name.split('.')[1];
    }

    return (
        <S.Wrapper>
            <div>
                <S.Title>{files.name}</S.Title>

                <S.MainWrapper>

                    {sort[sorting].sort(files).files.map(item => (
                        <S.Item key={item.name}>
                            <S.ItemImage>{chooseImage(item)}</S.ItemImage>
                            <S.ItemTitle>{item.name}</S.ItemTitle>
                        </S.Item>

                    ))}
                </S.MainWrapper>
            </div>
            <Sort files={sort[sorting].sort(files)} setSortFiles={setData}/>
        </S.Wrapper>
    )
}