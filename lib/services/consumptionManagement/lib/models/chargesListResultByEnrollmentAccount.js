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
 * Result of listing charge summary by enrollment account.
 *
 */
class ChargesListResultByEnrollmentAccount {
  /**
   * Create a ChargesListResultByEnrollmentAccount.
   * @member {array} [value] The list of charge summary by enrollment account.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ChargesListResultByEnrollmentAccount
   *
   * @returns {object} metadata of ChargesListResultByEnrollmentAccount
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ChargesListResultByEnrollmentAccount',
      type: {
        name: 'Composite',
        className: 'ChargesListResultByEnrollmentAccount',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ChargeSummaryByEnrollmentAccountElementType',
                  type: {
                    name: 'Composite',
                    className: 'ChargeSummaryByEnrollmentAccount'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ChargesListResultByEnrollmentAccount;