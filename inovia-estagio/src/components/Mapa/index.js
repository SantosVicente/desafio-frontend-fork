import './styles.css'
import { Popup, Marker, MapContainer, TileLayer } from 'react-leaflet'
import { useState, useEffect } from 'react';
import request from '../../axios/configGet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconUrl from '../../assets/location-dot-solid.svg';


function Mapa() {
    const [coordinators, setCoordinators] = useState([])

    const getPosts = async () => {
        try {
            const response = await request.get("/");

            const cord = response.data.map(user => ({
                latitude: user.latitude,
                longitude: user.longitude,
                city: user.city,
                state: user.state
            }))

            setCoordinators(cord)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    const customIcon = L.icon({
        iconUrl,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    const markers = coordinators
        .filter(coord => coord.latitude != null && coord.longitude != null)
        .map((coord, index) => (
            <Marker key={index} position={[coord.latitude, coord.longitude]} icon={customIcon}>
                <Popup>{coord.city}, {coord.state}</Popup>
            </Marker>
        ));


    return (
        <MapContainer
            center={[-22.891588, -47.022174]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ width: '45vw', height: '45vh' }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {markers}
        </MapContainer>
    );
}

export default Mapa