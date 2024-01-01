import { Row,Container,Col, Card, CardBody, FormControl } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import UserNavigationbar from "./UserNavigationbar";
export default function UserFeedback()
{
return(
    <Container>
        <UserNavigationbar/>
        <Row>
            <Col sm={{span:8,offset:2}} className="mt-4">
                <Card className="shadow p-4">
                    <CardBody>
                        <h4 className="mb-3">⭐Fill Feedback Form⭐</h4>
                        <Form className="mb-3">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Enter Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your first Name" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Enter Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your Last Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Enter Mobile No</Form.Label>
                        <Form.Control type="number" placeholder="Enter your Last Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Service Center Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter the service center name" />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Your Comments</Form.Label>
                            <FormControl as={'textarea'} rows={6} placeholder="write here"/>
                        </Form.Group>

                        <p className="text-center">✌️"We are here with you✌️"</p>
                        </Form>
                        <Container className="text-center">
                            <Button variant="success">Submit</Button>
                        </Container>
                    </CardBody>
                </Card>
            </Col>
          </Row>
</Container>
    )
}