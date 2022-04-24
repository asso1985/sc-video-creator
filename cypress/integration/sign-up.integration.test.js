describe('Sign Up', () => {

  const testSignUp = () => {
    it('User should be able to sign up', () => {
      cy.visit('http://localhost:7000/');
      cy.findByText('Sign Up').click();
      cy.location('pathname').should('eq', '/sign-up');
      cy.findByPlaceholderText('Full Name').type('John Doe');
      cy.findByPlaceholderText('Email').type('email@gmail.com');
      cy.findByPlaceholderText('Enter Password').type('password');
      cy.get('button[type=submit]').click();
      cy.location('pathname').should('eq', '/create-video');
    });
  };

  const testDisabledSignUp = () => {

    it('Sign up button should be disabled if no valid email is given', () => {
      cy.visit('http://localhost:7000/sign-up');

      cy.findByPlaceholderText('Full Name').type('John Doe');
      cy.findByPlaceholderText('Email').type('not_valid_email@gmail.').blur();
      cy.findByPlaceholderText('Enter Password').type('password');

      cy.get('button[type=submit]').should('be.disabled');
    });
  };

  context('Mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-se2');
    });

    testSignUp();
    testDisabledSignUp();
  });

  context('Desktop', () => {
    beforeEach(() => {
      cy.viewport('macbook-15');
    });

    testSignUp();
    testDisabledSignUp();
  });
});

