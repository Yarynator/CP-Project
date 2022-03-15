import { useEffect, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import styles from "../styles/Map.module.css";

export const Mapa : React.FC = () => {
    const [width, setWidth]= useState("99vw");

    const [viweport, setViewport] = useState({
        latitude: 49.7437572,
        longitude: 15.3386383,
        zoom: 7,
        width: "100vw",
        height: "100vh"
    })

    //TODO
    useEffect(() => {
        const size = window.document.body.offsetWidth;
        setWidth(`${size}px`);
    }, [, setWidth]);

    return <>
            <ReactMapGL style={{
                position: "relative",
                bottom: 0
            }}
                {...viweport} 
                mapboxApiAccessToken="pk.eyJ1IjoieWFyeW5hdG9yIiwiYSI6ImNreWtuaW0wMTBmZzYybnBuMmpoMWR6cTcifQ.1nyUrqUwVQ6LmJsyf6_nMw"
                mapStyle="mapbox://styles/yarynator/ckykny3sp6a6514qpyf59hild"
                onViewportChange={ setViewport }
                >
                
                <Marker key="1" latitude={50.0339111} longitude={15.7905153}>
                    <img src="/point.png" alt="Point" width={20} height={27} onClick={() => {
                        
                    }}/>
                    <div className={styles.markerDiv}>
                        <strong>Nazev: </strong> Nazev
                    </div>
                </Marker>

            </ReactMapGL>
    </>
}