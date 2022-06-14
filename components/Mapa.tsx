import ReactMapGL, { Marker } from 'react-map-gl';

import styles from '../styles/Map.module.css';

export const Mapa: React.FC = () => {


  return (
    <>
      <ReactMapGL
        style={{
          position: 'relative',
          bottom: 0,
        }}
        mapStyle="mapbox://styles/yarynator/ckykny3sp6a6514qpyf59hild"
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
