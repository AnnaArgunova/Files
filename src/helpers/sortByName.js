export const sortByName = (data) => {
    return {
        name: data.name,
        files: data.files.sort((a, b) => a.name.split('.')[0].localeCompare(b.name.split('.')[0]))
    };
}