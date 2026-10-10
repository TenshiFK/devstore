describe('search products', () => {
//   beforeEach(() => {
//     cy.visit('/')
//   })
  
  it('navigate to search page and search for products', () => {
    cy.searchByQuery('moletom')

    cy.location('pathname').should('include', '/search')
    cy.location('search').should('include', 'q=moletom')

    cy.get('a[href^="/product/"]').should('exist')
  })

  it('not able to visit search page without search query', () => {
    cy.on('uncaught:exception', () => {
      return false
    })

    cy.visit('/search')

    cy.location('pathname').should('equal', '/')

  })


})
