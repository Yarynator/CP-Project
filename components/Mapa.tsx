import { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import styles from '../styles/Map.module.css';

export const Mapa: React.FC = () => {

  const [viweport, setViewport] = useState({
    latitude: 49.743_757_2,
    longitude: 15.338_638_3,
    zoom: 7,
    width: '100vw',
    height: '100vh',
  });

  return (
    <>
      <ReactMapGL
        style={{
          position: 'relative',
          bottom: 0,
        }}
        {...viweport}
        mapboxApiAccessToken="pk.eyJ1IjoieWFyeW5hdG9yIiwiYSI6ImNreWtuaW0wMTBmZzYybnBuMmpoMWR6cTcifQ.1nyUrqUwVQ6LmJsyf6_nMw"
        mapStyle="mapbox://styles/yarynator/ckykny3sp6a6514qpyf59hild"
        onViewportChange={setViewport}
      >
        <Marker key="1" latitude={50.033_911_1} longitude={15.790_515_3}>
          <div className={styles.markerDiv}>
            <strong>Nazev: </strong> Nazev
          </div>
        </Marker>
      </ReactMapGL>
    </>
  );
};
