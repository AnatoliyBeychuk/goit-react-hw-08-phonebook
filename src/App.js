import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loader from "./components/Loader/Loader";

import AppBar from "./components/AppBar/AppBar";
import { useGetCurrentUserQuery } from "./redux/Auth/auth-slice";
import { useSelector } from "react-redux";
import { getToken } from "./redux/Auth/auth-selectors";
import PrivateRoute from "./components/Routes/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute";

const CallPage = lazy(() =>
  import("./pages/CallPage/CallPage" /* webpackChunkName: "call-page" */)
);

const ContactsPage = lazy(() =>
  import(
    "./pages/ContactsPage/ContactsPage" /* webpackChunkName: "contacts-page" */
  )
);

const RegistrationPage = lazy(() =>
  import(
    "./pages/RegistrationPage/RegistrationPage" /* webpackChunkName: "registration-page" */
  )
);

const LoginPage = lazy(() =>
  import("./pages/LoginPage/LoginPage" /* webpackChunkName: "login-page" */)
);

const AddContactPage = lazy(() =>
  import(
    "./pages/AddContactPage/AddContactPage" /* webpackChunkName: "login-page" */
  )
);

const UpdateContactPage = lazy(() =>
  import(
    "./pages/UpdateContactPage/UpdateContactPage" /* webpackChunkName: "login-page" */
  )
);

function App() {
  const token = useSelector(getToken);
  const { data } = useGetCurrentUserQuery(token);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route path="/" element={<PublicRoute />}>
              <Route index element={<CallPage />} />
            </Route>
            <Route
              path="/contacts"
              element={<PrivateRoute redirectTo="/login" />}
            >
              <Route index element={<ContactsPage />} />
              <Route path="add-contact" element={<AddContactPage />} />
              <Route path="edit-contact" element={<UpdateContactPage />} />
            </Route>
            <Route
              path="/register"
              element={<PublicRoute redirectTo="/contacts" restricted />}
            >
              <Route index element={<RegistrationPage />} />
            </Route>
            <Route
              path="/login"
              element={<PublicRoute redirectTo="/contacts" restricted />}
            >
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
