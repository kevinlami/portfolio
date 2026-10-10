describe('Home page', () => {
  it('loads the portfolio page with its main heading', () => {
    cy.visit('/')

    cy.get('h1').should('contain.text', 'Portfolio')
  })
})
