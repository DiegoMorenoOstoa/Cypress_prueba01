class Proyecto01{
    inicio_sesion(){
        //damos click en iniciar sesion
        cy.get('.order-lg-4 > .a-header__topLink').click({force:true})
        cy.get('#username').type('diego123@gmail.com')
        cy.get('#password').type('1234')
        cy.contains('Iniciar sesión').click({force:true})
    }
    inicio_sesion02(email,password){
            cy.get('.order-lg-4 > .a-header__topLink').click({force:true})
            cy.get('#username').type(email)
            cy.get('#password').type(password)
            cy.contains('Iniciar sesión').click({force:true})
    }
    buscar_sku(sku){
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        cy.get("#mainSearchbar").should("be.visible").and("have.class","form-control search-bar plp-no__results").type(sku).type("{enter}")
        cy.wait(4000)
        cy.get('#opc_pdp_addCartButton').click({force:true})
        cy.contains('No contamos con el inventario suficiente').then((valor)=> {
            let dato=valor.text()
            cy.log(dato)
            let mensaje="No contamos con el inventario suficiente"
            cy.log(dato)
            expect(dato).to.equal(mensaje)
            if(dato==mensaje)
            {
                cy.log("no existe inventario del producto")
            }
            else{
                cy.log("si existe inventario del producto")
            }
        })
        cy.Carrito_compra_liverpool()
    }
    before_visit(){
        cy.viewport('macbook-16')
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
    }
}

export default Proyecto01