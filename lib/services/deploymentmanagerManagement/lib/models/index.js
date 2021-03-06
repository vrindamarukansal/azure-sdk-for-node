/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

var msRestAzure = require('ms-rest-azure');

exports.BaseResource = msRestAzure.BaseResource;
exports.CloudError = msRestAzure.CloudError;
exports.Identity = require('./identity');
exports.PrePostStep = require('./prePostStep');
exports.Step = require('./step');
exports.Resource = require('./resource');
exports.TrackedResource = require('./trackedResource');
exports.RolloutRequest = require('./rolloutRequest');
exports.ArtifactSource = require('./artifactSource');
exports.Authentication = require('./authentication');
exports.ArtifactSourcePropertiesModel = require('./artifactSourcePropertiesModel');
exports.SasAuthentication = require('./sasAuthentication');
exports.CloudErrorBody = require('./cloudErrorBody');
exports.RolloutOperationInfo = require('./rolloutOperationInfo');
exports.StepOperationInfo = require('./stepOperationInfo');
exports.ResourceOperation = require('./resourceOperation');
exports.Message = require('./message');
exports.RolloutStep = require('./rolloutStep');
exports.ServiceUnitProperties = require('./serviceUnitProperties');
exports.ServiceUnit = require('./serviceUnit');
exports.ServiceProperties = require('./serviceProperties');
exports.Service = require('./service');
exports.Rollout = require('./rollout');
exports.RolloutPropertiesModel = require('./rolloutPropertiesModel');
exports.ServiceTopologyResource = require('./serviceTopologyResource');
exports.ServiceTopologyProperties = require('./serviceTopologyProperties');
exports.ServiceResource = require('./serviceResource');
exports.ServiceUnitResource = require('./serviceUnitResource');
exports.ServiceUnitArtifacts = require('./serviceUnitArtifacts');
exports.OperationDetail = require('./operationDetail');
exports.Operation = require('./operation');
exports.StepProperties = require('./stepProperties');
exports.StepResource = require('./stepResource');
exports.WaitStepAttributes = require('./waitStepAttributes');
exports.WaitStepProperties = require('./waitStepProperties');
exports.ProxyResource = require('./proxyResource');
exports.AzureEntityResource = require('./azureEntityResource');
exports.discriminators = {
  'Authentication' : exports.Authentication,
  'Authentication.Sas' : exports.SasAuthentication,
  'StepProperties' : exports.StepProperties,
  'StepProperties.Wait' : exports.WaitStepProperties
};
