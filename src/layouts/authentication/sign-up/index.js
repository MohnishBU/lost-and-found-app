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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

import { userInputs } from "./formSource";
import { useState } from "react";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Cover() {
  const [data, setData] = useState({});

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
      });
      console.log(res.id);
    } catch (err) {
      console.log(err);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target; // Use 'name' attribute of inputs to identify them
    setData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically set the property based on input name
    }));
    console.log(data);
  };

  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            {/*inputs.map((input) => (
              <MDBox className="formInput" key={input.id}>
                <input
                  //variant="standard"
                  type="text"
                  id={input.id}
                  label={input.placeholder}
                  onChange={handleInput}
                  //fullWidth
                />
              </MDBox>
            ))*/}
            <MDBox mb={2}>
              <MDInput
                type="text"
                name="name"
                label="Name"
                variant="standard"
                onChange={handleInput}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="email"
                name="email"
                label="Email"
                variant="standard"
                onChange={handleInput}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                name="password"
                label="Password"
                variant="standard"
                onChange={handleInput}
                fullWidth
              />
            </MDBox>
            {/*}
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            */}
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" onClick={handleAdd} fullWidth>
                sign up
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
