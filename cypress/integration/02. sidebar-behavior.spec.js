// 02. sidebar-behavior.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

import {DATA_MENU_LIST} from "~/../../src/data/MenuList";
import {DATA_CHANNEL_LIST} from "~/../../src/data/ChannelList";

describe('Sidebar Behavior', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/', {
      onBeforeLoad: function (window) {
        window.localStorage.setItem('channelList', JSON.stringify(DATA_CHANNEL_LIST));
      }
    });
    cy.viewport('macbook-15');
  });

  it('should open and close the children on the sidebar group', () => {
    cy.get('.menus-container').children().each((groupElement, i) => {
      cy.wrap(groupElement).within(() => {
        cy.get('.menu-group').children()
          .find('svg')
          .invoke('attr', 'data-icon')
          .should('contain', (DATA_MENU_LIST[i].expand ? 'chevron-down' : 'chevron-right'));
        if (DATA_MENU_LIST[i].children.length > 1) {
          cy.get('.submenu').should('exist');
        }

        cy.get('.menu-group').click();

        cy.get('.menu-group').children()
          .find('svg')
          .invoke('attr', 'data-icon')
          .should('contain', (DATA_MENU_LIST[i].expand ? 'chevron-right' : 'chevron-down'));
        if (DATA_MENU_LIST[i].children.length > 1) {
          cy.get('.submenu').should('not.exist');
        }
      });
    });
  });

  it('should show the popup modals when the Sidebar action is clicked', () => {
    cy.get('.menus-container').children().each((groupElement, i) => {
      console.log('i : ', i);
      Cypress.globalCy = cy;
      if (DATA_MENU_LIST[i].actions?.length > 1) {
        DATA_MENU_LIST[i].actions.forEach((action, j) => {
          cy.wrap(groupElement).children('.menu-action').children().eq(j).click();
          cy.get('.modal-wrapper').should('exist');
          cy.get('.modal-wrapper .action-button').first().click();
        });
      }
    });
  });
});
