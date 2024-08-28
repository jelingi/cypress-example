import searchPage from '../pages/Search/searchPage'


describe('Search',{ jiraKey: 'SWCRM-3979' }, () => {
  beforeEach(() => {
    searchPage.goto()
  })

  it('should return search results', () => {
    searchPage.searchFor('cypress')

    searchPage.results().should('have.length.at.least', 1)
  })

  it('unfound search term should return no results message', () => {
    searchPage.searchFor('sfdslkjsfkjslkdf')

    searchPage.noResults().should('be.visible')
  })
})
