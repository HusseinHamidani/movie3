import Latest from './section/latest';
import './styles/style.css';
const Home = (props) => {
    const data = props.data.results;
    console.log(props.data.results);
    return (
        <div className='main_home_conatiner'>
            <Latest data={data} />
        </div>
    );
};

export default Home;
