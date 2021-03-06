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
 * The body of a POST request to check name availability.
 *
 */
class CheckNameAvailabilityParameter {
  /**
   * Create a CheckNameAvailabilityParameter.
   * @member {string} [resourceName] The name of the resource to check
   * availability for.
   * @member {string} [resourceType] The type of resource to check availability
   * for.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CheckNameAvailabilityParameter
   *
   * @returns {object} metadata of CheckNameAvailabilityParameter
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CheckNameAvailabilityParameter',
      type: {
        name: 'Composite',
        className: 'CheckNameAvailabilityParameter',
        modelProperties: {
          resourceName: {
            required: false,
            serializedName: 'resourceName',
            type: {
              name: 'String'
            }
          },
          resourceType: {
            required: false,
            serializedName: 'resourceType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CheckNameAvailabilityParameter;
