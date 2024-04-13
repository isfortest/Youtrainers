describe('YoutrainersUrl.cy.js', () => {
    it('visit staging.youtrainers.com', () => {
      cy.visit("/");
      cy.get('button[class$=\'ng-star-inserted\'] span[class=\'mat-button-wrapper\']').click();
      cy.get('#mat-input-1').type('testeur.tester0@gmail.com');
      cy.get('#mat-input-2').type('Testeur00@');
      cy.get('.mat-icon.ng-star-inserted').click();
      cy.get('.mat-dialog-actions').find('button').last().should('not.be.disabled');
    })
})