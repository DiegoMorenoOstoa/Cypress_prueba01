import { Given, When, And, Then} from "@badeball/cypress-cucumber-preprocessor";
Feature: Prueba inicio de sesión
    Esto es una prueba para iniciar sesión en liverpool
    Scenario: Demo de cocumber 01
    Given Abrir la página web de liverpool
    When Ir a página de iniciar sesión
    When Introducir un email
    When Introducir un password
    And Dar click en iniciar sesión
    Then Regresar a menu principal