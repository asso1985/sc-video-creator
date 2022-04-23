describe('Sign Up', () => {
  beforeEach(() => {
    cy.viewport('macbook-15');
  });

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
});

