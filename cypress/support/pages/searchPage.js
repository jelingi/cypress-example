Cypress.Commands.add('gotoSearchPage', () => {
  // Uses base url path from cypress..config.js
  cy.visit('?search')
})

Cypress.Commands.add('searchFor', (text) => {
  cy.get('#search').type(text)
  cy.get('[type="submit"]').click()
})

Cypress.Commands.add('getSearchResults', () => {
  return cy.get('.post')
})

Cypress.Commands.add('noSearchResults', () => {
  return cy.get('#no-results')
})