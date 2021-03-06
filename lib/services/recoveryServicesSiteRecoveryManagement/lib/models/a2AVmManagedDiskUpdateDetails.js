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
 * Azure VM managed disk update input details.
 *
 */
class A2AVmManagedDiskUpdateDetails {
  /**
   * Create a A2AVmManagedDiskUpdateDetails.
   * @member {string} [diskId] The disk Id.
   * @member {string} [recoveryTargetDiskAccountType] The target disk type
   * before failover.
   * @member {string} [recoveryReplicaDiskAccountType] The replica disk type
   * before failover.
   */
  constructor() {
  }

  /**
   * Defines the metadata of A2AVmManagedDiskUpdateDetails
   *
   * @returns {object} metadata of A2AVmManagedDiskUpdateDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'A2AVmManagedDiskUpdateDetails',
      type: {
        name: 'Composite',
        className: 'A2AVmManagedDiskUpdateDetails',
        modelProperties: {
          diskId: {
            required: false,
            serializedName: 'diskId',
            type: {
              name: 'String'
            }
          },
          recoveryTargetDiskAccountType: {
            required: false,
            serializedName: 'recoveryTargetDiskAccountType',
            type: {
              name: 'String'
            }
          },
          recoveryReplicaDiskAccountType: {
            required: false,
            serializedName: 'recoveryReplicaDiskAccountType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = A2AVmManagedDiskUpdateDetails;
