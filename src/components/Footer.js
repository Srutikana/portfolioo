import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
                <a href="https://www.linkedin.com/in/srutikana-das-aa4809253" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a> 
                 <div className="social-icon">
                  <a href="https://github.com/Srutikana" target="_blank" rel="noopener noreferrer">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.42 5.47 15.54C5.87 15.62 6 15.38 6 15.17V13.77C3.96 14.17 3.47 13.05 3.47 13.05C3.13 12.3 2.63 12.11 2.63 12.11C1.95 11.69 2.68 11.69 2.68 11.69C3.42 11.75 3.8 12.43 3.8 12.43C4.47 13.45 5.62 13.12 6.04 12.94C6.12 12.44 6.33 12.12 6.55 11.94C4.78 11.76 2.92 11.08 2.92 7.92C2.92 7.02 3.24 6.32 3.74 5.78C3.66 5.6 3.38 4.7 3.82 3.54C3.82 3.54 4.5 3.32 6 4.34C6.66 4.13 7.36 4.05 8.06 4.05C8.76 4.05 9.46 4.13 10.12 4.34C11.62 3.32 12.3 3.54 12.3 3.54C12.74 4.7 12.46 5.6 12.38 5.78C12.88 6.32 13.2 7.02 13.2 7.92C13.2 11.09 11.34 11.76 9.57 11.94C9.88 12.2 10.14 12.68 10.14 13.44V15.17C10.14 15.38 10.27 15.63 10.68 15.54C13.86 14.42 16.14 11.54 16.14 8C16.14 3.58 12.42 0 8 0Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}