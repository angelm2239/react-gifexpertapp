

export const getGifs = async(categoria) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&api_key=hdNEGjZEdS8ZVecOgxzimTvGnu2rvx9Y&limit=10`;
    const resp  = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url

        }
    })
    return gifs;
}