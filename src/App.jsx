import { lazy, Suspense, useEffect } from 'react';
import Header from '/src/components/Header/Header';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCurrency } from './redux/operations';
// import { getUserInfo } from '/src/service/opencagedataApi';

const Home = lazy(() => import('/src/pages/Home'));
const Rates = lazy(() => import('/src/pages/Home'));

export const App = () => {
  // const [userLocation, setUserLocation] = useState(null);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(position => {
  //     setUserLocation({
  //       latitude: position.coords.latitude,
  //       longitude: position.coords.longitude,
  //     });
  //   });
  // }, []);

  // getUserInfo(userLocation).then(data =>
  //   console.log(data.results[0].annotations.currency.iso_code),
  // );

  // console.log('userLocation', userLocation);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
