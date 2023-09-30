import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Pages
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Verification from './pages/Authentication/Verification';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import ArticleList from './pages/Article/ArticleList';
import AddArticle from './pages/Article/AddArticle';
import Users from './pages/User';
import Company from './pages/Company';
import Information from './pages/Information';
import Outlet from './pages/Outlet';
import Chat from './pages/Chat';
import environment from './environment';
import PPDB from './pages/PPDB/PPDB';
import Add_PPDB_Student from './pages/PPDB/Add_PPDB_Student';
import Add_PPDB from './pages/PPDB/Add_PPDB';

import 'react-toastify/dist/ReactToastify.css';
import 'rsuite/dist/rsuite-no-reset.min.css';
import ROUTE from './route';
import { Toaster } from 'react-hot-toast';
import UserProvider from './context/UserContext';
import PaymentSuccess from './pages/Authentication/PaymentSuccess';
import PPDB_Pay from './pages/PPDB/PPDB_Pay';
import { ModalProvider } from './context/ModalContext';
import { LoadingProvider } from './hooks/useLoading';
import Loading from './components/Loading';
import { Loader } from 'rsuite';
import DetailPayment from './pages/PPDB/DetailPayment';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const preloader = document.getElementById('preloader');

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = 'none';
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <p className=" text-center text-danger">Failed to lead app</p>
  ) : (
    <LoadingProvider>
      <UserProvider>
        <ModalProvider>
          <Toaster position="top-right" reverseOrder={false} />
          <ToastContainer />
          <Loading />

          <Routes>
            <Route
              path={ROUTE.Administrator.Dashboard}
              element={<ECommerce />}
            />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/administrator/users" element={<Users />} />
            <Route path="/administrator/companies" element={<Company />} />
            <Route path="/administrator/outlets" element={<Outlet />} />
            <Route
              path="/administrator/informations"
              element={<Information />}
            />
            {/* PPDB */}
            <Route path={ROUTE.Administrator.Ppdb.list} element={<PPDB />} />
            <Route
              path={ROUTE.Administrator.Ppdb.list_pay}
              element={<PPDB_Pay />}
            />
            <Route path={ROUTE.Administrator.Ppdb.add} element={<Add_PPDB />} />
            <Route
              path={
                ROUTE.Administrator.Ppdb.detail_payment + '/:registration_id'
              }
              element={<DetailPayment />}
            />

            <Route path="/administrator/ppdb" element={<PPDB />} />
            {/* Artikel */}
            <Route path="/artikel/list" element={<ArticleList />} />
            <Route path="/artikel/add-article" element={<AddArticle />} />
            <Route path="/artikel/kategori" element={<FormLayout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/forms/form-elements" element={<FormElements />} />
            <Route path="/forms/form-layout" element={<FormLayout />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/ui/alerts" element={<Alerts />} />
            <Route path="/ui/buttons" element={<Buttons />} />
            <Route path={ROUTE.Auth.login} element={<SignIn />} />
            <Route path={ROUTE.Auth.register} element={<SignUp />} />
            <Route
              path={ROUTE.Auth.veritification + '/:registration_id'}
              element={<Verification />}
            />
            <Route
              path={ROUTE.Auth.payment_success + '/:payment_id'}
              element={<PaymentSuccess />}
            />
          </Routes>
        </ModalProvider>
      </UserProvider>
    </LoadingProvider>
  );
}

export default App;
