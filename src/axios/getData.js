import axios from "axios";
import {dataToProps} from "../helpers/dataToProps";

export const getData = (setData, setFiles, cookies) => {
    axios.get(`https://prof.world/api/test_json_files/?token=6a06cc0050374e32be51125978904bd8`)
        .then(res => {
            const files = dataToProps(res.data.data.files, cookies);
            setFiles(files[0]);
            setData(files);
        })
}