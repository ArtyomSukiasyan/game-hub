import React from "react";
import "./form.css";
import { useForm } from "react-hook-form";

const Form = ({ onSubmit, onCreate, form, onChangeData }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <div className="conten-center">
                  <div className="Log-In-up">
                    <span className="Log-In-up-name">Log In </span>
                    <span className="Log-In-up-name">Sign Up</span>
                  </div>
                </div>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label htmlFor="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      onChange={handleSubmit(onChangeData)}
                      className="card-front"
                    >
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-pb">Log In</h4>
                          <div className="form-group">
                            <input
                              type="email"
                              name="logemail"
                              className="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              autoComplete="off"
                              value={form.logEmail}
                              {...register("logEmail")}
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              className="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autoComplete="off"
                              value={form.logPassword}
                              {...register("logPassword")}
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <input
                            type="submit"
                            className="btn mt-4"
                            value="submit"
                          />
                        </div>
                      </div>
                    </form>
                    <form
                      onSubmit={handleSubmit(onCreate)}
                      onChange={handleSubmit(onChangeData)}
                      className="card-back"
                    >
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-pb">Sign Up</h4>
                          <div className="form-group">
                            <input
                              type="text"
                              name="logname"
                              className="form-style"
                              placeholder="User Name"
                              id="logname"
                              autoComplete="off"
                              value={form.userName}
                              {...register("userName")}
                            />
                            <i className="input-icon uil uil-user"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              name="logemail"
                              className="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              autoComplete="off"
                              value={form.userEmail}
                              {...register("email")}
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              className="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autoComplete="off"
                              value={form.password}
                              {...register("password")}
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <input
                            type="submit"
                            className="btn mt-4"
                            value="submit"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Form;
