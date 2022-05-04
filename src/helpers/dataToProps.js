import {sortByName} from "./sortByName";
import {sortByDate} from "./sortByDate";
import {sortBySize} from "./sortBySize";

const createProps = (props, value) => {
    return {
        name: props,
        files: value,
    }
}

export const dataToProps = (data, cookies) => {
    const res = [];

    switch (cookies){
        case 'size':
            res.push(sortBySize(createProps('Folder1', data.Folder1)));
            res.push(sortBySize(createProps('Folder2', data.Folder2)));
            res.push(sortBySize(createProps('Folder3', data.Folder3)));
            break;
        case 'date':
            res.push(sortByDate(createProps('Folder1', data.Folder1)));
            res.push(sortByDate(createProps('Folder2', data.Folder2)));
            res.push(sortByDate(createProps('Folder3', data.Folder3)));
            break;
        default:
            res.push(sortByName(createProps('Folder1', data.Folder1)));
            res.push(sortByName(createProps('Folder2', data.Folder2)));
            res.push(sortByName(createProps('Folder3', data.Folder3)));
    }
    return res;

}