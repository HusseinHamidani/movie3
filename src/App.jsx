import useFetch from './componenet/Movies/Fetching';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationSystem from './componenet/navigationSystem/navigationSystem';
import Home from './componenet/Home';
import API_KEY from './API_KEY';
const App = () => {
    const api = `https://api.tvmaze.com/shows`;
    const { data, loading, error } = useFetch(api);
    console.log(data, loading, error);
    if (loading) {
        return <div>Loading Movies ... </div>;
    } else {
        return (
            <Router>
                <div className='mian_app'>
                    <NavigationSystem />
                    <Routes>
                        <Route exact path='/' element={<Home data={data} />} />
                    </Routes>
                </div>
            </Router>
        );
    }
};
export default App;
