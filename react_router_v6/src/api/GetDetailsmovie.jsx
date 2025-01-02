
export const getDetailMovie = async({params})=>{
    const ID = params.movieID;
    console.log(ID);
    
  const API =  `https://www.omdbapi.com/?i=${ID}&apikey=1c12799f`
    try {
        const res = await fetch(API)
        const data = await res.json();
      
        return data
    } catch (error) {
        console.log(error)
    }
}