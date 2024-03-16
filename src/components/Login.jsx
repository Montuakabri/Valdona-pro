import React from "react";
import "../assets/user/css/components.css";

const Login = () => {
  return (
    <section class="login-inner">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card" style={{ borderRadius: "1rem" }}>
              <div class="row g-0">
                <div class="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://images.unsplash.com/photo-1542295669297-4d352b042bca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="login form"
                    class="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                  <div class="card-body p-lg-4 text-black">
                    <form>
                      <div class="d-flex align-items-center mb-3 pb-1">
                        <span
                          class="h1 fw-bold mb-0"
                          style={{ color: "#9a468a" }}
                        >
                          Valdona
                        </span>
                      </div>

                      <h5
                        class="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign into your account
                      </h5>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example17">
                          Email address
                        </label>
                        <input
                          type="email"
                          id="form2Example17"
                          class="form-control form-control-lg"
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example27">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form2Example27"
                          class="form-control form-control-lg"
                        />
                      </div>

                      <div class="pt-1 mb-4">
                        <button
                          class="btn btn-dark btn-lg btn-block"
                          type="button"
                        >
                          Login
                        </button>
                      </div>

                      <a class="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p class="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <a href="#!" style={{ color: "#393f81" }}>
                          Register here
                        </a>
                      </p>
                      <a href="#!" class="small text-muted">
                        Terms of use.
                      </a>
                      <a href="#!" class="small text-muted">
                        Privacy policy
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
