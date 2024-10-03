import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

function ReservationForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="container p-5">
      <h2 className="text-center mt-3 mb-4">Feedback</h2>
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formEmail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formPhone">
              <Form.Label>Your phone number</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formRating">
              <Form.Label>Rating</Form.Label>
              <div>
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;
                  return (
                    <label key={index}>
                      <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                        style={{ display: "none" }}
                      />
                      <FaStar
                        className="star"
                        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                        size={30}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(0)}
                        style={{ cursor: "pointer" }}
                      />
                    </label>
                  );
                })}
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formTextArea">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your feedback"
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="warning" type="submit">
          Send Message
        </Button>
      </Form>
    </div>
  );
}

export default ReservationForm;
