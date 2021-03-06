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
 * Class representing certificate reissue request.
 *
 * @extends models['ProxyOnlyResource']
 */
class ReissueCertificateOrderRequest extends models['ProxyOnlyResource'] {
  /**
   * Create a ReissueCertificateOrderRequest.
   * @member {number} [keySize] Certificate Key Size.
   * @member {number} [delayExistingRevokeInHours] Delay in hours to revoke
   * existing certificate after the new certificate is issued.
   * @member {string} [csr] Csr to be used for re-key operation.
   * @member {boolean} [isPrivateKeyExternal] Should we change the ASC type
   * (from managed private key to external private key and vice versa).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ReissueCertificateOrderRequest
   *
   * @returns {object} metadata of ReissueCertificateOrderRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ReissueCertificateOrderRequest',
      type: {
        name: 'Composite',
        className: 'ReissueCertificateOrderRequest',
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
          kind: {
            required: false,
            serializedName: 'kind',
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
          keySize: {
            required: false,
            serializedName: 'properties.keySize',
            type: {
              name: 'Number'
            }
          },
          delayExistingRevokeInHours: {
            required: false,
            serializedName: 'properties.delayExistingRevokeInHours',
            type: {
              name: 'Number'
            }
          },
          csr: {
            required: false,
            serializedName: 'properties.csr',
            type: {
              name: 'String'
            }
          },
          isPrivateKeyExternal: {
            required: false,
            serializedName: 'properties.isPrivateKeyExternal',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = ReissueCertificateOrderRequest;
