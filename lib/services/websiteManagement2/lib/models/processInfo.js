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

const models = require('./index');

/**
 * Process Information.
 *
 * @extends models['ProxyOnlyResource']
 */
class ProcessInfo extends models['ProxyOnlyResource'] {
  /**
   * Create a ProcessInfo.
   * @member {number} [identifier] ARM Identifier for deployment.
   * @member {string} [deploymentName] Deployment name.
   * @member {string} [href] HRef URI.
   * @member {string} [minidump] Minidump URI.
   * @member {boolean} [isProfileRunning] Is profile running?
   * @member {boolean} [isIisProfileRunning] Is the IIS Profile running?
   * @member {number} [iisProfileTimeoutInSeconds] IIS Profile timeout
   * (seconds).
   * @member {string} [parent] Parent process.
   * @member {array} [children] Child process list.
   * @member {array} [threads] Thread list.
   * @member {array} [openFileHandles] List of open files.
   * @member {array} [modules] List of modules.
   * @member {string} [fileName] File name of this process.
   * @member {string} [commandLine] Command line.
   * @member {string} [userName] User name.
   * @member {number} [handleCount] Handle count.
   * @member {number} [moduleCount] Module count.
   * @member {number} [threadCount] Thread count.
   * @member {date} [startTime] Start time.
   * @member {string} [totalCpuTime] Total CPU time.
   * @member {string} [userCpuTime] User CPU time.
   * @member {string} [privilegedCpuTime] Privileged CPU time.
   * @member {number} [workingSet] Working set.
   * @member {number} [peakWorkingSet] Peak working set.
   * @member {number} [privateMemory] Private memory size.
   * @member {number} [virtualMemory] Virtual memory size.
   * @member {number} [peakVirtualMemory] Peak virtual memory usage.
   * @member {number} [pagedSystemMemory] Paged system memory.
   * @member {number} [nonPagedSystemMemory] Non-paged system memory.
   * @member {number} [pagedMemory] Paged memory.
   * @member {number} [peakPagedMemory] Peak paged memory.
   * @member {date} [timeStamp] Time stamp.
   * @member {object} [environmentVariables] List of environment variables.
   * @member {boolean} [isScmSite] Is this the SCM site?
   * @member {boolean} [isWebjob] Is this a Web Job?
   * @member {string} [description] Description of process.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ProcessInfo
   *
   * @returns {object} metadata of ProcessInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ProcessInfo',
      type: {
        name: 'Composite',
        className: 'ProcessInfo',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: false,
            serializedName: 'kind',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          identifier: {
            required: false,
            readOnly: true,
            serializedName: 'properties.identifier',
            type: {
              name: 'Number'
            }
          },
          deploymentName: {
            required: false,
            serializedName: 'properties.deployment_name',
            type: {
              name: 'String'
            }
          },
          href: {
            required: false,
            serializedName: 'properties.href',
            type: {
              name: 'String'
            }
          },
          minidump: {
            required: false,
            serializedName: 'properties.minidump',
            type: {
              name: 'String'
            }
          },
          isProfileRunning: {
            required: false,
            serializedName: 'properties.is_profile_running',
            type: {
              name: 'Boolean'
            }
          },
          isIisProfileRunning: {
            required: false,
            serializedName: 'properties.is_iis_profile_running',
            type: {
              name: 'Boolean'
            }
          },
          iisProfileTimeoutInSeconds: {
            required: false,
            serializedName: 'properties.iis_profile_timeout_in_seconds',
            type: {
              name: 'Number'
            }
          },
          parent: {
            required: false,
            serializedName: 'properties.parent',
            type: {
              name: 'String'
            }
          },
          children: {
            required: false,
            serializedName: 'properties.children',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          threads: {
            required: false,
            serializedName: 'properties.threads',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ProcessThreadInfoElementType',
                  type: {
                    name: 'Composite',
                    className: 'ProcessThreadInfo'
                  }
              }
            }
          },
          openFileHandles: {
            required: false,
            serializedName: 'properties.open_file_handles',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          modules: {
            required: false,
            serializedName: 'properties.modules',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ProcessModuleInfoElementType',
                  type: {
                    name: 'Composite',
                    className: 'ProcessModuleInfo'
                  }
              }
            }
          },
          fileName: {
            required: false,
            serializedName: 'properties.file_name',
            type: {
              name: 'String'
            }
          },
          commandLine: {
            required: false,
            serializedName: 'properties.command_line',
            type: {
              name: 'String'
            }
          },
          userName: {
            required: false,
            serializedName: 'properties.user_name',
            type: {
              name: 'String'
            }
          },
          handleCount: {
            required: false,
            serializedName: 'properties.handle_count',
            type: {
              name: 'Number'
            }
          },
          moduleCount: {
            required: false,
            serializedName: 'properties.module_count',
            type: {
              name: 'Number'
            }
          },
          threadCount: {
            required: false,
            serializedName: 'properties.thread_count',
            type: {
              name: 'Number'
            }
          },
          startTime: {
            required: false,
            serializedName: 'properties.start_time',
            type: {
              name: 'DateTime'
            }
          },
          totalCpuTime: {
            required: false,
            serializedName: 'properties.total_cpu_time',
            type: {
              name: 'String'
            }
          },
          userCpuTime: {
            required: false,
            serializedName: 'properties.user_cpu_time',
            type: {
              name: 'String'
            }
          },
          privilegedCpuTime: {
            required: false,
            serializedName: 'properties.privileged_cpu_time',
            type: {
              name: 'String'
            }
          },
          workingSet: {
            required: false,
            serializedName: 'properties.working_set',
            type: {
              name: 'Number'
            }
          },
          peakWorkingSet: {
            required: false,
            serializedName: 'properties.peak_working_set',
            type: {
              name: 'Number'
            }
          },
          privateMemory: {
            required: false,
            serializedName: 'properties.private_memory',
            type: {
              name: 'Number'
            }
          },
          virtualMemory: {
            required: false,
            serializedName: 'properties.virtual_memory',
            type: {
              name: 'Number'
            }
          },
          peakVirtualMemory: {
            required: false,
            serializedName: 'properties.peak_virtual_memory',
            type: {
              name: 'Number'
            }
          },
          pagedSystemMemory: {
            required: false,
            serializedName: 'properties.paged_system_memory',
            type: {
              name: 'Number'
            }
          },
          nonPagedSystemMemory: {
            required: false,
            serializedName: 'properties.non_paged_system_memory',
            type: {
              name: 'Number'
            }
          },
          pagedMemory: {
            required: false,
            serializedName: 'properties.paged_memory',
            type: {
              name: 'Number'
            }
          },
          peakPagedMemory: {
            required: false,
            serializedName: 'properties.peak_paged_memory',
            type: {
              name: 'Number'
            }
          },
          timeStamp: {
            required: false,
            serializedName: 'properties.time_stamp',
            type: {
              name: 'DateTime'
            }
          },
          environmentVariables: {
            required: false,
            serializedName: 'properties.environment_variables',
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
          },
          isScmSite: {
            required: false,
            serializedName: 'properties.is_scm_site',
            type: {
              name: 'Boolean'
            }
          },
          isWebjob: {
            required: false,
            serializedName: 'properties.is_webjob',
            type: {
              name: 'Boolean'
            }
          },
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ProcessInfo;
