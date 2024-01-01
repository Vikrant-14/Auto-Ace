import { Container, Form, Button, Row, Col, CardBody,Card } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";


const initialValues={
    name:"",
    email:"",
    password:"",
};
export const adminRegisterSchema=Yup.object({
    name:Yup.string().min(2).max(50).required("please enter your first name"),
    email:Yup.string().email().required("please enter your email"),
    password:Yup.string().min(8).required("please enter your password")
});
export const AdminRegistration=()=> {

    const {values,errors,touched,handleBlur,handleChange,handleSubmit}= 
    useFormik({
        initialValues:initialValues,
        validationSchema:adminRegisterSchema,

        onSubmit:(values,action)=>{
            console.log( values);
            action.resetForm();
        },
    });
   console.log(errors);
   



 return (
        <Container>
            <Row>
                <Col sm={{span:6,offset:3}} className="mt-4">
                    <Card className="shadow p-4">
                        <CardBody>
                            <h4 className="mb-3">Admin Registration</h4>
                            <Form onSubmit={handleSubmit}>
                
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter first name" name="name"
                            values={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}   
                            />                         
                        </Form.Group>
                        {errors.name && touched.name?<p className="form-error">{errors.name}</p>:null}

                    
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email address" name="email" 
                            values={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}  />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        {errors.email && touched.email?<p className="form-error">{errors.email}</p>:null}
                
                        
                
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"  name="password"
                            values={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}  />
                        </Form.Group>
                        {errors.password && touched.password?<p className="form-error">{errors.password}</p>:null}
                

                <Button variant="success" type="submit">
                    Register
                </Button>
            </Form>

                        </CardBody>
                    </Card>
                </Col>
            </Row>
            
        </Container>
    );
}