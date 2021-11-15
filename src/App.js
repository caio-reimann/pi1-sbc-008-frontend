import {
    Login,
    Signup,
    Budget,
    Layout,
    FourOhFour,
} from './components';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useNavigate,
    useLocation,
} from "react-router-dom";
import React from 'react';
import {Api} from './context/Api';

// const PrivateRoute = ({isAuthenticated, component}) => {
//     return isAuthenticated ? {component} : <Navigate to="/login" />;
// };

function App() {
    let location = useLocation();
    let [params, setParams] = React.useState(new URLSearchParams(location.search));
    let token = params.get('token');

    console.log('token', token);

    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/app" element={
                    // token ? (
                        <Layout>
                            <Routes>
                                <Route path='/' element={<Budget/>} />
                                <Route path="*" element={<FourOhFour/>} />
                            </Routes>
                        </Layout>
                    // ) : (<Navigate to="/login" />)
                }/>
                <Route path="/" exact element={<Navigate to='/login' />} />
            </Routes>

            
        </div>
    );
}

export default App;
