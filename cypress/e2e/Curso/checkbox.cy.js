require('@cypress/xpath')
describe('Checkbox', () => {
    it('uso de check', () => {
       //entramos a página de de prueba
       cy.visit('https://stevefaulkner.github.io/html-mapping-tests/browser-tests/checkbox-states.html');
       //hacemos que de click a todos los checkbox presentes y que mande un assert para que verifique
       //que toos fueron clickeados
       cy.get("[type='checkbox']").check().should("be.checked");
      })

    it('uso de uncheck', () => {
        //entramos a página de de prueba
        cy.visit('https://stevefaulkner.github.io/html-mapping-tests/browser-tests/checkbox-states.html');
        //hacemos que no seleccione ningun checkbox presente y que mande un assert para que verifique
        //que ninguno fue clickeado
        cy.get("[type='checkbox']").uncheck().should("not.be.checked");
     })

     it('uso de checkbox especifico', () => {
        //entramos a página de de prueba
        cy.visit('https://stevefaulkner.github.io/html-mapping-tests/browser-tests/checkbox-states.html');
        cy.wait(3000)
        //damos check a un elemento específico de la lista
        cy.xpath("(//input[contains(@type,'checkbox')])[1]").check().should("be.checked");
     })

     it.only('uso de radio buttons', () => {
        //entramos a página de de prueba
        cy.visit('www.liverpool.com.mx', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        //damos click a la parte de seleccionar tienda
        cy.get('.a-header__strongLink > .m-navDesktop__selectstore > .ml-1').click()
        //ingresamos un código postal
        cy.get('#CP').type("09319").type('{enter}')
        //damos click a la tienda indicada
        cy.xpath("(//input[contains(@class,'a-radio__input mdc-radio__native-control')])[2]").click()
        cy.log("Prueba correcta")
        //damos check a un elemento específico de la lista
        
     })
  
  
  })