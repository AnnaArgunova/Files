export const sortBySize= (data)=>{
    return {name: data.name, files: data.files.sort((a, b)=>a.size-b.size)}
}