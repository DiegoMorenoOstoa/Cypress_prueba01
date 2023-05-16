require('@cypress/xpath')
describe('select', () => {
    it('uso de select a un elemento', () => {
       //entramos a página de de prueba
       cy.visit("https://www.softwaretestingo.com/dropdown-test-cases/")
       //seleccionamos el elemento elegido de la lista
       cy.get('#cat').should("be.visible").select("GIT").should("have.value","280")
      })
      it('uso de select a un elemento con then', () => {
        //entramos a página de de prueba
        cy.visit("https://www.softwaretestingo.com/dropdown-test-cases/")
        //seleccionamos el elemento elegido de la lista y si se cumple que realie una acción
        cy.get('#cat').should("be.visible").select("GIT").should("have.value","280").then(()=>
        cy.get('#onesignal-slidedown-container'))
       })

       it.only('reto de select', () => {
        //entramos a página de de prueba
        cy.visit("https://www.virtuosoft.eu/code/bootstrap-duallistbox/")
        //seleccionamos el elemento elegido de la lista y si se cumple que realie una acción
        //cy.get('#bootstrap-duallistbox-nonselected-list_duallistbox_demo1\[\] > [value="option1"]').should("be.visible").select("option1")
        cy.xpath("(//select[@multiple='multiple'][contains(@id,'demo1[]')])[1]").should("be.visible").select(["option1","option2"])
    })

})