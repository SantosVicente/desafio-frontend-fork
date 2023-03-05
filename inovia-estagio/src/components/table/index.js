import './styles.css'
import request from '../../axios/configGet';
import { useEffect, useState } from 'react';

function Table() {
    const [dados, setData] = useState('');

    const getPosts = async () => {
        try {
            const response = await request.get("/");
            const data = response.data.map(user => ({
                id: user.id,
                givenName: user.givenName,
                surname: user.surname,
                gender: user.gender,
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
            setData(data)
            gerarTabela(data);
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    if (!dados || dados.length === 0) {
        return <div>Carregando...</div>;
    }

    function removerDado(id) {
        request.delete(`/${parseInt(id)}`)
            .then(response => {
                console.log(response.data);
                setData(response.data.filter(item => item.id !== id));
            })
            .catch(error => {
                console.error(error);
            });
    }

    function gerarTabela(dados) {
        console.log('gerarTabela chamada!');
        var corpo = document.querySelector('#tabela tbody');
        dados.forEach(function (item) {
            var linha = corpo.insertRow();
            Object.keys(item).forEach(function (key) {
                var coluna = linha.insertCell();
                coluna.textContent = item[key];
            });

            var colunaRemover = linha.insertCell();
            var botaoRemover = document.createElement('button');
            botaoRemover.textContent = 'Remover';
            botaoRemover.onclick = function () {
                removerDado(item.id);
                corpo.deleteRow(linha.rowIndex);
            };
            colunaRemover.appendChild(botaoRemover);
        })
    }

    /*const handleRemove = (id) => {
        request.delete(`/${parseInt(id)}`)
          .then(response => {
            console.log('Dado removido com sucesso:', response.data);
            setData(data.filter(item => item.id !== id));
          })
          .catch(error => {
            console.error(error);
          });
      };
*/

    return (
        <div className='table'>
            <table id='tabela'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Gênero</th>
                        <th>Cidade</th>
                        <th>UF</th>
                        <th>Estado</th>
                        <th>Data de nascimento</th>
                        <th>Tipo sanguíneo</th>
                        <th>Peso</th>
                        <th>Altura</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Deletar</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    );
}


/*
{coordinators.map((marker, index) => (
    <Marker key={index} position={[parseFloat(marker.latitude), parseFloat(marker.longitude)]}>
        <Popup>{marker.city}</Popup>
    </Marker>
))}


{data.map(item => (
                        <tr key={item.id}>
                            <td>{item.givenName}</td>
                            <td>{item.surname}</td>
                            <td>{item.gender}</td>
                            <td>{item.city}</td>
                            <td>{item.state}</td>
                            <td>{item.stateFull}</td>
                            <td>{item.birthday}</td>
                            <td>{item.kilograms}</td>
                            <td>{item.centimeters}</td>
                            <td>{item.latitude}</td>
                            <td>{item.longitude}</td>
                            <td>
                                <a href="#" onClick={() => handleRemove(item.id)}>Remover</a>
                            </td>
                        </tr>
                    ))}
*/

export default Table