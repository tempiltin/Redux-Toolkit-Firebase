import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Form, FormGroup, Row } from 'reactstrap';
import Helmet from '../../Components/Helmet/Helmet';
import "../../style/login.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { auth } from '../../Firebase/firebase.config';
import { storage } from "../../Firebase/firebase.config";
import { db } from '../../Firebase/firebase.config';
import { toast } from 'react-toastify';
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
const Register = () => {

  const [email, setEmail] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const signup = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const userCridential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCridential.user;

      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on((error) => {
        toast.error(error.message)
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then(
          async (downloadUrl) => {
            // Update user profile
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadUrl,
            });
            // storage user data in firestore database

            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              photoURL: downloadUrl
            })

          })
      })
      
     navigate('/login')
    } catch (error) {
      toast.error("Nimadir notug'ri ketdi")
    }
  }
  return <Helmet title={'Register'}>
    <section>
      <Container>
        <Row>
          {
            loading ? <Col lg={'12'} className={'text-center'}>
              <h5 className='fw-bold'>Loading.......</h5>
            </Col>
              : <Col lg='6' className='m-auto text-center'>
                <h3 className='fw-bold'>Sign up</h3>
                <Form className='auth_form' onSubmit={signup}>
                  <FormGroup className='form_group'>
                    <input type="text" placeholder='Enter your Username' value={username} onChange={e => setUserName(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form_group'>
                    <input type="email" placeholder='Enter your email' value={email} onChange={e => setEmail(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form_group'>
                    <input type="password" placeholder='Enter your password' value={password} onChange={e => setPassword(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='form_group'>
                    <input type="file" onChange={e => setFile(e.target.files[0])} />
                  </FormGroup>
                  <button type='submit' className="buy_btn auth_btn ">Register</button>
                  <p>Don have an account ? <Link to={'/login'}>Login</Link> </p>
                </Form>
              </Col>
          }

        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Register