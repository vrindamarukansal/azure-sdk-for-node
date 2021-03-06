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
 * Lease Container response schema.
 *
 */
class LeaseContainerResponse {
  /**
   * Create a LeaseContainerResponse.
   * @property {string} [leaseId] Returned unique lease ID that must be
   * included with any request to delete the container, or to renew, change, or
   * release the lease.
   * @property {string} [leaseTimeSeconds] Approximate time remaining in the
   * lease period, in seconds.
   */
  constructor() {
  }

  /**
   * Defines the metadata of LeaseContainerResponse
   *
   * @returns {object} metadata of LeaseContainerResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LeaseContainerResponse',
      type: {
        name: 'Composite',
        className: 'LeaseContainerResponse',
        modelProperties: {
          leaseId: {
            required: false,
            serializedName: 'leaseId',
            type: {
              name: 'String'
            }
          },
          leaseTimeSeconds: {
            required: false,
            serializedName: 'leaseTimeSeconds',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = LeaseContainerResponse;
