describe('add product to cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('navigate to product page and add to cart', () => {
    cy.get('a[href^="/product/"]').first().click()

    //cy.url().should('include', '/product/')
    cy.location('pathname').should('include', '/product/')

    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart [1]').should('exist')
  })

  it('Not count duplicated products', () => {
    cy.get('a[href^="/product/"]').first().click()

    //cy.url().should('include', '/product/')
    cy.location('pathname').should('include', '/product/')

    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart [1]').should('exist')
  })

  it('navigate to search page and add to cart', () => {
    cy.get('input[name="q"]').type('moletom').parent('form').submit()

    cy.location('pathname').should('include', '/search')

    cy.get('a[href^="/product/"]').first().click()

    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart [1]').should('exist')
  })
})
