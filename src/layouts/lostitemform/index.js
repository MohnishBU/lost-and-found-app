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
/*
import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Notifications() {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);

  const alertContent = (name) => (
    <MDTypography variant="body2" color="white">
      A simple {name} alert with{" "}
      <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        an example link
      </MDTypography>
      . Give it a click if you like.
    </MDTypography>
  );

  const renderSuccessSB = (
    <MDSnackbar
      color="success"
      icon="check"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  const renderInfoSB = (
    <MDSnackbar
      icon="notifications"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={infoSB}
      onClose={closeInfoSB}
      close={closeInfoSB}
    />
  );

  const renderWarningSB = (
    <MDSnackbar
      color="warning"
      icon="star"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={warningSB}
      onClose={closeWarningSB}
      close={closeWarningSB}
      bgWhite
    />
  );

  const renderErrorSB = (
    <MDSnackbar
      color="error"
      icon="warning"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2}>
                <MDTypography variant="h5">Alerts</MDTypography>
              </MDBox>
              <MDBox pt={2} px={2}>
                <MDAlert color="primary" dismissible>
                  {alertContent("primary")}
                </MDAlert>
                <MDAlert color="secondary" dismissible>
                  {alertContent("secondary")}
                </MDAlert>
                <MDAlert color="success" dismissible>
                  {alertContent("success")}
                </MDAlert>
                <MDAlert color="error" dismissible>
                  {alertContent("error")}
                </MDAlert>
                <MDAlert color="warning" dismissible>
                  {alertContent("warning")}
                </MDAlert>
                <MDAlert color="info" dismissible>
                  {alertContent("info")}
                </MDAlert>
                <MDAlert color="light" dismissible>
                  {alertContent("light")}
                </MDAlert>
                <MDAlert color="dark" dismissible>
                  {alertContent("dark")}
                </MDAlert>
              </MDBox>
            </Card>
          </Grid>

          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2} lineHeight={0}>
                <MDTypography variant="h5">Notifications</MDTypography>
                <MDTypography variant="button" color="text" fontWeight="regular">
                  Notifications on this page use Toasts from Bootstrap. Read more details here.
                </MDTypography>
              </MDBox>
              <MDBox p={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton variant="gradient" color="success" onClick={openSuccessSB} fullWidth>
                      success notification
                    </MDButton>
                    {renderSuccessSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton variant="gradient" color="info" onClick={openInfoSB} fullWidth>
                      info notification
                    </MDButton>
                    {renderInfoSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton variant="gradient" color="warning" onClick={openWarningSB} fullWidth>
                      warning notification
                    </MDButton>
                    {renderWarningSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton variant="gradient" color="error" onClick={openErrorSB} fullWidth>
                      error notification
                    </MDButton>
                    {renderErrorSB}
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Notifications;
*/

import React, { useState } from "react";
import { Grid, Card, MenuItem, TextField, Button } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { Select, FormControl, InputLabel } from "@mui/material";
import { Form } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function UserInputForm() {
  const [formValues, setFormValues] = useState({
    itemType: "",
    color: "",
    location: "",
    date: "",
    time: "",
    message: "",
  });

  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Use 'name' attribute of inputs to identify them
    setData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically set the property based on input name
    }));
    setFormValues({
      ...formValues,
      [name]: value,
    });
    console.log(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormFilled = Object.values(formValues).every((value) => value.trim() !== "");
    if (!isFormFilled) {
      alert("Please fill out all fields. Pick the closest option if unsure.");
      return;
    }
    try {
      const res = await addDoc(collection(db, "lostItems"), {
        ...data,
        userId: currentUser.uid,
      });
      console.log(res.id);
      alert("Submitted! Head to Dashboard for details.");
      navigate("dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
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
                Lost Item Form
              </MDTypography>
            </MDBox>
            <MDBox pt={4} pb={3} px={3}>
              <MDBox component="form" role="form">
                <MDBox mb={2}>
                  <MDInput
                    select
                    required
                    label="Item Type"
                    name="itemType"
                    value={formValues.itemType}
                    onChange={handleInputChange}
                    fullWidth
                    sx={{
                      "& .MuiInputBase-input": { height: "45px" }, // Adjusted to use double quotes
                    }}
                  >
                    {/* Add MenuItems for item type here */}
                    <MenuItem value="Wireless Earphones">Wireless Earphones</MenuItem>
                    <MenuItem value="Wired Earphones">Wired Earphones</MenuItem>
                    <MenuItem value="Wireless Headphones">Wireless Headphones</MenuItem>
                    <MenuItem value="Wired Headphones">Wired Headphones</MenuItem>
                    <MenuItem value="Phone">Phone</MenuItem>
                    <MenuItem value="Laptop">Laptop</MenuItem>
                    <MenuItem value="BU ID">BU ID</MenuItem>
                    <MenuItem value="Other Card">Other Card</MenuItem>
                    <MenuItem value="Keys">Keys</MenuItem>
                    <MenuItem value="Clothes">Clothes</MenuItem>
                    <MenuItem value="Jewelry">Jewelry</MenuItem>
                    <MenuItem value="Book">Book</MenuItem>
                    <MenuItem value="Bottle">Bottle</MenuItem>
                  </MDInput>
                </MDBox>
                <MDBox mb={2}>
                  <MDInput
                    select
                    required
                    fullWidth
                    label="Color"
                    name="color"
                    value={formValues.color}
                    onChange={handleInputChange}
                    sx={{
                      "& .MuiInputBase-input": { height: "45px" }, // Adjusted to use double quotes
                    }}
                  >
                    {/* Add MenuItems for color here */}
                    <MenuItem value="Black">Black</MenuItem>
                    <MenuItem value="White">White</MenuItem>
                    <MenuItem value="Grey">Grey</MenuItem>
                    <MenuItem value="Red">Red</MenuItem>
                    <MenuItem value="Blue">Blue</MenuItem>
                    <MenuItem value="Green">Green</MenuItem>
                    <MenuItem value="Yellow">Yellow/Orange</MenuItem>
                    <MenuItem value="Pink">Pink/Purple</MenuItem>
                  </MDInput>
                </MDBox>
                <MDBox mb={2}>
                  <MDInput
                    select
                    required
                    fullWidth
                    label="Location"
                    name="location"
                    value={formValues.location}
                    onChange={handleInputChange}
                    sx={{
                      "& .MuiInputBase-input": { height: "45px" }, // Adjusted to use double quotes
                    }}
                  >
                    {/* Add MenuItems for location here */}
                    <MenuItem value="GSU">GSU</MenuItem>
                    <MenuItem value="Warren">Warren</MenuItem>
                    <MenuItem value="West">West - Residences/Dining Hall</MenuItem>
                    <MenuItem value="CAS">CAS</MenuItem>
                    <MenuItem value="CDS">CDS</MenuItem>
                    <MenuItem value="Marciano">Marciano</MenuItem>
                    <MenuItem value="Questrom">Questrom</MenuItem>
                    <MenuItem value="COM">COM</MenuItem>
                    <MenuItem value="Metcalf">Metcalf</MenuItem>
                    <MenuItem value="CGS">CGS</MenuItem>
                    <MenuItem value="HTC">HTC</MenuItem>
                  </MDInput>
                </MDBox>
                <MDBox mb={2}>
                  <MDInput
                    fullWidth
                    required
                    type="date"
                    label="Date"
                    name="date"
                    margin="normal"
                    value={formValues.date}
                    onChange={handleInputChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput
                    select
                    required
                    fullWidth
                    label="Time"
                    name="time"
                    value={formValues.time}
                    onChange={handleInputChange}
                    sx={{
                      "& .MuiInputBase-input": { height: "45px" }, // Adjusted to use double quotes
                    }}
                  >
                    {/* Add MenuItems for color here */}
                    <MenuItem value="1am-8am">1am-8am</MenuItem>
                    <MenuItem value="8am-10am">8am-10am</MenuItem>
                    <MenuItem value="10am-noon">10am-noon</MenuItem>
                    <MenuItem value="noon-2pm">noon-2pm</MenuItem>
                    <MenuItem value="2pm-4pm">2pm-4pm</MenuItem>
                    <MenuItem value="4pm-6pm">4pm-6pm</MenuItem>
                    <MenuItem value="6pm-9pm">6pm-9pm</MenuItem>
                    <MenuItem value="9pm-1am">9pm-1am</MenuItem>
                  </MDInput>
                </MDBox>
                <MDBox mb={2}>
                  <MDInput
                    type="text"
                    required
                    name="message"
                    value={formValues.message}
                    label="Message/ Additional Information"
                    variant="standard"
                    onChange={handleInputChange}
                    fullWidth
                  />
                </MDBox>
                <MDButton variant="gradient" color="info" fullWidth onClick={handleSubmit}>
                  Submit
                </MDButton>
              </MDBox>
            </MDBox>
          </Card>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default UserInputForm;
