// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test4.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test4.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobschedules?api-version=2020-03-01.11.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Sat, 21 Mar 2020 04:36:24 GMT',
  etag: '0x8D7CD51695E1909',
  location:
   'https://test4.japaneast.batch.azure.com/jobschedules/NodeSDKTestSchedule',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '5e7b4890-d24d-48c0-9c52-2549486b32b2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid:
   'https://test4.japaneast.batch.azure.com/jobschedules/NodeSDKTestSchedule',
  date: 'Sat, 21 Mar 2020 04:36:24 GMT',
  connection: 'close' });
 return result; }]];