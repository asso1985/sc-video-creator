import './plans.scss';
import React, { useState } from "react";
import { Container, Row, Col } from 'react-grid-system';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'components/button';
import Text from 'components/text';
import PLANS from './plans.json';

import { ReactComponent as Tick } from 'assets/tick.svg';
import { ReactComponent as Close } from 'assets/close.svg';

const Plan = ({ plan, active, onSelectPlan }) => {
  const { features, name, price, cta } = plan;

  const cs = classNames('scv-plan', {
    [`active`]: active
  });

  const textVariant = !active ? 'dark' : 'light';

  return (
    <div className={cs} onClick={onSelectPlan}>
      <div>
        <div>
          <Text size='lg' variant={textVariant} bold>{name}</Text>
        </div>
        <ul>
          {features.map((feature) => (
            <li key={feature.name}>
              {feature.available ? <Tick /> : <Close />}
              <Text variant={textVariant}>{feature.name}</Text>
            </li>
          ))}
        </ul>
        <div>
          <Text size='sm' variant={textVariant} bold>$</Text><Text variant={textVariant} size='lg' bold>{price}</Text>
        </div>
      </div>
      <footer>
        {!active ? <Button variant='tertiary' full={true}>{cta}</Button> : <Text variant={'dark'} size='lg' bold>Current plan</Text>}
      </footer>
    </div>
  );
};

Plan.propTypes = {
  onSelectPlan: PropTypes.func,
  active: PropTypes.bool,
  plan: PropTypes.shape({
    price: PropTypes.number,
    name: PropTypes.string,
    cta: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      available: PropTypes.bool
    }))
  })
};

const Plans = () => {
  const [currentPlanId, setCurrentPlanId] = useState(2);

  const currentPlanIndex = PLANS.map((plan, i) => plan.id).indexOf(currentPlanId);

  return (
    <div className="scv-plans">
      <Container fluid style={{ margin: '0 -15px' }}>
        <Row>
          {PLANS.map((plan, i) => {
            const cta = i > currentPlanIndex ? 'Updgrade' : 'Downgrade';
            return (
              <Col key={i} xs={12} md={6} lg={3}><Plan plan={{ ...plan, cta }} active={plan.id === currentPlanId} onSelectPlan={() => setCurrentPlanId(plan.id)} /></Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Plans;
