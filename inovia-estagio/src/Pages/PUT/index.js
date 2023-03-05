import './styles.css'
import '../Global.css'
import Header from '../../components/Header'
import { useState } from 'react';
import Table from '../../components/table';
import request from '../../axios/configGet';

function PUT() {

    const [id, setId] = useState('');

    const [userData, setUserData] = useState({
        givenName: '',
        surname: '',
        gender: '',
        city: '',
        state: '',
        stateFull: '',
        birthday: '',
        bloodType: '',
        kilograms: '',
        centimeters: '',
        latitude: '',
        longitude: ''
    });

    const Submit = event => {
        event.preventDefault();
        const userId = parseInt(id, 10);
        request.put(`/${userId}`, userData)

            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className='put'>
            <Header />
            <div className='template'>

                <h1>Você está na página de teste de PUT</h1>

                <h2>Editar Usuário</h2>
                <form className='form_put' onSubmit={Submit}>
                    <div className='inputId'>
                        <label htmlFor="id">ID</label>
                        <input type="number" id="id" required value={id} onChange={event => setId(event.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="givenName">Nome</label>
                        <input type="text" id="givenName" required value={userData.givenName} onChange={event => setUserData({ ...userData, givenName: event.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="surname">Sobrenome</label>
                        <input type="text" id="surname" required value={userData.surname} onChange={event => setUserData({ ...userData, surname: event.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="gender">Gênero</label>
                        <input type="text" id="gender" required value={userData.gender} onChange={event => setUserData({ ...userData, gender: event.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="city">Cidade</label>
                        <input type="text" id="city" required value={userData.city} onChange={event => setUserData({ ...userData, city: event.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="state">UF</label>
                        <input type="text" id="state" required value={userData.state} onChange={event => setUserData({ ...userData, state: event.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="stateFull">Estado</label>
                        <input type="text" id="stateFull" required value={userData.stateFull} onChange={event => setUserData({ ...userData, stateFull: event.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="birthday">Data de Aniversário</label>
                        <input type="text" id="birthday" required value={userData.birthday} onChange={event => setUserData({ ...userData, birthday: event.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="bloodType">Tipo Sanguíneo</label>
                        <input type="text" id="bloodType" required value={userData.bloodType} onChange={event => setUserData({ ...userData, bloodType: event.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="kilograms">Peso</label>
                        <input type="text" id="kilograms" required value={userData.kilograms} onChange={event => setUserData({ ...userData, kilograms: event.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="centimeters">Altura</label>
                        <input type="text" id="centimeters" required value={userData.centimeters} onChange={event => setUserData({ ...userData, centimeters: event.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="latitude">Latitude</label>
                        <input type="text" id="latitude" required value={userData.latitude} onChange={event => setUserData({ ...userData, latitude: event.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="longitude">Longitude</label>
                        <input type="text" id="longitude" required value={userData.longitude} onChange={event => setUserData({ ...userData, longitude: event.target.value })} />
                    </div>
                    <button className='btn_post' type="submit">Salvar</button>
                </form>
                <Table />
            </div >
        </div >
    );
}

export default PUT;