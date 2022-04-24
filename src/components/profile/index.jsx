import './profile.scss';
import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import Form from 'components/form';
import Button from 'components/button';
import ButtonIcon from 'components/button-icon';
import FormField from 'components/form-field';
import { ReactComponent as User } from 'assets/user.svg';

const Profile = () => {
  return (
    <Form onSubmit={() => {}}>
      <Container fluid style={{ margin: '0 -15px' }}>
        <Row>
          <Col>
            <div className="scv-avatar-picker">
              <User width={100} height={100} />
              <ButtonIcon size="sm" icon='edit' />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={3}>
            <FormField label="First Name">
              <input name="first_name" type="text" placeholder="First Name"/>
            </FormField>
          </Col>
          <Col xs={12} md={3}>
            <FormField label="Last Name">
              <input name="last_name" type="text" placeholder="Last Name"/>
            </FormField>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={3}>
            <FormField label="Email">
              <input name="email" type="email" placeholder="Email" />
            </FormField>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={3}>
            <Button variant="primary">Save Changes</Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default Profile;
