import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import DefaultComponent from "./components/DefaulComponent/DefaulComponent";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { isJsonString } from "./untils";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { updateUser } from "./redux/slides/userSlide";
import * as UserService from "./services/UserService";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const { decoded, storageData } = handleDecoded();
    if (decoded?.id) {
      handleGetDetailsUser(decoded?.id, storageData);
    }
  }, []);

  const handleDecoded = () => {
    let storageData = localStorage.getItem("access_token");
    let decoded = {};
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData);
      decoded = jwtDecode(storageData);
      console.log(jwtDecode(storageData));
    }
    return { decoded, storageData };
  };

  UserService.axiosJWT.interceptors.request.use(
    async (config) => {
      const currentTime = new Date();
      const { decoded } = handleDecoded();
      if (decoded?.exp < currentTime.getTime() / 1000) {
        const data = await UserService.refreshToken();
        localStorage.setItem(
          "access_token",
          JSON.stringify(data?.access_token)
        );
        config.headers["Authorization"] = `Bearer ${data?.access_token}`;
        console.log(config);
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };

  // useEffect(() => {
  //   fetchApi();
  // }, []);

  // const fetchApi = async () => {
  //   const res = await axios.get(
  //     `${process.env.REACT_APP_AI_URL}/product/get-all`
  //   );
  //   return res.data;
  // };

  // const query = useQuery({ queryKey: ["todos"], queryFn: fetchApi });

  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultComponent : Fragment;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
