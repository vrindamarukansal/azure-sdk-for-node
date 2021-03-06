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

/**
 * A collection of AccountFilter items.
 */
class AccountFilterCollection extends Array {
  /**
   * Create a AccountFilterCollection.
   * @property {string} [odatanextLink] A link to the next page of the
   * collection (when the collection contains too many results to return in one
   * response).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AccountFilterCollection
   *
   * @returns {object} metadata of AccountFilterCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AccountFilterCollection',
      type: {
        name: 'Composite',
        className: 'AccountFilterCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AccountFilterElementType',
                  type: {
                    name: 'Composite',
                    className: 'AccountFilter'
                  }
              }
            }
          },
          odatanextLink: {
            required: false,
            serializedName: '@odata\\.nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AccountFilterCollection;
