export const getApiData = async()=>{
    const API =  "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=3"
    try {
        const res = await fetch(API)
        const data = await res.json();
      
        return data
    } catch (error) {
        console.log(error)
    }
}