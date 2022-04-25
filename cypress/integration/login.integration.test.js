describe('Login', () => {

  const testLogin = () => {

    it('User should be able to login', () => {
      cy.visit('http://localhost:7000/');
      cy.findByPlaceholderText('Email').type('email@gmail.com');
      cy.findByPlaceholderText('Enter Password').type('password');
      cy.contains('Login').click();
      cy.location('pathname').should('eq', '/create-video');
    });
  };

  const testDisabledLogin = () => {

    it('Login button should be disabled', () => {
      cy.visit('http://localhost:7000/');
      cy.findByPlaceholderText('Email').type('not_valid_email@gmail.').blur();
      cy.contains('Email address is required');
      cy.findByPlaceholderText('Enter Password').focus().blur();
      cy.contains('Password is required');
    });
  };

  const testLogout = () => {
    it('User should be able to logout', () => {
      cy.visit('http://localhost:7000/', true);
      cy.findByTestId('user-icon').click();
      cy.contains('Sign out').click();
      cy.location('pathname').should('eq', '/login');
    });
  };

  context('Mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-se2');
    });

    testLogin();
    testLogout();
    testDisabledLogin();
  });

  context('Desktop', () => {
    beforeEach(() => {
      cy.viewport('macbook-15');
    });

    testLogin();
    testLogout();
    testDisabledLogin();
  });
});
