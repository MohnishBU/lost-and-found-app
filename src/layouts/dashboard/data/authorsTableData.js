/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

export default function data() {
  const ItemType = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography component="a" href="#" display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const Brand = ({ title }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Name", accessor: "name", width: "45%", align: "left" },
      { Header: "Brand", accessor: "brand", align: "left" },
      { Header: "Color", accessor: "color", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "Date Lost", accessor: "dateLost", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        name: <ItemType name="Headphones" />,
        brand: <Brand title="JBL" />,
        color: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            red
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="matches found" color="success" variant="gradient" />
          </MDBox>
        ),
        dateLost: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Change Status
          </MDTypography>
        ),
      },
      {
        name: <ItemType name="Earphones" />,
        brand: <Brand title="Apple" />,
        color: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            white
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="no matches found" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        dateLost: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            11/01/19
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Change Status
          </MDTypography>
        ),
      },
    ],
  };
}
