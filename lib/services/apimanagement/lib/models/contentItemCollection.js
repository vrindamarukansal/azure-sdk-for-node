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
 * Paged list of content items.
 *
 */
class ContentItemCollection {
  /**
   * Create a ContentItemCollection.
   * @property {array} [value] Collection of content items.
   * @property {string} [nextLink] Next page link, if any.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ContentItemCollection
   *
   * @returns {object} metadata of ContentItemCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContentItemCollection',
      type: {
        name: 'Composite',
        className: 'ContentItemCollection',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ContentItemContractElementType',
                  type: {
                    name: 'Composite',
                    className: 'ContentItemContract'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            readOnly: true,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ContentItemCollection;