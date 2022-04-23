describe('Create video', () => {

  const testCreateVideo = () => {
    it('User should be able to create a video', () => {
      cy.visit('http://localhost:7000/', true);
      cy.location('pathname').should('eq', '/create-video');
      cy.contains('Choose a name').click();
      cy.contains('marketing').click();
      cy.findByPlaceholderText('Choose a name').focus().clear().type('Test');
      cy.contains('Save').click();
      cy.contains('Yoyo').click();
      cy.contains('Voice').click();
      cy.contains('British').click();
      cy.contains('Alignment').click();
      cy.contains('center').click();
      cy.contains('Save').click();
      cy.location('pathname').should('eq', '/browse');
    });
  };

  const testAbortTitleUpdate = () => {
    it('If user hits cancel while changing title it does not change title', () => {
      cy.visit('http://localhost:7000/', true);
      cy.location('pathname').should('eq', '/create-video');
      cy.contains('Choose a name').click();
      cy.findByPlaceholderText('Choose a name').focus().clear().type('Test');
      cy.findByTestId('video-infos-dropdown').within(() => {
        cy.contains('cancel').click();
      });

      cy.contains('Choose a name').should('exist');
    });
  };

  context('Mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-se2');
    });

    testCreateVideo();
    testAbortTitleUpdate();
  });

  context('Desktop', () => {
    beforeEach(() => {
      cy.viewport('macbook-15');
    });

    testCreateVideo();
    testAbortTitleUpdate();

  });
});

