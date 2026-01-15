import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import StartShip from '../components/StartShip'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="d-flex flex-column align-items-center justify-content-center text-center py-5 px-3">
        <h1 className="fw-bold">
          Need Any Help? <br /> Contact Us
        </h1>
        <p style={{ maxWidth: '700px' }}>
          Have questions or need assistance with your shipments? Our team is ready
          to help! Whether you're looking for information on our services,
          tracking a package, or need support with your logistics needs, we're
          just a message away.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-5" style={{ backgroundColor: '#ebebebff' }}>
        <div className="container">
          <div className="row g-4 align-items-center">
            {/* FAQ Card */}
            <div className="col-12 col-md-5">
              <Card className="p-3 mx-auto" style={{ maxWidth: '350px' }}>
                <Card.Header>More FAQs</Card.Header>
                <Card.Text>
                  Have more questions? <span className="fw-bold">Contact Us</span>
                </Card.Text>
              </Card>
            </div>

            {/* Form */}
            <div className="col-12 col-md-7">
              <Form className="p-4 rounded bg-white shadow-sm">
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your full name" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Your Message" />
                </Form.Group>

                <Button
                  type="submit"
                  style={{ backgroundColor: '#ff8000ff', border: 'none', width: '100%' }}
                >
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </section>

      <StartShip />
      <Footer />
    </div>
  )
}

export default Contact
