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

const PrivateRoute = ({isAuthenticated, component}) => {
    return isAuthenticated ? {component} : <Navigate to="/login" />;
};

function App() {
    let [isAuthenticated, setIsAuthenticated] = React.useState(false);
    let [token, setToken] = React.useState('');
    let pathname = useLocation().pathname;
    let navigate = useNavigate();

    // let data = {
    //     "aceite_termo": "True",
    //     "cpassword": "abc123",
    //     "email": "teste2@teste.com",
    //     "identidade": "311.195.110-38",
    //     "nome": "João",
    //     "password": "abc123",
    //     "profissao": "Teste",
    //     "sexo": "M",
    //     "sobrenome": "da Silva"
    // };
      
    // Api({endpoint:'usuario', method:'POST', data:data});

    // React.useCallback(
    //     setToken(
    //         Api({
    //             endpoint:'autenticacao', 
    //             method:'POST', 
    //             data:{
    //                 "email": "teste2@teste.com",
    //                 "password": "abc123"
    //             }})
    //     )
    // , []);

    let data = {
        "bairro": "string",
        "cep": "string",
        "cidade": "string",
        "complemento": "string",
        "data_inicio": "2021-11-14T01:32:28.729Z",
        "desconto": 0,
        "desconto_porcentagem": 0,
        "descricao": "string",
        "email": "string",
        "identidade": "string",
        "info_complementar": "string",
        "logradouro": "string",
        "nome": "string",
        "numero": "string",
        "prazo": 0,
        "tel_celular": "string",
        "tipo_prazo": "Horas",
        "uf": "AC"
    };
    Api({endpoint:'orcamentos', method:'PUT', data:data, token:token});

    console.log('auth', isAuthenticated);

    // navigate('/login', { replace: true })

    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setToken={setToken} />} />
                <Route path="/signup" element={<Signup />} />

            </Routes>

            {isAuthenticated && (
                <Layout setIsAuthenticated={setIsAuthenticated}>
                    <Routes>
                        <Route path='/' element={<Budget/>} />
                        <Route element={<FourOhFour/>} />
                    </Routes>
                </Layout>
            )}
        </div>
    );
}

export default App;
