import {useCookies} from "react-cookie";
import {useState} from "react";
import * as S from './index.styled';
import {sort} from "../../helpers/configSort";

export default function Sort({files, setSortFiles}) {
    const [cookies, setCookie] = useCookies(['sort']);
    const [show, setShow] = useState(cookies.sort || 'name');
    const [showMore, setShowMore] = useState(false);

    function onChange(newName) {
        setCookie('sort', newName, {path: '/'});
    }

    const chooseSort = (data) => {
        setShowMore(!showMore)
        setShow(data.value)
        onChange(data.value)
        setSortFiles(data.sort(files))
    }

    return (
        <>
            {show === sort.name.value && (
                <S.Wrapper>
                    <S.TitleActive onClick={() => {
                        chooseSort(sort.name)
                    }}>Sort by name
                    </S.TitleActive>

                    {showMore && (
                        <S.WrapperHidden>
                            <S.Title onClick={() => {
                                chooseSort(sort.size)
                            }}>Sort by size
                            </S.Title>
                            <S.Title onClick={() => {
                                chooseSort(sort.create)
                            }}>Sort by date create
                            </S.Title>
                        </S.WrapperHidden>
                    )}
                </S.Wrapper>
            )}

            {show === sort.size.value && (
                <S.Wrapper>
                    <S.TitleActive onClick={() => {
                        chooseSort(sort.size)
                    }}>Sort by size
                    </S.TitleActive>
                    {
                        showMore && (
                            <S.WrapperHidden>
                                <S.Title onClick={() => {
                                    chooseSort(sort.name)
                                }}>Sort by name
                                </S.Title>

                                <S.Title onClick={() => {
                                    chooseSort(sort.create)
                                }}>Sort by date create
                                </S.Title>
                            </S.WrapperHidden>
                        )
                    }
                </S.Wrapper>
            )}

            {show === sort.create.value && (
                <S.Wrapper>
                    <S.TitleActive onClick={() => {
                        chooseSort(sort.create)
                    }}>Sort by date create
                    </S.TitleActive>

                    {showMore && (
                        <S.WrapperHidden>
                            <S.Title onClick={() => {
                                chooseSort(sort.size)
                            }}>Sort by size
                            </S.Title>

                            <S.Title onClick={() => {
                                chooseSort(sort.name)
                            }}>Sort by name
                            </S.Title>
                        </S.WrapperHidden>
                    )}
                </S.Wrapper>
            )}
        </>
    )
}