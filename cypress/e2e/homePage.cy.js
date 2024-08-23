describe('Home Page', () => {
  beforeEach(() => {
    cy.gotoHomePage()
  })

  it('should find an older post by loading more', { jiraKey: 'SWCRM-3979' }, () => {
    cy.origin('https://app.featrix.com', () => {
      Cypress.require('../support/pages/homePage')
      const postTitle = 'Cypress.io Review'
      cy.findPostByLoadingMore(postTitle)

      cy.homePagePostTitleExists(postTitle).should('be.visible')
    })
  })

  it('should display 7 posts per page', async () => {
    cy.getHomePagePosts().should('have.length', 7)
  })
})