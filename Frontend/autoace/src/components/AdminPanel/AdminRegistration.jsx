import {
  Container,
  Form,
  Button,
  Row,
  Col,
  CardBody,
  Card,
} from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouteLoaderData } from "react-router-dom";
import { Navigationbar } from "../Navigationbar";

export default function AdminRegistration() {
  const [adminData, setAdminData] = useState({
    adminName: "",
    email: "",
    mobileNo: "",
    password: "",
  });

  let [error, setError] = useState({ errorData: null, isError: false });
  const handleChange = (event, property) => {
    setAdminData({
      ...adminData,
      [property]: event.target.value,
    });
  };
  const SubmitForm = (event) => {
    event.preventDefault();
    console.log(adminData);
    if (
      adminData.adminName === undefined ||
      adminData.adminName.trim() === ""
    ) {
      toast.error("Name required");
      return;
    }
    if (adminData.email === undefined || adminData.email.trim() === "") {
      toast.error("Email required");
      return;
    }
    if (adminData.mobileNo === undefined || adminData.mobileNo.trim() === "") {
      toast.error("Contact Number required");
      return;
    }
    if (adminData.password === undefined || adminData.password.trim() === "") {
      toast.error("password required");
      return;
    }

    axios
      .post("http://localhost:8080/admin/register", adminData)
      .then((response) => {
        setAdminData(response.data);
        alert("Register Successful");
      })
      .catch((error) => {
        console.error("Error fetching registration:", error);
        alert("Alreaday Registered");
      });

    // try {
    //     const response =  axios.post('http://localhost:8080/admin/register',adminData);
    //     if (response.status === 200) {
    //       console.log('Regsitration submitted successfully!');
    //     } else {
    //       console.error('Failed to submit Regsitration form');
    //     }
    //   } catch (error) {
    //     console.error('Error submitting Regsitration form', error);
    //   }
  };
  // try{
  //     const response=axios.post('http://localhost:8080/api/register',adminData).then((response)=>{
  //     if (response.status === 200) {
  //         console.log('Regsitartion submitted successfully!');
  //       } else {
  //         console.error('Failed to Registartion form');
  //       }
  //     })
  //     .catch((error)=>{
  //         console.error('Error submitting Registartion form', error);
  //     });

  // }catch(error)
  // {
  //     console.log("failed to submit registration",error);
  // }

  return (
    <Container>
      <Navigationbar />
      <Row>
        <Col sm={{ span: 6, offset: 3 }} className="mt-4">
          <Card className="shadow p-4">
            <CardBody>
              <h4 className="mb-3">😃Admin Registration</h4>
              <Form onSubmit={SubmitForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label> Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    name="adminName"
                    onChange={(event) => handleChange(event, "adminName")}
                    value={adminData.adminName}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email address"
                    name="email"
                    onChange={(event) => handleChange(event, "email")}
                    value={adminData.email}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="Number"
                    placeholder="Enter Contact No."
                    name="mobileNo"
                    onChange={(event) => handleChange(event, "mobileNo")}
                    value={adminData.mobileNo}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(event) => handleChange(event, "password")}
                    value={adminData.password}
                  />
                </Form.Group>

                <Container className="text-center">
                  <Button variant="success" type="submit">
                    Register
                  </Button>
                </Container>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
}
