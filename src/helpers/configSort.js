import {sortByName} from "./sortByName";
import {sortBySize} from "./sortBySize";
import {sortByDate} from "./sortByDate";

export const sort = {
    name: {value: 'name', sort: sortByName},
    size: {value:'size', sort: sortBySize},
    create: {value: 'create', sort: sortByDate},
}