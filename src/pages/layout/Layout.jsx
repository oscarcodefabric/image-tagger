import PropTypes from 'prop-types'
import { Container, Col, Row } from 'react-bootstrap'

import Nav from './components/navbar/Navbar'

const Layout = ({ children }) => (
  <>
    <Nav />
    <Container fluid>
      <Row>
        <Col xs={12} id="page-content-wrapper">
          <Container fluid>{children}</Container>
        </Col>
      </Row>
    </Container>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
