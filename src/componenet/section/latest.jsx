import API_KEY from '../../API_KEY';
import useFetch from '../Movies/Fetching';
import SingleMovie from '../singleMovie/singleMovie';
const Latest = ({ data }) => {
    return <SingleMovie data={data} />;
};

export default Latest;
