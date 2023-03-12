import React from "react";
import Table from "react-bootstrap/Table";
import NavbarComp from "./NavbarComp";
export default function ContactUs() {
  return (
    <>
      <div>
        <NavbarComp />
      </div>
      <div className="text-justify home">
        <div className="container">
          <br />
          <h1>Contact Us</h1>
          <br />

          <Table
            striped
            bordered
            responsive
            hover
            className="table table-bordered table-light table-hover"
          >
            <tbody>
              <tr>
                <td>Center Name</td>
                <td>C-DAC - Advanced Computing Training School</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>
                  C-DAC, ACTS, Plot no. 20, FC-33, <br />
                  New Delhi - 110025
                  <br />
                  (India)
                </td>
              </tr>
              <tr>
                <td>Telephone</td>
                <td>Phone:+91-11-26940239</td>
              </tr>
              <tr>
                <td>Fax</td>
                <td>+91-20-25503131</td>
              </tr>
              <tr>
                <td>E-Mail</td>
                <td>acts@cdac.in</td>
              </tr>
              <tr>
                <td>Website</td>
                <td>
                  <a href="https://cdac.in" target="_blank">
                    CDAC
                  </a>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
