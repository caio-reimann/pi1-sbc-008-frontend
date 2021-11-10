import {
    Login,
    Signup,
    Budget,
    Layout
} from './components';
import { BrowserRouter } from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                {/* <Login /> */}
                {/* <Signup /> */}
                <Layout>
                    <Budget />
                </Layout>
            </div>
        </BrowserRouter>
    );
}

export default App;
