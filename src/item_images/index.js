function importAll(r) {
    let object = {};
    r.keys().forEach((item, index) => { 
        const key = item.replace('./','').slice(0,-4).replace(/_/g, ' ');
        object[key] = r(item);
    });
    return object;
}
  
const Images = importAll(require.context('./', false, /\.(png|gif)$/));

export default Images;