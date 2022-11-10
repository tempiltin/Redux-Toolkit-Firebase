import { Container } from "reactstrap"
import "../style/common-section.css"
const CommonSection = ({title}) => {
  return <section className="common_section">
     <Container className="text-center">
       <h1>{title}</h1>
     </Container>
  </section>
}

export default CommonSection 