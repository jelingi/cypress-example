import homePage from '../pages/HomePage/homePage'

describe('Home Page', () => {
  beforeEach(() => {
    homePage.goto()
  })

  it('should find an older post by loading more', { jiraKey: 'SWCRM-3979' },() => {
    const postTitle = 'Cypress.io Review'
    homePage.findPostByLoadingMore(postTitle)

    homePage.postTitleExists(postTitle).should('be.visible')
  })

  it('should display 7 posts per page', async () => {
    homePage.posts().should('have.length', 7)
  })
})
