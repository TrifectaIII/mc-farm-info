import data from './farmInfo.json';

export const farms = data;

//build object with items as keys and array of farm names as value

let itemsObj = {};
for (let name in data) {
    let farm = data[name];

    farm.Produces.forEach((item) => {
        (item in itemsObj) ? itemsObj[item].push(name) : itemsObj[item] = [name];
    });
}

export const items = itemsObj;