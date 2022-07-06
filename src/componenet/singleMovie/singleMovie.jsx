import useFetch from "../Movies/Fetching"

export default SingleMovie = ({api})=>{
 const {data , loading , err} = useFetch(api);
 const singleMovieData = data.results
 singleMovieData.map((data)=>(
  <div className="mian_single_movie_container">
   
  </div>
 ))
}