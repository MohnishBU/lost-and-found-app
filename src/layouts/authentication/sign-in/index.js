/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useContext, useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { AuthContext } from "context/AuthContext";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    //e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        console.log(user);
        setError(false);
        navigate("dashboard");
      })
      .catch((error) => {
        /*const errorCode = error.code;
        const errorMessage = error.message;*/
        setError(true);
      });
  };
  return (
    <DashboardLayout>
      <MDBox mt={12} mb={3}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8} md={6} lg={6} xl={6}>
            <Card>
              <MDBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Sign in
                </MDTypography>
              </MDBox>
              <MDBox pt={4} pb={3} px={3}>
                <MDBox component="form" role="form">
                  <MDBox mb={2}>
                    <MDInput
                      type="email"
                      label="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      fullWidth
                    />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput
                      type="password"
                      label="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      fullWidth
                    />
                  </MDBox>
                  {error && (
                    <MDBox display="flex" alignItems="center">
                      <MDTypography fontWeight="regular" color="error">
                        Wrong email or password
                      </MDTypography>
                    </MDBox>
                  )}
                  {/*<MDBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MDTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Remember me
                    </MDTypography>
                  </MDBox>*/}
                  <MDBox mt={4} mb={1}>
                    <MDButton variant="gradient" color="info" onClick={handleLogin} fullWidth>
                      sign in
                    </MDButton>
                  </MDBox>
                  <MDBox mt={3} mb={1} textAlign="center">
                    <MDTypography variant="button" color="text">
                      Don&apos;t have an account?{" "}
                      <MDTypography
                        component={Link}
                        to="/authentication/sign-up"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign up
                      </MDTypography>
                    </MDTypography>
                  </MDBox>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox display="flex" alignItems="center">
        <MDTypography fontWeight="light" color="error">
          If at first your sign-in does not work, try refreshing the page
        </MDTypography>
      </MDBox>
    </DashboardLayout>
  );
}

export default Basic;
