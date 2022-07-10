import '../styles/style.css';
const SingleMovie = ({ data }) => {
    console.log(data);
    return (
        <div className='main_single_movie_handler'>
            {data &&
                data.map((singleData) => (
                    <div key={singleData.id} className='single_movie_output'>
                        <h2 className='miantitle'>{singleData.name}</h2>
                        <img src={singleData.image.original} alt='' />
                    </div>
                ))}
        </div>
    );
};

export default SingleMovie;
