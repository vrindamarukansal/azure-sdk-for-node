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
 * Configure backups for databases in your SQL virtual machine.
 *
 */
class AutoBackupSettings {
  /**
   * Create a AutoBackupSettings.
   * @property {boolean} [enable] Enable or disable autobackup on SQL virtual
   * machine.
   * @property {boolean} [enableEncryption] Enable or disable encryption for
   * backup on SQL virtual machine.
   * @property {number} [retentionPeriod] Retention period of backup: 1-30
   * days.
   * @property {string} [storageAccountUrl] Storage account url where backup
   * will be taken to.
   * @property {string} [storageAccessKey] Storage account key where backup
   * will be taken to.
   * @property {string} [password] Password for encryption on backup.
   * @property {boolean} [backupSystemDbs] Include or exclude system databases
   * from auto backup.
   * @property {string} [backupScheduleType] Backup schedule type. Possible
   * values include: 'Manual', 'Automated'
   * @property {string} [fullBackupFrequency] Frequency of full backups. In
   * both cases, full backups begin during the next scheduled time window.
   * Possible values include: 'Daily', 'Weekly'
   * @property {number} [fullBackupStartTime] Start time of a given day during
   * which full backups can take place. 0-23 hours.
   * @property {number} [fullBackupWindowHours] Duration of the time window of
   * a given day during which full backups can take place. 1-23 hours.
   * @property {number} [logBackupFrequency] Frequency of log backups. 5-60
   * minutes.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AutoBackupSettings
   *
   * @returns {object} metadata of AutoBackupSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AutoBackupSettings',
      type: {
        name: 'Composite',
        className: 'AutoBackupSettings',
        modelProperties: {
          enable: {
            required: false,
            serializedName: 'enable',
            type: {
              name: 'Boolean'
            }
          },
          enableEncryption: {
            required: false,
            serializedName: 'enableEncryption',
            type: {
              name: 'Boolean'
            }
          },
          retentionPeriod: {
            required: false,
            serializedName: 'retentionPeriod',
            type: {
              name: 'Number'
            }
          },
          storageAccountUrl: {
            required: false,
            serializedName: 'storageAccountUrl',
            type: {
              name: 'String'
            }
          },
          storageAccessKey: {
            required: false,
            serializedName: 'storageAccessKey',
            type: {
              name: 'String'
            }
          },
          password: {
            required: false,
            serializedName: 'password',
            type: {
              name: 'String'
            }
          },
          backupSystemDbs: {
            required: false,
            serializedName: 'backupSystemDbs',
            type: {
              name: 'Boolean'
            }
          },
          backupScheduleType: {
            required: false,
            serializedName: 'backupScheduleType',
            type: {
              name: 'String'
            }
          },
          fullBackupFrequency: {
            required: false,
            serializedName: 'fullBackupFrequency',
            type: {
              name: 'String'
            }
          },
          fullBackupStartTime: {
            required: false,
            serializedName: 'fullBackupStartTime',
            type: {
              name: 'Number'
            }
          },
          fullBackupWindowHours: {
            required: false,
            serializedName: 'fullBackupWindowHours',
            type: {
              name: 'Number'
            }
          },
          logBackupFrequency: {
            required: false,
            serializedName: 'logBackupFrequency',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = AutoBackupSettings;
