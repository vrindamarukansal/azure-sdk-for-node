/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.13.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the VirtualMachine class.
 * @constructor
 * Describes a Virtual Machine.
 * @member {object} [plan] Gets or sets the purchase plan when deploying
 * virtual machine from VM Marketplace images.
 * 
 * @member {string} [plan.name] Gets or sets the plan ID.
 * 
 * @member {string} [plan.publisher] Gets or sets the publisher ID.
 * 
 * @member {string} [plan.product] Gets or sets the offer ID.
 * 
 * @member {string} [plan.promotionCode] Gets or sets the promotion code.
 * 
 * @member {array} [resources] Gets the virtual machine child extension
 * resources.
 * 
 * @member {object} [hardwareProfile] Gets or sets the hardware profile.
 * 
 * @member {string} [hardwareProfile.vmSize] The virtual machine size name.
 * Possible values for this property include: 'Basic_A0', 'Basic_A1',
 * 'Basic_A2', 'Basic_A3', 'Basic_A4', 'Standard_A0', 'Standard_A1',
 * 'Standard_A2', 'Standard_A3', 'Standard_A4', 'Standard_A5', 'Standard_A6',
 * 'Standard_A7', 'Standard_A8', 'Standard_A9', 'Standard_G1', 'Standard_G2',
 * 'Standard_G3', 'Standard_G4', 'Standard_G5'.
 * 
 * @member {object} [storageProfile] Gets or sets the storage profile.
 * 
 * @member {object} [storageProfile.imageReference] Gets or sets the image
 * reference.
 * 
 * @member {string} [storageProfile.imageReference.publisher] Gets or sets the
 * image publisher.
 * 
 * @member {string} [storageProfile.imageReference.offer] Gets or sets the
 * image offer.
 * 
 * @member {string} [storageProfile.imageReference.sku] Gets or sets the image
 * sku.
 * 
 * @member {string} [storageProfile.imageReference.version] Gets or sets the
 * image version. The allowed formats are Major.Minor.Build or 'latest'.
 * Major, Minor and Build being decimal numbers. Specify 'latest' to use the
 * latest version of image.
 * 
 * @member {object} [storageProfile.osDisk] Gets or sets the OS disk.
 * 
 * @member {string} [storageProfile.osDisk.osType] Gets or sets the Operating
 * System type. Possible values for this property include: 'Windows', 'Linux'.
 * 
 * @member {object} [storageProfile.osDisk.encryptionSettings] Gets or sets
 * the disk encryption settings.
 * 
 * @member {object}
 * [storageProfile.osDisk.encryptionSettings.diskEncryptionKey] Gets or sets
 * the disk encryption key which is a KeyVault Secret.
 * 
 * @member {string}
 * [storageProfile.osDisk.encryptionSettings.diskEncryptionKey.secretUrl]
 * Gets or sets the URL referencing a secret in a Key Vault.
 * 
 * @member {object}
 * [storageProfile.osDisk.encryptionSettings.diskEncryptionKey.sourceVault]
 * Gets or sets the Relative URL of the Key Vault containing the secret.
 * 
 * @member {string}
 * [storageProfile.osDisk.encryptionSettings.diskEncryptionKey.sourceVault.id]
 * Resource Id
 * 
 * @member {object}
 * [storageProfile.osDisk.encryptionSettings.keyEncryptionKey] Gets or sets
 * the key encryption key which is KeyVault Key.
 * 
 * @member {string}
 * [storageProfile.osDisk.encryptionSettings.keyEncryptionKey.keyUrl] Gets or
 * sets the URL referencing a key in a Key Vault.
 * 
 * @member {object}
 * [storageProfile.osDisk.encryptionSettings.keyEncryptionKey.sourceVault]
 * Gets or sets the Relative URL of the Key Vault containing the key
 * 
 * @member {string}
 * [storageProfile.osDisk.encryptionSettings.keyEncryptionKey.sourceVault.id]
 * Resource Id
 * 
 * @member {string} [storageProfile.osDisk.name] Gets or sets the disk name.
 * 
 * @member {object} [storageProfile.osDisk.vhd] Gets or sets the Virtual Hard
 * Disk.
 * 
 * @member {string} [storageProfile.osDisk.vhd.uri] Gets or sets the virtual
 * hard disk's uri. It should be a valid Uri to a virtual hard disk.
 * 
 * @member {object} [storageProfile.osDisk.image] Gets or sets the Source User
 * Image VirtualHardDisk. This VirtualHardDisk will be copied before using it
 * to attach to the Virtual Machine.If SourceImage is provided, the
 * destination VirtualHardDisk should not exist.
 * 
 * @member {string} [storageProfile.osDisk.image.uri] Gets or sets the virtual
 * hard disk's uri. It should be a valid Uri to a virtual hard disk.
 * 
 * @member {string} [storageProfile.osDisk.caching] Gets or sets the caching
 * type. Possible values for this property include: 'None', 'ReadOnly',
 * 'ReadWrite'.
 * 
 * @member {string} [storageProfile.osDisk.createOption] Gets or sets the
 * create option. Possible values for this property include: 'fromImage',
 * 'empty', 'attach'.
 * 
 * @member {number} [storageProfile.osDisk.diskSizeGB] Gets or sets the
 * initial disk size in GB for blank data disks, and the new desired size for
 * existing OS and Data disks.
 * 
 * @member {array} [storageProfile.dataDisks] Gets or sets the data disks.
 * 
 * @member {object} [osProfile] Gets or sets the OS profile.
 * 
 * @member {string} [osProfile.computerName] Gets or sets the computer name.
 * 
 * @member {string} [osProfile.adminUsername] Gets or sets the admin user name.
 * 
 * @member {string} [osProfile.adminPassword] Gets or sets the admin user
 * password.
 * 
 * @member {string} [osProfile.customData] Gets or sets a base-64 encoded
 * string of custom data.
 * 
 * @member {object} [osProfile.windowsConfiguration] Gets or sets the Windows
 * Configuration of the OS profile.
 * 
 * @member {boolean} [osProfile.windowsConfiguration.provisionVMAgent] Gets or
 * sets whether VM Agent should be provisioned on the Virtual Machine.
 * 
 * @member {boolean} [osProfile.windowsConfiguration.enableAutomaticUpdates]
 * Gets or sets whether Windows updates are automatically installed on the VM
 * 
 * @member {string} [osProfile.windowsConfiguration.timeZone] Gets or sets the
 * Time Zone of the VM
 * 
 * @member {array} [osProfile.windowsConfiguration.additionalUnattendContent]
 * Gets or sets the additional base-64 encoded XML formatted information that
 * can be included in the Unattend.xml file.
 * 
 * @member {object} [osProfile.windowsConfiguration.winRM] Gets or sets the
 * Windows Remote Management configuration of the VM
 * 
 * @member {array} [osProfile.windowsConfiguration.winRM.listeners] Gets or
 * sets the list of Windows Remote Management listeners
 * 
 * @member {object} [osProfile.linuxConfiguration] Gets or sets the Linux
 * Configuration of the OS profile.
 * 
 * @member {boolean}
 * [osProfile.linuxConfiguration.disablePasswordAuthentication] Gets or sets
 * whether Authentication using user name and password is allowed or not
 * 
 * @member {object} [osProfile.linuxConfiguration.ssh] Gets or sets the SSH
 * configuration for linux VMs
 * 
 * @member {array} [osProfile.linuxConfiguration.ssh.publicKeys] Gets or sets
 * the list of SSH public keys used to authenticate with linux based VMs
 * 
 * @member {array} [osProfile.secrets] Gets or sets the List of certificates
 * for addition to the VM.
 * 
 * @member {object} [networkProfile] Gets or sets the network profile.
 * 
 * @member {array} [networkProfile.networkInterfaces] Gets or sets the network
 * interfaces.
 * 
 * @member {object} [diagnosticsProfile] Gets or sets the diagnostics profile.
 * 
 * @member {object} [diagnosticsProfile.bootDiagnostics] Gets or sets the boot
 * diagnostics.
 * 
 * @member {boolean} [diagnosticsProfile.bootDiagnostics.enabled] Gets or sets
 * whether VM Agent should be provisioned on the Virtual Machine.
 * 
 * @member {string} [diagnosticsProfile.bootDiagnostics.storageUri] Gets or
 * sets the boot diagnostics storage Uri. It should be a valid Uri
 * 
 * @member {object} [availabilitySet] Gets or sets the reference Id of the
 * availailbity set to which this virtual machine belongs.
 * 
 * @member {string} [availabilitySet.id] Resource Id
 * 
 * @member {string} [provisioningState] Gets or sets the provisioning state,
 * which only appears in the response.
 * 
 * @member {object} [instanceView] Gets the virtual machine instance view.
 * 
 * @member {number} [instanceView.platformUpdateDomain] Gets or sets the
 * Update Domain count.
 * 
 * @member {number} [instanceView.platformFaultDomain] Gets or sets the Fault
 * Domain count.
 * 
 * @member {string} [instanceView.rdpThumbPrint] Gets or sets the Remote
 * desktop certificate thumbprint.
 * 
 * @member {object} [instanceView.vmAgent] Gets or sets the VM Agent running
 * on the virtual machine.
 * 
 * @member {string} [instanceView.vmAgent.vmAgentVersion] Gets or sets the VM
 * Agent full version.
 * 
 * @member {array} [instanceView.vmAgent.extensionHandlers] Gets or sets the
 * virtual machine extension handler instance view.
 * 
 * @member {array} [instanceView.vmAgent.statuses] Gets or sets the resource
 * status information.
 * 
 * @member {array} [instanceView.disks] Gets or sets the the disks information.
 * 
 * @member {array} [instanceView.extensions] Gets or sets the extensions
 * information.
 * 
 * @member {object} [instanceView.bootDiagnostics] Gets or sets the boot
 * diagnostics.
 * 
 * @member {string} [instanceView.bootDiagnostics.consoleScreenshotBlobUri]
 * Gets or sets the console screenshot blob Uri.
 * 
 * @member {string} [instanceView.bootDiagnostics.serialConsoleLogBlobUri]
 * Gets or sets the Linux serial console log blob Uri.
 * 
 * @member {array} [instanceView.statuses] Gets or sets the resource status
 * information.
 * 
 */
function VirtualMachine(parameters) {
  VirtualMachine['super_'].call(this, parameters);
  if (parameters !== null && parameters !== undefined) {
    if (parameters.plan) {
      this.plan = new models['Plan'](parameters.plan);
    }
    if (parameters.resources) {
      var tempParametersresources = [];
      parameters.resources.forEach(function(element) {
        if (element) {
          element = new models['VirtualMachineExtension'](element);
        }
        tempParametersresources.push(element);
      });
      this.resources = tempParametersresources;
    }
    if (parameters.hardwareProfile) {
      this.hardwareProfile = new models['HardwareProfile'](parameters.hardwareProfile);
    }
    if (parameters.storageProfile) {
      this.storageProfile = new models['StorageProfile'](parameters.storageProfile);
    }
    if (parameters.osProfile) {
      this.osProfile = new models['OSProfile'](parameters.osProfile);
    }
    if (parameters.networkProfile) {
      this.networkProfile = new models['NetworkProfile'](parameters.networkProfile);
    }
    if (parameters.diagnosticsProfile) {
      this.diagnosticsProfile = new models['DiagnosticsProfile'](parameters.diagnosticsProfile);
    }
    if (parameters.availabilitySet) {
      this.availabilitySet = new models['SubResource'](parameters.availabilitySet);
    }
    if (parameters.provisioningState !== undefined) {
      this.provisioningState = parameters.provisioningState;
    }
    if (parameters.instanceView) {
      this.instanceView = new models['VirtualMachineInstanceView'](parameters.instanceView);
    }
  }    
}

util.inherits(VirtualMachine, models['Resource']);

/**
 * Validate the payload against the VirtualMachine schema
 *
 * @param {JSON} payload
 *
 */
VirtualMachine.prototype.serialize = function () {
  var payload = VirtualMachine['super_'].prototype.serialize.call(this);
  if (this['plan']) {
    payload['plan'] = this['plan'].serialize();
  }

  if (util.isArray(this['resources'])) {
    payload['resources'] = [];
    for (var i = 0; i < this['resources'].length; i++) {
      if (this['resources'][i]) {
        if (payload['resources'] === null || payload['resources'] === undefined) {
          payload['resources'] = {};
        }
        payload['resources'][i] = this['resources'][i].serialize();
      }
    }
  }

  if (this['hardwareProfile']) {
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['hardwareProfile'] = this['hardwareProfile'].serialize();
  }

  if (this['storageProfile']) {
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['storageProfile'] = this['storageProfile'].serialize();
  }

  if (this['osProfile']) {
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['osProfile'] = this['osProfile'].serialize();
  }

  if (this['networkProfile']) {
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['networkProfile'] = this['networkProfile'].serialize();
  }

  if (this['diagnosticsProfile']) {
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['diagnosticsProfile'] = this['diagnosticsProfile'].serialize();
  }

  if (this['availabilitySet']) {
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['availabilitySet'] = this['availabilitySet'].serialize();
  }

  if (this['provisioningState'] !== null && this['provisioningState'] !== undefined) {
    if (typeof this['provisioningState'].valueOf() !== 'string') {
      throw new Error('this[\'provisioningState\'] must be of type string.');
    }
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['provisioningState'] = this['provisioningState'];
  }

  if (this['instanceView']) {
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['instanceView'] = this['instanceView'].serialize();
  }

  return payload;
};

/**
 * Deserialize the instance to VirtualMachine schema
 *
 * @param {JSON} instance
 *
 */
VirtualMachine.prototype.deserialize = function (instance) {
  VirtualMachine['super_'].prototype.deserialize.call(this, instance);
  if (instance) {
    if (instance['plan']) {
      this['plan'] = new models['Plan']().deserialize(instance['plan']);
    }

    if (instance['resources']) {
      var tempInstanceresources = [];
      instance['resources'].forEach(function(element1) {
        if (element1) {
          element1 = new models['VirtualMachineExtension']().deserialize(element1);
        }
        tempInstanceresources.push(element1);
      });
      this['resources'] = tempInstanceresources;
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['hardwareProfile']) {
        this['hardwareProfile'] = new models['HardwareProfile']().deserialize(instance['properties']['hardwareProfile']);
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['storageProfile']) {
        this['storageProfile'] = new models['StorageProfile']().deserialize(instance['properties']['storageProfile']);
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['osProfile']) {
        this['osProfile'] = new models['OSProfile']().deserialize(instance['properties']['osProfile']);
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['networkProfile']) {
        this['networkProfile'] = new models['NetworkProfile']().deserialize(instance['properties']['networkProfile']);
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['diagnosticsProfile']) {
        this['diagnosticsProfile'] = new models['DiagnosticsProfile']().deserialize(instance['properties']['diagnosticsProfile']);
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['availabilitySet']) {
        this['availabilitySet'] = new models['SubResource']().deserialize(instance['properties']['availabilitySet']);
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['provisioningState'] !== undefined) {
        this['provisioningState'] = instance['properties']['provisioningState'];
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['instanceView']) {
        this['instanceView'] = new models['VirtualMachineInstanceView']().deserialize(instance['properties']['instanceView']);
      }
    }
  }

  return this;
};

module.exports = VirtualMachine;