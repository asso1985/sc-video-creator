describe('My Account', () => {

  const testProfile = () => {
    it('User should be able to visit Profile', () => {
      cy.visit('http://localhost:7000/my-account', true);
      cy.location('pathname').should('eq', '/my-account');
      cy.findByText('First Name').should('be.visible');
      cy.findByText('Last Name').should('be.visible');
      cy.findByText('Email').should('be.visible');
    });
  };

  const testPlan = () => {
    it('User should be able to visit My plan', () => {
      cy.visit('http://localhost:7000/my-account', true);
      cy.findByText('My Plan').click();
      cy.findByText('Free').should('be.visible');
      cy.findByText('Pro').should('be.visible');
      cy.findByText('Team').should('be.visible');
      cy.findByText('Agency').should('be.visible');
    });
  };

  const testBilling = (scroll) => {
    it('User should be able to visit Billing', () => {
      cy.visit('http://localhost:7000/my-account', true);
      cy.findByText('Billing').click();
      cy.findByText('Reference ID').should('be.visible');
      cy.findByText('Date').should('be.visible');
      cy.findByText('Amount').should('be.visible');
      if (scroll) {
        cy.get('.scv-billing').scrollTo('right');
      }

      cy.findByText('Invoice').should('be.visible');
    });
  };

  context('Mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-se2');
    });

    testProfile();
    testPlan();
    testBilling(true);
  });

  context('Desktop', () => {
    beforeEach(() => {
      cy.viewport('macbook-15');
    });

    testProfile();
    testPlan();
    testBilling(false);
  });
});


