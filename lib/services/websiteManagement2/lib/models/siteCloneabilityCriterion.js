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
 * An app cloneability criterion.
 *
 */
class SiteCloneabilityCriterion {
  /**
   * Create a SiteCloneabilityCriterion.
   * @member {string} [name] Name of criterion.
   * @member {string} [description] Description of criterion.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SiteCloneabilityCriterion
   *
   * @returns {object} metadata of SiteCloneabilityCriterion
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SiteCloneabilityCriterion',
      type: {
        name: 'Composite',
        className: 'SiteCloneabilityCriterion',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SiteCloneabilityCriterion;
