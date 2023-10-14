import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Contacts } from '../pages/Contacts';
import { Register } from '../pages/Register';
import { Login } from '../pages/Login';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};
