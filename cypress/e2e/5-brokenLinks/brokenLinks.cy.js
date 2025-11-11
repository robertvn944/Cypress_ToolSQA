describe('Test Navigation', () => {
  it('can navigate and test the pages', () => {
    cy.visit('https://www.testing.com/at-home-coronavirus-testing/');
 
    cy.get('main:contains("Testing")');
    cy.go('back');
 
   cy.visit('https://www.testing.com/paying-for-covid-19-testing/');
   cy.get('main:contains("Test")');
   cy.go('back');
 
   cy.visit('https://www.testing.com/covid-19-antibody-testing/');
   cy.get('main:contains("Testing")');
   cy.go('back');
 
 
   cy.visit('https://www.testing.com/covid-19-testing-statistics/');
   cy.get('main:contains("Testing")');
   cy.go('back');
  
  });
});