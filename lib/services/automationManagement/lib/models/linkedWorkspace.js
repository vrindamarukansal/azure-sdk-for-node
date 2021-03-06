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
 * Definition of the linked workspace.
 *
 */
class LinkedWorkspace {
  /**
   * Create a LinkedWorkspace.
   * @member {string} [id] Gets the id of the linked workspace.
   */
  constructor() {
  }

  /**
   * Defines the metadata of LinkedWorkspace
   *
   * @returns {object} metadata of LinkedWorkspace
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LinkedWorkspace',
      type: {
        name: 'Composite',
        className: 'LinkedWorkspace',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = LinkedWorkspace;
