import { Link } from 'react-router-dom';
import '../styles/style.css';
const SingleMovie = ({ data }) => {
    console.log(data);
    return (
        <div className='main_single_movie_handler'>
            {data &&
                data.map((singleData) => (
                    <Link to='/movieDetails'>
                        <div
                            key={singleData.id}
                            className='single_movie_output'
                        >
                            <div className='main_image_handler'>
                                <img src={singleData.image.original} alt='' />
                            </div>
                            <div className='main_movie_inofmation'>
                                <h2 className='main_title'>
                                    {singleData.name}
                                </h2>
                                <div className='movie_type_rating_informations'>
                                    <div className='movie_type_info'>
                                        {singleData.genres.map((type) => (
                                            <h2 className='single_movie_type'>
                                                {type}
                                            </h2>
                                        ))}
                                    </div>
                                    <div className='main_rating'>
                                        <h2>{singleData.rating.average}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
        </div>
    );
};

export default SingleMovie;
