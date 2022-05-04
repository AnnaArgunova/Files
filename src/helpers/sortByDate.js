export const sortByDate = (data) => {
    return {name: data.name, files: data.files.sort((a, b) => a.mtime - b.mtime)};
}