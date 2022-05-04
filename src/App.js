import './App.styled';
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import * as S from "./App.styled";
import {useEffect, useState} from "react";
import {getData} from "./axios/getData";
import {useCookies} from "react-cookie";

function App() {
    const [data, setData] = useState(null);
    const [files, setFiles] = useState(null);
    const [cookies] = useCookies(['sort']);

    useEffect(() => {
        getData(setData, setFiles,cookies.sort)
    }, [])
    return (
        <>
            <S.Title>Files</S.Title>
            {data ? (
                <S.Wrapper>
                    <div>
                        {data.map(item => (
                            <div onClick={() => setFiles(item)} key={item.name}>
                                <Nav active={files.name === item.name} folder={item.name}/>
                            </div>
                        ))}
                    </div>
                    <Main files={files} setData = {setFiles}/>
                </S.Wrapper>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}

export default App;
