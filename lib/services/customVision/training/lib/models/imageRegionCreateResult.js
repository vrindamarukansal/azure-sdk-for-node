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
 * Class representing a ImageRegionCreateResult.
 */
class ImageRegionCreateResult {
  /**
   * Create a ImageRegionCreateResult.
   * @property {uuid} [imageId]
   * @property {uuid} [regionId]
   * @property {string} [tagName]
   * @property {date} [created]
   * @property {uuid} tagId Id of the tag associated with this region.
   * @property {number} left Coordinate of the left boundary.
   * @property {number} top Coordinate of the top boundary.
   * @property {number} width Width.
   * @property {number} height Height.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ImageRegionCreateResult
   *
   * @returns {object} metadata of ImageRegionCreateResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ImageRegionCreateResult',
      type: {
        name: 'Composite',
        className: 'ImageRegionCreateResult',
        modelProperties: {
          imageId: {
            required: false,
            nullable: false,
            readOnly: true,
            serializedName: 'imageId',
            type: {
              name: 'String'
            }
          },
          regionId: {
            required: false,
            nullable: false,
            readOnly: true,
            serializedName: 'regionId',
            type: {
              name: 'String'
            }
          },
          tagName: {
            required: false,
            nullable: false,
            readOnly: true,
            serializedName: 'tagName',
            type: {
              name: 'String'
            }
          },
          created: {
            required: false,
            nullable: false,
            readOnly: true,
            serializedName: 'created',
            type: {
              name: 'DateTime'
            }
          },
          tagId: {
            required: true,
            nullable: false,
            serializedName: 'tagId',
            type: {
              name: 'String'
            }
          },
          left: {
            required: true,
            nullable: false,
            serializedName: 'left',
            type: {
              name: 'Number'
            }
          },
          top: {
            required: true,
            nullable: false,
            serializedName: 'top',
            type: {
              name: 'Number'
            }
          },
          width: {
            required: true,
            nullable: false,
            serializedName: 'width',
            type: {
              name: 'Number'
            }
          },
          height: {
            required: true,
            nullable: false,
            serializedName: 'height',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ImageRegionCreateResult;
