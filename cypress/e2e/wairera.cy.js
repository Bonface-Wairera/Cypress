describe('Login validations', () => {
  beforeEach(()=>{
    cy.visit('/manager-login')
  })
  it('User is able to Login with valid credentials', () => {
    cy.contains('Login with your credentials');
    cy.get('#username').type('api_qaautomation1@kokonetworks.com');
    cy.get('#password').type('KoKo@1234');
    cy.wait(5000);
    cy.get('[type="submit"]').should('have.text', 'Login').click(15, 40);
    cy.reload(true);
    cy.url().should('contain', '/admin');
    
  })
  it.skip('User is able to click on Signin with google', () => {
    cy.get('.btn-text').contains('Sign in with Google').click();
    
  })
})