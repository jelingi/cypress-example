Cypress.Commands.add('gotoHomePage', () => {
  // Uses base url path from cypress..config.js
  cy.visit('')
})

Cypress.Commands.add('getHomePagePosts', () => {
  return cy.get('.post-title')
})

Cypress.Commands.add('homePagePostTitleExists', (postTitle) => {
  return cy.get('.post-title').contains(postTitle)
})

Cypress.Commands.add('findPostByLoadingMore', (postTitle) => {
  function loadMore() {
    cy.get('#load-more').click()
    cy.get('.post-title').contains(postTitle).then(($post) => {
      if ($post.length === 0) {
        loadMore()
      }
    })
  }
  loadMore()
})