describe('Login', () => {
  beforeEach(() => {
    cy.viewport('macbook-15');
  });

  it('User should be able to login', () => {
    cy.visit('http://localhost:7000/');
    cy.findByPlaceholderText('Email').type('email@gmail.com');
    cy.findByPlaceholderText('Enter Password').type('password');
    cy.contains('Login').click();
    cy.location('pathname').should('eq', '/create-video');
  });
});
