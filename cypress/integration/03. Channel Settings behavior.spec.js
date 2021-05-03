// 03. Channel Settings behavior.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

import {DATA_CHANNEL_LIST} from "~/../../src/data/ChannelList";
import ChannelMixin from "~/../../src/mixins/Channel";

describe('Channel Settings Behavior', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/', {
      onBeforeLoad: function (window) {
        window.localStorage.setItem('channelList', JSON.stringify(DATA_CHANNEL_LIST));
      }
    });
    cy.viewport('macbook-15');

    cy.get('.menus-container .menu-action span[title="Settings"]').click();
    cy.get('.modal-wrapper').should('exist');
  });

  it('should toggle the channel notification status when the bell button is clicked', () => {
    cy.get('.modal-wrapper .toggle-notification').should('exist');

    cy.get('.modal-wrapper .toggle-notification').each((toggleNotification, i) => {
      if (DATA_CHANNEL_LIST[i].notification) {
        cy.wrap(toggleNotification).invoke('attr', 'title').should('contain', 'Enable Notification');
      } else {
        cy.wrap(toggleNotification).invoke('attr', 'title').should('contain', 'Disable Notification');
      }

      cy.wrap(toggleNotification).click();
      if (DATA_CHANNEL_LIST[i].notification) {
        cy.wrap(toggleNotification).invoke('attr', 'title').should('contain', 'Disable Notification');
      } else {
        cy.wrap(toggleNotification).invoke('attr', 'title').should('contain', 'Enable Notification');
      }
    });
  });

  it('should toggle the channel activation status when the bell button is clicked', () => {
    cy.get('.modal-wrapper .toggle-activation').should('exist');

    cy.get('.modal-wrapper .toggle-activation').each((toggleActivation, i) => {
      if (DATA_CHANNEL_LIST[i].active) {
        cy.wrap(toggleActivation).invoke('attr', 'title').should('contain', 'Deactivate Channel');
      } else {
        cy.wrap(toggleActivation).invoke('attr', 'title').should('contain', 'Activate Channel');
      }

      cy.wrap(toggleActivation).click();
      if (DATA_CHANNEL_LIST[i].active) {
        cy.wrap(toggleActivation).invoke('attr', 'title').should('contain', 'Activate Channel');
      } else {
        cy.wrap(toggleActivation).invoke('attr', 'title').should('contain', 'Deactivate Channel');
      }
    });
  });

  it('should searcch channel based on the keyword', () => {
    cy.get('.modal-wrapper .channel-list').children().should('have.length', DATA_CHANNEL_LIST.length);

    const keyword = 'Business';
    cy.get('.modal-wrapper .channel-search input').type(keyword);

    const filteredChannel = ChannelMixin.methods.searchChannelList(DATA_CHANNEL_LIST, keyword);
    cy.get('.modal-wrapper .channel-list').children().should('have.length', filteredChannel.length);
  });
});
