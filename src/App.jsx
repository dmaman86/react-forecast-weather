import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { HeaderItem, LocationsScreen, ForecastScreen } from '@/components';
import { useList } from '@/hooks';

export const App = () => {

  const { items,
          addItem,
          removeItem  } = useList([]);

  return (
    <>
      <BrowserRouter>
        <HeaderItem />
        <Routes>
          <Route path="/forecast" 
                  element={<ForecastScreen locations={items}/>}
            />
            <Route path="/locations" 
                  element={<LocationsScreen items={items} removeItem={removeItem} addItem={addItem}/>}
            />

            <Route path="/" element={<Navigate to="forecast" replace />} />
            <Route path="*" element={<Navigate to="forecast" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
