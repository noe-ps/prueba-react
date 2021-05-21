import React from 'react'
import { Card, ListGroup, Row, Col} from 'react-bootstrap';


const UserCard = ({profile}) => {
    console.log(profile)
    return (
      <Row>
        <Col>
          <Card border="info border-top-0 border-left-0" style={{ width: "18rem"}}>
            <Card.Img variant="top" src={profile.avatar_url} />
            <Card.Body className="bg-dark">
              <Card.Title>{profile.login}</Card.Title>
              <Card.Text>
                {profile.bio}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card className="" border="info border-top-0 border-left-0" style={{ width: "18rem"}}>
          <Card.Body className="bg-dark">
            <Card.Title>Stats</Card.Title>
            <ListGroup variant="flush"  >
              <ListGroup.Item className="bg-dark ">Repos: {profile.public_repos}</ListGroup.Item>
              <ListGroup.Item className="bg-dark">Followers: {profile.followers}</ListGroup.Item>
              <ListGroup.Item className="bg-dark">Location: {profile.location}</ListGroup.Item>
              <ListGroup.Item className="bg-dark">Mail: {profile.email}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
        </Row>
    );
}

export default UserCard
