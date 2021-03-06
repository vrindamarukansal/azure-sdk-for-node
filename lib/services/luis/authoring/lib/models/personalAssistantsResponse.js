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
 * Response containing user's endpoint keys and the endpoint URLs of the
 * prebuilt Cortana applications.
 *
 */
class PersonalAssistantsResponse {
  /**
   * Create a PersonalAssistantsResponse.
   * @property {array} [endpointKeys]
   * @property {object} [endpointUrls]
   */
  constructor() {
  }

  /**
   * Defines the metadata of PersonalAssistantsResponse
   *
   * @returns {object} metadata of PersonalAssistantsResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PersonalAssistantsResponse',
      type: {
        name: 'Composite',
        className: 'PersonalAssistantsResponse',
        modelProperties: {
          endpointKeys: {
            required: false,
            serializedName: 'endpointKeys',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'UuidElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          endpointUrls: {
            required: false,
            serializedName: 'endpointUrls',
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
          }
        }
      }
    };
  }
}

module.exports = PersonalAssistantsResponse;
