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
import UserNavigationbar from "./UserNavigationbar";
import { useEffect } from "react";

export default function Booking() {
  const [bookingData, setBookingData] = useState({
    vehicleModelName: "",
    vehicleRegistrationNo: "",
    serviceDate: "",
    serviceCenter: "",
    extraServiceDesc: "",
  });

  const [error, setError] = useState({ errorData: null, isError: false });
  const [serviceList, setServiceList] = useState([]);
  const [vehicleServiceId, setVehicleServiceId] = useState("");
  const customerId = sessionStorage.getItem("customerId");
  // useEffect(() => {
  //     const fetchServiceList = async () => {
  //         const response = await axios.get('http://localhost:8080/admin/fetchAll')
  //         const data = await response.json();
  //         console.log(data, 'servicelist')
  //     }

  //     fetchServiceList();
  // }, [])

  useEffect(() => {
    axios
      .get("http://localhost:8080/admin/fetchAll")
      .then((response) => setServiceList(response.data))
      .catch((error) => console.error("Error fetching serviceList:", error));
  }, []);

  // const serviceId = serviceList.

  console.log(
    bookingData,
    "bookingData",
    serviceList,
    vehicleServiceId,
    customerId
  );

  const handleChange = (event, property) => {
    setBookingData({
      ...bookingData,
      [property]: event.target.value,
    });
  };

  const handleServiceChange = (e) => {
    setVehicleServiceId(e.target.value);
  };

  const SubmitForm = (event) => {
    event.preventDefault();
    console.log(bookingData);

    if (
      bookingData.vehicleModelName === undefined ||
      bookingData.vehicleModelName.trim() === ""
    ) {
      toast.error("vehicle model name is required");
      return;
    }
    if (
      bookingData.vehicleRegistrationNo === undefined ||
      bookingData.vehicleRegistrationNo.trim() === ""
    ) {
      toast.error("vehicle registration no is required");
      return;
    }
    if (
      bookingData.serviceDate === undefined ||
      bookingData.serviceDate.trim() === ""
    ) {
      toast.error("service Date is required");
      return;
    }
    if (
      bookingData.serviceCenter === undefined ||
      bookingData.serviceCenter.trim() === ""
    ) {
      toast.error("service Center is required");
      return;
    }
    if (
      bookingData.extraServiceDesc === undefined ||
      bookingData.extraServiceDesc.trim() === ""
    ) {
      toast.error("extra ServiceDesc is required");
      return;
    }

    axios
      .post(
        `http://localhost:8080/bookService?serviceId=${vehicleServiceId}&customerId=${customerId}`,
        bookingData
      )
      .then((response) => {
        setBookingData(response.data);
        alert("Booking Successful");
      })
      .catch((error) => {
        console.error("Error fetching registration:", error);
        alert("Error while booking");
      })
      .finally(() => {
        setBookingData({
          vehicleModelName: "",
          vehicleRegistrationNo: "",
          serviceDate: "",
          serviceCenter: "",
          extraServiceDesc: "",
        });
        setVehicleServiceId("");
      });
  };

  // const [doctorList, setDoctorList] = useState([]);

  // useEffect(() => {
  //     try {
  //         async function fetchData() {
  //             let response = await getAllDoctors();
  //             setDoctorList(response);
  //         }
  //         fetchData();
  //     }
  //     catch (error) {
  //         console.log(error);
  //     }
  // }, []);
  // async function bookAppointment(appData){
  ///bookService?serviceId=3&customerId=1
  //     try {
  //         console.log('bookingData',appData)
  //         const response=await axios.post(url+"/bookAppointment?patientId="+appData.patientId+"&doctorId="+appData.doctorId,appData);

  //         return response.data;
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }

  return (
    <Container>
      <UserNavigationbar />
      <Row>
        <Col sm={{ span: 6, offset: 3 }} className="mt-4">
          <Card className="shadow p-4">
            <CardBody>
              <h4 className="mb-3">😃Booking</h4>
              <Form onSubmit={SubmitForm}>
                <Form.Control
                  as="select"
                  name="serviceId"
                  value={serviceList.id}
                  onChange={handleServiceChange}
                  required
                >
                  <option value="" disabled selected>
                    Choose Services
                  </option>
                  {serviceList.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </Form.Control>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>✏Enter vehicle Model Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter vehicle Model Name"
                    name="vehicleModelName"
                    onChange={(event) =>
                      handleChange(event, "vehicleModelName")
                    }
                    value={bookingData.vehicleModelName}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>✏Enter vehicle Registration No</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter vehicle Registration No"
                    name="vehicleRegistrationNo"
                    onChange={(event) =>
                      handleChange(event, "vehicleRegistrationNo")
                    }
                    value={bookingData.vehicleRegistrationNo}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>✏Enter service Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Enter service Date"
                    name="serviceDate"
                    onChange={(event) => handleChange(event, "serviceDate")}
                    value={bookingData.bookingName}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>✏Enter service Center</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter service Center name"
                    name="serviceCenter"
                    onChange={(event) => handleChange(event, "serviceCenter")}
                    value={bookingData.serviceCenter}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>✏Enter extraServiceDesc</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter extraServiceDesc"
                    name="extraServiceDesc"
                    onChange={(event) =>
                      handleChange(event, "extraServiceDesc")
                    }
                    value={bookingData.extraServiceDesc}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Container className="text-center">
                  <Button variant="success" type="submit">
                    Submit
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
