import React from 'react';
import FlexContainer from '../components/FlexContainer';
import CarTile from '../components/CarTile';
import { data } from '../data/module-data';  // Załadowanie danych samochodów

const Lab03Page = () => {
    return (
        <div>
            <FlexContainer element={CarTile} data={data} />
        </div>
    );
};

export default Lab03Page;
