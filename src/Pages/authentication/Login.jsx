import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Col, Container, Form, FormGroup, Row } from 'reactstrap'
import Helmet from '../../Components/Helmet/Helmet'
import "../../style/login.css"
// firebasedan 
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";
import { toast } from "react-toastify";
const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const signInMethod = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword( auth, email, password);
      const user = userCredential.user;
      console.log(user);
      setLoading(false);
      toast.success("Successfully logged in ");
      navigate('/checkout')
    } catch (error) {
      setLoading(false);
      toast.error(error.message)
    }
  }
  return <Helmet title={'Login'}>
    <section>
      <Container>
        <Row>
          {
            loading ?
              <Col lg={'12'} className={'text-center'}>
                <h5 className='fw-bold'>Loading.......</h5>
              </Col>
              : <Col lg='6' className='m-auto text-center'>
                <h3 className='fw-bold'>Login</h3>
                <Form className='auth_form' onSubmit={signInMethod}>
                  <FormGroup className='form_group'>
                    <input type="email" placeholder='Enter your email' value={email} onChange={e => setEmail(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form_group'>
                    <input type="password" placeholder='Enter your password' value={password} onChange={e => setPassword(e.target.value)} />
                  </FormGroup>
                  <button type='submit' className="buy_btn auth_btn ">Login</button>
                  <p>Don't have an account ? <Link to={'/sign-up'}>create an account</Link> </p>
                </Form>
              </Col>
          }
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Login