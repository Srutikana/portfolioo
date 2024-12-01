import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title}  style={{ width: '500px', height: '300px' }}  />
          <div className="proj-txtx">
          <h4 style={{ color: 'white' }}>{title}</h4>
          <span style={{ color: 'white' }}>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}
