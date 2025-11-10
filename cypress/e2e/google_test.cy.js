// test suite name
describe.only('Google Search Functionality', () => {
  it('should return search results for a valid query', () => {
    // launch google in browser
    cy.visit('https://www.google.com');
  });
});