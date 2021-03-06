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
 * Cognitive Services Account is an Azure resource representing the provisioned
 * account, its type, location and SKU.
 *
 * @extends models['BaseResource']
 */
class CognitiveServicesAccount extends models['BaseResource'] {
  /**
   * Create a CognitiveServicesAccount.
   * @property {string} [etag] Entity Tag
   * @property {string} [id] The id of the created account
   * @property {string} [kind] Type of cognitive service account.
   * @property {string} [location] The location of the resource
   * @property {string} [name] The name of the created account
   * @property {string} [provisioningState] Gets the status of the cognitive
   * services account at the time the operation was called. Possible values
   * include: 'Creating', 'ResolvingDNS', 'Moving', 'Deleting', 'Succeeded',
   * 'Failed'
   * @property {string} [endpoint] Endpoint of the created account.
   * @property {string} [internalId] The internal identifier.
   * @property {string} [customSubDomainName] Optional subdomain name used for
   * token-based authentication.
   * @property {object} [sku] The SKU of Cognitive Services account.
   * @property {string} [sku.name] Gets or sets the sku name. Required for
   * account creation, optional for update.
   * @property {string} [sku.tier] Gets the sku tier. This is based on the SKU
   * name. Possible values include: 'Free', 'Standard', 'Premium'
   * @property {object} [tags] Gets or sets a list of key value pairs that
   * describe the resource. These tags can be used in viewing and grouping this
   * resource (across resource groups). A maximum of 15 tags can be provided
   * for a resource. Each tag must have a key no greater than 128 characters
   * and value no greater than 256 characters.
   * @property {string} [type] Resource type
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of CognitiveServicesAccount
   *
   * @returns {object} metadata of CognitiveServicesAccount
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CognitiveServicesAccount',
      type: {
        name: 'Composite',
        className: 'CognitiveServicesAccount',
        modelProperties: {
          etag: {
            required: false,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: false,
            serializedName: 'kind',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
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
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          endpoint: {
            required: false,
            serializedName: 'properties.endpoint',
            type: {
              name: 'String'
            }
          },
          internalId: {
            required: false,
            serializedName: 'properties.internalId',
            type: {
              name: 'String'
            }
          },
          customSubDomainName: {
            required: false,
            serializedName: 'properties.customSubDomainName',
            type: {
              name: 'String'
            }
          },
          sku: {
            required: false,
            serializedName: 'sku',
            type: {
              name: 'Composite',
              className: 'Sku'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CognitiveServicesAccount;
