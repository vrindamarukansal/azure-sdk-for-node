/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Contact details for security issues
 *
 * @extends models['Resource']
 */
class SecurityContact extends models['Resource'] {
  /**
   * Create a SecurityContact.
   * @member {string} email The email of this security contact
   * @member {string} phone The phone number of this security contact
   * @member {string} alertNotifications Whether to send security alerts
   * notifications to the security contact. Possible values include: 'On',
   * 'Off'
   * @member {string} alertsToAdmins Whether to send security alerts
   * notifications to subscription admins. Possible values include: 'On', 'Off'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SecurityContact
   *
   * @returns {object} metadata of SecurityContact
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SecurityContact',
      type: {
        name: 'Composite',
        className: 'SecurityContact',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          email: {
            required: true,
            serializedName: 'properties.email',
            type: {
              name: 'String'
            }
          },
          phone: {
            required: true,
            serializedName: 'properties.phone',
            type: {
              name: 'String'
            }
          },
          alertNotifications: {
            required: true,
            serializedName: 'properties.alertNotifications',
            type: {
              name: 'String'
            }
          },
          alertsToAdmins: {
            required: true,
            serializedName: 'properties.alertsToAdmins',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SecurityContact;