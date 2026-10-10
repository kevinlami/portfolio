describe('Home page', () => {
  const sectionIds = ['about', 'skills', 'experience', 'projects', 'contact']

  beforeEach(() => {
    cy.visit('/')
  })

  it('loads the portfolio page with its main heading', () => {
    cy.get('h1').should('exist')
  })

  it('renders every portfolio section', () => {
    for (const id of sectionIds) {
      cy.get(`#${id}`).should('exist')
    }
  })

  it('navigates to sections through the header links', () => {
    for (const id of sectionIds) {
      cy.get(`nav a[href="#${id}"]`).click()
      cy.location('hash').should('eq', `#${id}`)
    }
  })

  it('exposes a skip link to the main content', () => {
    cy.get('a[href="#main-content"]').should('contain.text', 'Skip to main content')
    cy.get('#main-content').should('exist')
  })
})
