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
 * Create network mappings input properties/behaviour specific to Azure to
 * Azure Network mapping.
 *
 * @extends models['FabricSpecificCreateNetworkMappingInput']
 */
class AzureToAzureCreateNetworkMappingInput extends models['FabricSpecificCreateNetworkMappingInput'] {
  /**
   * Create a AzureToAzureCreateNetworkMappingInput.
   * @member {string} [primaryNetworkId] The primary azure vnet Id.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AzureToAzureCreateNetworkMappingInput
   *
   * @returns {object} metadata of AzureToAzureCreateNetworkMappingInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureToAzure',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'instanceType',
          clientName: 'instanceType'
        },
        uberParent: 'FabricSpecificCreateNetworkMappingInput',
        className: 'AzureToAzureCreateNetworkMappingInput',
        modelProperties: {
          instanceType: {
            required: true,
            serializedName: 'instanceType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          primaryNetworkId: {
            required: false,
            serializedName: 'primaryNetworkId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureToAzureCreateNetworkMappingInput;