/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { MobileNetworkManagementClient } = require("@azure/arm-mobilenetwork");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets all the attached data networks associated with a packet core data plane.
 *
 * @summary Gets all the attached data networks associated with a packet core data plane.
 * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/stable/2022-11-01/examples/AttachedDataNetworkListByPacketCoreDataPlane.json
 */
async function listAttachedDataNetworksInADataPlane() {
  const subscriptionId = process.env["MOBILENETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["MOBILENETWORK_RESOURCE_GROUP"] || "rg1";
  const packetCoreControlPlaneName = "TestPacketCoreCP";
  const packetCoreDataPlaneName = "TestPacketCoreDP";
  const credential = new DefaultAzureCredential();
  const client = new MobileNetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.attachedDataNetworks.listByPacketCoreDataPlane(
    resourceGroupName,
    packetCoreControlPlaneName,
    packetCoreDataPlaneName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listAttachedDataNetworksInADataPlane();
}

main().catch(console.error);
