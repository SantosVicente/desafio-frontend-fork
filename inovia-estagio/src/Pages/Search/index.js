import './styles.css'
import '../Global.css'
import Header from '../../components/Header'
import React, { useState, useEffect } from 'react';
import request from '../../axios/configGet';

function Search() {
    const [data, setData] = useState('');

    const getPosts = async () => {
        try {
            const response = await request.get("/");
            const dados = response.data.map(user => ({
                id: user.id,
                givenName: user.givenName,
                surname: user.surname,
                gender: user.gender,
                streetAddress: user.streetAddress,
                city: user.city,
                state: user.state,
                stateFull: user.stateFull,
                birthday: user.birthday,
                bloodType: user.bloodType,
                kilograms: user.kilograms,
                centimeters: user.centimeters,
                latitude: user.latitude,
                longitude: user.longitude
            }));
            setData(dados);
        }
        catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getPosts();
    }, []);
    
    function pesquisarDados(tipo, valor) {
        let resultados = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i][tipo] === valor) {
                resultados.push(data[i]);
            }
        }
        return resultados;
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        let tipoPesquisa = event.target.selectTipoPesquisa.value;
        let valorPesquisa = event.target.campoPesquisa.value;
        let resultados = pesquisarDados(tipoPesquisa, valorPesquisa);
        mostrarResultados(resultados);
      }


    function mostrarResultados(dados) {
        var corpo = document.querySelector('#tabela-resultados tbody');
        dados.forEach(function (item) {
            var linha = corpo.insertRow();
            Object.keys(item).forEach(function (key) {
                var coluna = linha.insertCell();
                coluna.textContent = item[key];
            });
        })
    }

    return (
        <div className='pesquisa'>
            <Header />

            <div className='template'>
                <h1>Você está na página de Pesquisa</h1>

                <form className='form_search' onSubmit={handleFormSubmit}>
                    <div className='campos'>
                        <label for="selectTipoPesquisa">Escolha o tipo de pesquisa:</label>
                        <select required id="selectTipoPesquisa">
                            <option value="givenName">Nome</option>
                            <option value="surname">Sobrenome</option>
                            <option value="gender">Gênero</option>
                            <option value="streetAddress">Endereço</option>
                            <option value="city">Cidade</option>
                            <option value="state">UF</option>
                            <option value="stateFull">Estado</option>
                            <option value="birthday">Data de nascimento</option>
                            <option value="bloodType">Tipo Sanguíneo</option>
                            <option value="kilograms">Peso</option>
                            <option value="centimeters">Altura</option>
                            <option value="latitude">Latitude</option>
                            <option value="longitude">Longitude</option>
                        </select>
                    </div>

                    <div className='campos'>
                        <label for="campoPesquisa">Digite sua pesquisa:</label>
                        <input type="text" id="campoPesquisa" required />
                    </div>

                    <button id='botaoPesquisar' type="submit">Pesquisar</button>
                </form>

                <table id="tabela-resultados">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>Gênero</th>
                            <th>Endereço</th>
                            <th>Cidade</th>
                            <th>UF</th>
                            <th>Estado</th>
                            <th>Data de nascimento</th>
                            <th>Tipo sanguíneo</th>
                            <th>Peso</th>
                            <th>Altura</th>
                            <th>Latitude</th>
                            <th>Longitude</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>

        </div>

    );
}

export default Search;