require('@cypress/xpath')
require('@4tw/cypress-drag-drop')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
describe('each and for', () => {

     it('each con productos', () => {
        //entramos a página de de prueba
        cy.viewport('macbook-16')
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        cy.contains("Categorías").trigger("mouseover")
        cy.contains("Hombre").trigger("mouseover")
        cy.contains("Camisas").click()
        cy.wait(2000)
        //obtenemos el elemento para seleccionar un tipo de categoria dentro de las camisas(marca especifica)
        cy.xpath("(//input[contains(@class,'a-checkbox__input mdc-checkbox__native-control')])[6]").check().should("be.checked")
        //obtenemos la clase que tiene l descripción de los productos y asignamos la función each para obtener su contenido
        cy.get(".card-title").each(($el,index,$list)=>{
            //mandamos a imprimir el texto que trae el $el qu es la descipción del producto
            cy.log($el.text())

        })

     })

     it('each con productos', () => {
        //entramos a página de de prueba
        cy.viewport('macbook-16')
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        cy.contains("Categorías").trigger("mouseover")
        cy.contains("Hombre").trigger("mouseover")
        cy.contains("Camisas").click()
        cy.wait(2000)
        //obtenemos el elemento para seleccionar un tipo de categoria dentro de las camisas(marca especifica)
        cy.xpath("(//input[contains(@class,'a-checkbox__input mdc-checkbox__native-control')])[6]").check().should("be.checked")
        //obtenemos la clase que tiene l descripción de los productos y asignamos la función each para obtener su contenido
        cy.get(".card-title").each(($el,index,$list)=>{
            //mandamos a imprimir el texto que trae el $el qu es la descipción del producto
            cy.log($el.text())
            let camisa=$el.text()
            cy.log(camisa)

        })

     })




     it('each con productos y click', () => {
        //entramos a página de de prueba
        cy.viewport('macbook-16')
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        cy.contains("Categorías").trigger("mouseover")
        cy.contains("Hombre").trigger("mouseover")
        cy.contains("Camisas").click()
        cy.wait(2000)
        //obtenemos el elemento para seleccionar un tipo de categoria dentro de las camisas(marca especifica)
        cy.xpath("(//input[contains(@class,'a-checkbox__input mdc-checkbox__native-control')])[6]").check().should("be.checked")
        cy.get(".card-title").each(($el,index,$list)=>{
            //declaramos la variable camisa y le asignamos el valor que contiene $el en forma de texto
            let camisa=$el.text()
            //hacemos un condicional para ver si hay un elemento que contenga siguiente texto
            if (camisa.includes("Camisa de vestir Jbe de algodón manga larga para hombre"))
            {
                //damos click al producto que cumple con la descripción del condicional if
                cy.get('[data-prodid="1127550691"] > a > .m-plp-card-container > .m-figureCard__figure > .m-figureCard__figcaption > .d-flex > .card-title').click({force: true})
            }
            else
            {
                cy.log("el producto " + camisa +  " no corresponde con los terminos de la busqueda solicitada")
            }

        })

     })

     it.only('each con productos y agregar al carro', () => {
        //entramos a página de de prueba
        cy.viewport('macbook-16')
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        cy.contains("Categorías").trigger("mouseover")
        cy.contains("Hombre").trigger("mouseover")
        cy.contains("Camisas").click()
        cy.wait(2000)
        //obtenemos el elemento para seleccionar un tipo de categoria dentro de las camisas(marca especifica)
        //cy.xpath("(//input[contains(@class,'a-checkbox__input mdc-checkbox__native-control')])[6]").check().should("be.checked")
        //declaramos que el for tome 5 posiciones
        for (let x=0; x<=5; x++)
        {            
            //obtiene el elemento que despliega la descripción del producto y va pasando 1x1 dando click dependiendo dl valor de la variable x
            cy.get(".card-title").eq(x).click({force:true}).then((e)=>{
                let camisa=e.text()
            cy.log("la posición " + x + " corresponde al producto: " + camisa)
            
            })
        }
    })
        it('each con productos y agregar al carro n cantidad', () => {
            //entramos a página de de prueba
            Cypress.config('requestTimeout	', 100000)
            cy.viewport('macbook-16')
            cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
            cy.contains("Categorías").trigger("mouseover")
            cy.contains("Hombre").trigger("mouseover")
            cy.contains("Camisas").click()
            cy.wait(2000)
            for (let x=0; x<=1; x++)
            {
                //obtiene el elemento que despliega la descripción del producto y va pasando 1x1 dando click dependiendo dl valor de la variable x
                cy.wait(5000)
                cy.get(".card-title").eq(x).click({force:true})
                cy.wait(5000)
                cy.get(".bt_select_state").click({force:true})
                cy.wait(5000)
                cy.get('#filters-storeLocator-storeInformation > .modal-dialog > .modal-content > .modal-body > :nth-child(1)').click({force:true})
                cy.wait(5000)
                cy.get('#opc_pdp_addCartButton').click({force:true})
                cy.contains("Categorías").trigger("mouseover")
                cy.contains("Hombre").trigger("mouseover")
                cy.contains("Camisas").click({force:true})
                cy.log( x + " completado")
                
            }
            
            cy.get('.a-header__bag').click({force:true})
            cy.log("prueba finalizada")
            cy.visit('https://www.liverpool.com.mx/tienda/cart', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}}); 
         })

         it('each click a productos declarando cantidad de elementos', () => {
            //entramos a página de de prueba
            cy.viewport('macbook-16')
            cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
            cy.contains("Categorías").trigger("mouseover")
            cy.contains("Hombre").trigger("mouseover")
            cy.contains("Camisas").click()
            cy.wait(2000)
            //declaramos una constante que guarde el valor de un arreglo que contenga la cantidad de productos a dar click
            const datos=[]
            //obtenemos el elemento que despliega la descripcion de los productos
            cy.get(".card-title").each(($el,index,$list)=>{
                //a la variable datos le poneos que su arreglo sea igual a la cantidad de productos(index) y lo lea como texto
                datos[index] = $el.text()
            }).then(()=>{
            
            for (let x=0; x<=datos.length; x++)
            {
                cy.get(".card-title").eq(x).click({force:true})
                cy.wait(3000)
                //cy.get('.bt_select_state').click({force:true})
                //cy.wait(3000)
                //cy.get('#filters-storeLocator-storeInformation > .modal-dialog > .modal-content > .modal-body > :nth-child(1)').click({force:true})
                //cy.wait(3000)
                //cy.get('#opc_pdp_addCartButton').click({force:true})
                cy.contains("Categorías").trigger("mouseover")
                cy.contains("Hombre").trigger("mouseover")
                cy.contains("Camisas").click({force:true})
                cy.log(x + " completado")
            
            }
            
            cy.get('.a-header__bag > span').click({force:true})
         })
        })

        

     it('prueba de agregar producto a carro talla ch', () => {
        //entramos a página de de prueba
        cy.viewport('macbook-16')
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        cy.contains("Categorías").trigger("mouseover")
        cy.contains("Hombre").trigger("mouseover")
        cy.contains("Camisas").click({force:true})
        cy.wait(2000)
        cy.xpath("(//input[contains(@class,'a-checkbox__input mdc-checkbox__native-control')])[6]").check().should("be.checked")
        cy.wait(2000)
        cy.get('#img_0').click({force:true})
        cy.wait(2000)
        cy.get('#size-list-container > :nth-child(1) > .a-btn').click({force:true})
        cy.contains("CH").click({force:true})
        cy.get('#opc_pdp_addCartButton').click({force:true})

     })
})