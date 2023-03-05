import './styles.css'
import '../Global.css'
import Header from '../../components/Header'
import axios from 'axios';
import React, { useState } from 'react';

function User() {
    const [data, setData] = useState(null);

    //nome, gênero, endereço, cidade, estado, idade, tipo sanguíneo, peso, altura, latitude e longitude

    /*
    genre = "male"
    tittle = "Mr.";
    name = "Carlos";
    middleInitial = "R";
    surname = "Azevedo";
    address = "Rua Halley 78";
    city = "Campinas";
    state = "SP";
    stateFull = "São Paulo";
    blood = "B+";
    kilograms = "81.9";
    centimeters = "176";
    latitude = "-22.6597";
    longitude = "-42.546691";
*/

    //nome, gênero, endereço, cidade, estado, idade, domínio, latitude e longitude e useragent browser

    const [title, setTitle] = useState('');
    const [givenName, setName] = useState('');
    const [middleInitial, setMiddle] = useState('');
    const [surname, setSurname] = useState('');
    const [gender, setGender] = useState('');
    const [streetAddress, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [stateFull, setStateFull] = useState('');
    const [birthday, setBirthday] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [kilograms, setKilograms] = useState('');
    const [centimeters, setCentimeters] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    
    const Submit = event => {
        event.preventDefault();
        const data = {
            title: title,
            givenName: givenName,
            middleInitial: middleInitial,
            surname: surname,
            gender: gender,
            streetAddress: streetAddress,
            city: city,
            state: state,
            stateFull: stateFull,
            birthday: birthday,
            bloodType: bloodType,
            kilograms: kilograms,
            centimeters: centimeters,
            latitude: latitude,
            longitude: longitude,
        };

        axios.post('http://inovia.eastus.cloudapp.azure.com/api/person/', data)

            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    /*para fazer delete se deve passar apenas o /:id do item que deseja excluir*/

    return (


        <div className='user'>
            <Header />
            <div className='template'>

                <h1>Você está na Página de Cadastro</h1>

                <div className='forms'>
                    <form onSubmit={Submit}>
                        <div>
                            <label htmlFor="title">Título</label>
                            <input type="text" id="title" value={title} onChange={event => setTitle(event.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="givenName">Nome</label>
                            <input type="text" id="GivenName" value={givenName} onChange={event => setName(event.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="middleInitial">Inicial do meio</label>
                            <input type="text" id="middleInitial" value={middleInitial} onChange={event => setMiddle(event.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="surname">Ultimo Nome</label>
                            <input type="text" id="surname" value={surname} onChange={event => setSurname(event.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="gender">Gênero</label>
                            <input type="text" id="gender" value={gender} onChange={event => setGender(event.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="streetAddress">Endereço</label>
                            <input type="text" id="streetAddress" value={streetAddress} onChange={event => setAddress(event.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="city">Cidade</label>
                            <input type="text" id="city" value={city} onChange={event => setCity(event.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="state">UF</label>
                            <input type="text" id="state" value={state} onChange={event => setState(event.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="stateFull">Estado</label>
                            <input type="text" id="stateFull" value={stateFull} onChange={event => setStateFull(event.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="birthday">Aniversário</label>
                            <input type="text" id="birthday" value={birthday} onChange={event => setBirthday(event.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="bloodType">Tipo Sanguíneo</label>
                            <input type="text" id="bloodType" value={bloodType} onChange={event => setBloodType(event.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="kilograms">Peso</label>
                            <input type="text" id="kilograms" value={kilograms} onChange={event => setKilograms(event.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="centimeters">Altura "Em Cm"</label>
                            <input type="text" id="centimeters" value={centimeters} onChange={event => setCentimeters(event.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="latitude">Latitude</label>
                            <input type="text" id="latitude" value={latitude} onChange={event => setLatitude(event.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="longitude">Longitude</label>
                            <input type="text" id="longitude" value={longitude} onChange={event => setLongitude(event.target.value)} />
                        </div>
                        <button type="submit" className='btn_post'>Adicionar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default User;