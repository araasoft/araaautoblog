import dotenv from "dotenv";

dotenv.config();


// async function getLinkedInEngagement() {
//   const response = await fetch(
//     `https://api.linkedin.com/rest/socialMetadata/${encodeURIComponent(postUrn)}`,
//     {
//       headers: {
//         Authorization: `Bearer AQV8tAtGnR6kMNVtt4RuaERPza85XwJ-dmt9VfhiNYnobkzQBAp4-nCVggE8p_zuzwSDt7LmeXuT1PclpjIIs1UEiyiFx02c49PqiVjCPOhuKCmmHlgLKfPCwxi8nZZtD_64NGMR1C60aMfrRd9uSEqC9IkQf-do4n0z4b60OBQqSfT5nXQ6qOa8qGBfmihgWYC0an1wzRIrCjheaMjYTv5WftDpggKMnQWghS6G4vJzykXgBldwhz8jVgG1ixZDaQy_-f_-hy0s9Rbj1xm5W1MpDBAy6q03YQyFkH_MeVssLHjzj_2GajSxs2nhJhegEPZaCmsj2oSenqab2rJ9fBcN_aKNIg`,
//         "LinkedIn-Version": "202610",
//         "X-Restli-Protocol-Version": "2.0.0"
//       }
//     }
//   );

//   if (!response.ok) {
//     throw new Error(
//       `LinkedIn API error: ${response.status} ${await response.text()}`
//     );
//   }

//   const data = await response.json();

//   console.log("Engagement:", data);
// }

async function getLinkedInEngagement() {
  const postUrn = "urn:li:activity:7520172378002182144";

  const url = `https://api.linkedin.com/rest/socialMetadata/${encodeURIComponent(postUrn)}`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer AQV7b_Gjf8PfX0jAbB9wYaKaSIBwlP6TlqSRoncalhg2pJIlHzLJJP0DP8QScER4ZiXSCIE4b86rdi9FUvWgznUQbDgzd_ZgxZ01Y3zZJkVsB51R5r9aFDJpPGLvMEQgHZ6t4aNs0wCgNsudE2YP_90muzbrgJfk0LlP03tP7YwjcwCFTWH4C-1D6rPMxQByxXUBIh8FR56iOCURagyNw-w6qojua4ZvHOnybjpfae2xlgRxzatuTrpOolbQ-UwoVFI4asy9XilN8Mc_SCJv1l_Ld60ezYO9YY0pA2txnf5sXAc-6fVKgpIMwp5PHt2dyz_CRyB_v_bNRPFLvifs6DsUWdQ8AQ`,
      "LinkedIn-Version": "202610",
      "X-Restli-Protocol-Version": "2.0.0",
    },
  });

  const data = await res.json();

  console.log("HTTP Status:", res.status);
  console.log("Response:", JSON.stringify(data, null, 2));
}

getLinkedInEngagement().catch(console.error);
