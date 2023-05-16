
require('@cypress/xpath')
require('@4tw/cypress-drag-drop')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('tablas', () => {

     it('elementos de una tabla children', () => {
        cy.viewport('macbook-16')
        //visitamos la página de la categoria hombre
        cy.visit('https://www.liverpool.com.mx/tienda/hombre/cat5020003', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        //seleccionamos el boton que contenga la palabra mochilas y damos click
        cy.get(".btn-cat").children(".m-mainBanner__link").should("contain","MOCHILAS").contains("MOCHILAS").click({force:true})
        //visitamos la página de la categoria hombre
        cy.visit('https://www.liverpool.com.mx/tienda/hombre/cat5020003', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        //seleccionamos el boton que contenga la palabra joyería y damos click
        cy.get(".btn-cat").children(".m-mainBanner__link").should("contain","JOYERÍA").contains("JOYERÍA").click({force:true})
        })
        it('elementos de una tabla con should', () => {
            cy.viewport('macbook-16')
            //visitamos la página
            cy.visit("https://getbootstrap.com/docs/5.3/components/collapse/")
            //nos posicionamos en el elemento del boton que contenga la palabra "link with href y damos click en el"
            cy.xpath("(//a[contains(@class,'btn btn-primary')])[1]").should("contain","Link with href").click({force:true})
            //nos posicionamos en el elemento del boton que contenga la palabra "button with data-bs-target y damos click en el"
            cy.xpath("(//button[contains(@class,'btn btn-primary')])[1]").should("contain","Button with data-bs-target").click({force:true})
            })

         it('elementos de una tabla con filtrer', () => {
            cy.viewport('macbook-16')
            cy.visit("https://getbootstrap.com/docs/5.3/components/collapse/")
            //nos posicionamos en el elemento del boton que contenga la palabra "link with href" haciendo un filtro de su clase y damos click en el
            cy.xpath("(//a[contains(@class,'btn btn-primary')])[1]").filter(".btn-primary").should("contain","Link with href").click({force:true})
            })

         it('elementos de una tabla con find', () => {
            cy.viewport('macbook-16')
            //visitamos la página de la categoria hombre
            cy.visit('https://www.liverpool.com.mx/tienda/hombre/cat5020003', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
            //seleccionamos el boton que contenga la palabra mochilas, que encuentre una clase especifica y damos click
            cy.get(".btn-cat").find(".m-mainBanner__link").should("contain","MOCHILAS").contains("MOCHILAS").click({force:true})
            
            })
        it('elementos de una tabla con first', () => {
            cy.viewport('macbook-16')
            //visitamos la página de la categoria hombre
            cy.visit('https://www.liverpool.com.mx/tienda/hombre/cat5020003', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
            //seleccionamos el boton que contenga la palabra mochilas, que tome el primer valor (first) y damos click
            cy.get(".btn-cat").first().should("contain","MOCHILAS").contains("MOCHILAS").click({force:true})
            
            })

        it('elementos de una tabla con last', () => {
            cy.viewport('macbook-16')
            //visitamos la página de la categoria hombre
            cy.visit('https://www.liverpool.com.mx/tienda/hombre/cat5020003', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
            //seleccionamos el boton que contenga la palabra trajes de baño, que tome el ultimo valor (last) y damos click
            cy.get(".btn-cat").last().should("contain","TRAJES DE BAÑO").contains("TRAJES DE BAÑO").click({force:true})
            })
        it('elementos de una tabla con NextAll', () => {
            cy.viewport('macbook-16')
            //visitamos la página de la categoria hombre
            cy.visit('https://www.liverpool.com.mx/tienda/hombre/cat5020003', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
            //seleccionamos el boton que contenga la palabra mochilas, que tome todo a lado de el y damos click
            cy.get(".m-mainBanner__link").should("contain","MOCHILAS").nextAll().click()
            
            })

     it('clase padre de un elemento con parent', () => {
            cy.viewport('macbook-16')
            //visitamos la página de la categoria hombre
            cy.visit('https://www.liverpool.com.mx/tienda/hombre/cat5020003', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
            //seleccionamos el boton que contenga la palabra mochilas, que sea su padre de la clase
            cy.get(".m-header__searchBar").parent().should("have.class","col-lg")
            
            })

     it('mostrando campos de la tabla 01', () => {
            cy.viewport('macbook-16')
            //visitamos la página de un sku establecido
            cy.visit('https://www.liverpool.com.mx/', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
            //declaramos la variable con el SKU de un producto en la página
            let sku=1114332468
            //buscamos la barra de busqueda e ingresamos el sku declarado
            cy.get("#mainSearchbar").should("be.visible").and("have.class","form-control search-bar plp-no__results").type(sku).type("{enter}")
            cy.wait(2000)
            //desplegamos un menú de especificaciones
            cy.get('.mb-grouped > :nth-child(1)').click({force:true})
            //declaramos 2 arreglos
            const datos=[]
            const datos2=[]
            //las siguientes clases se pueden ejecutar
            //cy.get('.productSpecsGrouped_bold')
            //cy.get('.show-accord > .row')
            //cy.get(".table td")
            //cy.get('table[class*="table a-product__paragraphProductSpecs table-border-detail size-detail"]')
            //cy.get(':nth-child(8) > .row')
            //seleccionamos la clase que contienen las palabras en negritas(titulo de la categoria)
            cy.get('.productSpecsGrouped_bold').each(($el,index,$list)=>{
                //le pasamos a la primer variable su index como texto
                datos[index]=$el.text()
            }).then(()=>{
                for(let i=0; i<=datos.length; i++){
                    cy.log(datos[i])
                }
            })
            //seleccionamos la clase que contienen las palabras regulares(descripcion de la categoria)
            cy.get('.productSpecsGrouped_regular').each(($el,index,$list)=>{
                //le pasamos a la seegunda variable su index como texto
                datos2[index]=$el.text()
            }).then(()=>{
                for(let i=0; i<=datos2.length; i++){
                    cy.log(datos2[i])
                    cy.log(datos[i] + ": " + datos2[i])
                }
            })
            
            })
    it('suma de los campos de la tabla', () => {
            cy.viewport('macbook-16')
            cy.visit("https://mdbootstrap.com/docs/b4/jquery/tables/sort/")
            //declaramos un arreglo
            const datos=[]
            // declaramos la variable que va a almacenar la cantidad
            let cantidad_odd=0
            //obtenemos el elemento donde se almacenan los valos de la tabla
            cy.get("[role='row'] td").each(($el,index,$list) => {
            //le pasamos a la variable su index como texto
            datos[index]=$el.text()
            }).then(()=>{
                for(let i=0;i<datos.length;i++) 
                {
                    cy.log(datos[i])
                    //si detecta un valor de tipo numero que lo sume a la variable
                    if(Number(datos[i]))
                    {   
                        //se van smando los valores de tipo numero 
                        cantidad_odd+=Number(datos[i])
                    }
                }
            cy.log("la cantidad total es de: " + cantidad_odd)
            expect(cantidad_odd).to.eq(1523)
            })
        })
    it.only('obtener un cmpo espeficio de la tabla', () => {
            cy.viewport('macbook-16')
            cy.visit("https://mdbootstrap.com/docs/b4/jquery/tables/sort/")
            //declaramos una constante llamada campo que va a obtener el objeto especifico de la tabla
            const campo=cy.get('#dtBasicExample > tbody > :nth-child(1) > :nth-child(4)')
            //la variable campo obtiene los parametros del each 
            campo.each(($el,index,$list)=>{
                //declaramos una constante llamada edad que le indicamos que sea igual al texto que trea de la tabla
                const edad=$el.text()
                cy.log(edad)
                expect(edad).to.equal("33")
            if (edad.includes("33"))
                {
                    //la variable campo debe ser igual a lo que trae el index y damos un prev para seleccionar la posición anterior a ella
                    campo.eq(index).prev().then((age)=>{
                    //declaramos una constante llamada ciudad que le indicamos que sea igual al texto que trea de la tabla
                    const ciudad=age.text()
                    cy.log(ciudad)
                    cy.log("su ciudad de residencia es: "+ciudad+ " y su edad es de : "+edad)
                    expect(ciudad).to.equal("Tokyo")
                    })
                }
            })
        })
     })
