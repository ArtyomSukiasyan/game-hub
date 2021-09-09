import React, { useState } from "react";
import { saveState } from "../../helpers/localStorage";
import { useHttp } from "../../hooks/useHttp";

import Form from "./components/form";

const Auth = ({ verify, set_loading }) => {
  const [form, setForm] = useState({
    logEmail: "",
    logPassword: "",
    email: "",
    userName: "",
    password: "",
  });
  const { loading, request, error, clearError } = useHttp();

  const logIn = async (email, password, userName) => {
    await set_loading(true);
    try {
      const data = await request(
        "https://shavarshgame.herokuapp.com/api/login/",
        "POST",
        { email: email, password: password }
      );

      if (userName) {
        const newData = await request(
          "https://shavarshgame.herokuapp.com/api/generate/",
          "POST",
          { owner: data.userId, userName: userName },
          {
            Authorization: `Bearer ${data.token}`,
          }
        );
      }

      saveState(JSON.stringify(data), "auth");
      await verify();
    } catch (e) {}
    set_loading(false);
  };
  const signUp = async (userName, email, password) => {
    await set_loading(true);
    try {
      await request(
        "https://shavarshgame.herokuapp.com/api/register/",
        "POST",
        { email: email, userName: userName, password: password }
      );

      logIn(email, password, userName);
    } catch (e) {}
  };

  const isValid = (email, userName, password) => {
    const name = /^([A-Za-zéàë]{2,40} ?)+$/;
    const passwordTest = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const emailTest = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (userName === null) {
      if (passwordTest.test(password) && emailTest.test(email)) {
        logIn(email, password);
      }
    } else {
      if (
        passwordTest.test(password) &&
        name.test(userName) &&
        emailTest.test(email)
      ) {
        signUp(userName, email, password);
      }
    }
  };
  const onSubmit = (data) => {
    isValid(data.logEmail, null, data.logPassword);
  };
  const onCreate = (data) => {
    isValid(data.email, data.userName, data.password);
  };
  const onChangeData = (data) => {
    setForm({
      logEmail: data.logEmail,
      logPassword: data.logPassword,
      email: data.email,
      userName: data.userName,
      password: data.password,
    });
  };

  return (
    <div className="row">
      <Form
        onSubmit={onSubmit}
        onCreate={onCreate}
        form={form}
        onChangeData={onChangeData}
      />
    </div>
  );
};
export default Auth;
