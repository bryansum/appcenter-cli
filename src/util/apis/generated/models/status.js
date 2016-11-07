/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the Status class.
 * @constructor
 * @member {string} statusProperty
 * 
 */
function Status() {
}

/**
 * Defines the metadata of Status
 *
 * @returns {object} metadata of Status
 *
 */
Status.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Status',
    type: {
      name: 'Composite',
      className: 'Status',
      modelProperties: {
        statusProperty: {
          required: true,
          serializedName: 'status',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = Status;
