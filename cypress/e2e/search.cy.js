describe('Search', { jiraKey: 'SWCRM-3979' }, () => {
  beforeEach(() => {
    cy.gotoSearchPage()
  })

  it('should return search results', () => {
    cy.searchFor('cypress')

    cy.getSearchResults().should('have.length.at.least', 1)
  })

  it('unfound search term should return no results message', () => {
    cy.searchFor('sfdslkjsfkjslkdf')

    cy.noSearchResults().should('be.visible')
  })
})