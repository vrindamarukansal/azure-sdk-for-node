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
 * Association entity details.
 *
 * @extends models['Resource']
 */
class AssociationContract extends models['Resource'] {
  /**
   * Create a AssociationContract.
   * @property {string} [provisioningState] Provisioning state. Possible values
   * include: 'created'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AssociationContract
   *
   * @returns {object} metadata of AssociationContract
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AssociationContract',
      type: {
        name: 'Composite',
        className: 'AssociationContract',
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
          provisioningState: {
            required: false,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'Enum',
              allowedValues: [ 'created' ]
            }
          }
        }
      }
    };
  }
}

module.exports = AssociationContract;