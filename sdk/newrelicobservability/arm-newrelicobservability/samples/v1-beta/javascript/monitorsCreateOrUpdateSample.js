/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NewRelicObservability } = require("@azure/arm-newrelicobservability");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create a NewRelicMonitorResource
 *
 * @summary Create a NewRelicMonitorResource
 * x-ms-original-file: specification/newrelic/resource-manager/NewRelic.Observability/preview/2022-07-01-preview/examples/Monitors_CreateOrUpdate_MaximumSet_Gen.json
 */
async function monitorsCreateOrUpdateMaximumSetGen() {
  const subscriptionId = process.env["NEWRELICOBSERVABILITY_SUBSCRIPTION_ID"] || "hfmjmpyqgezxkp";
  const resourceGroupName = process.env["NEWRELICOBSERVABILITY_RESOURCE_GROUP"] || "rgNewRelic";
  const monitorName = "cdlymktqw";
  const resource = {
    accountCreationSource: "LIFTR",
    identity: { type: "None", userAssignedIdentities: { key8903: {} } },
    liftrResourceCategory: "Unknown",
    location: "k",
    marketplaceSubscriptionStatus: "Active",
    monitoringStatus: "Enabled",
    newRelicAccountProperties: {
      accountInfo: {
        accountId: "xhqmg",
        ingestionKey: "wltnimmhqt",
        region: "ljcf",
      },
      organizationInfo: { organizationId: "k" },
      singleSignOnProperties: {
        enterpriseAppId: "kwiwfz",
        provisioningState: "Accepted",
        singleSignOnState: "Initial",
        singleSignOnUrl: "kvseueuljsxmfwpqctz",
      },
      userId: "vcscxlncofcuduadesd",
    },
    orgCreationSource: "LIFTR",
    planData: {
      billingCycle: "YEARLY",
      effectiveDate: new Date("2022-12-05T14:11:37.786Z"),
      planDetails: "tbbiaga",
      usageType: "PAYG",
    },
    provisioningState: "Accepted",
    tags: { key6976: "oaxfhf" },
    userInfo: {
      country: "hslqnwdanrconqyekwbnttaetv",
      emailAddress: "%6%@4-g.N1.3F-kI1.Ue-.lJso",
      firstName: "vdftzcggirefejajwahhwhyibutramdaotvnuf",
      lastName: "bcsztgqovdlmzfkjdrngidwzqsevagexzzilnlc",
      phoneNumber: "krf",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new NewRelicObservability(credential, subscriptionId);
  const result = await client.monitors.beginCreateOrUpdateAndWait(
    resourceGroupName,
    monitorName,
    resource
  );
  console.log(result);
}

async function main() {
  monitorsCreateOrUpdateMaximumSetGen();
}

main().catch(console.error);
