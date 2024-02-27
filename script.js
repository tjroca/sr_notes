// window.onload = function() {

      // Show first session template
      document.querySelector("#first-session-btn").onclick = function() {
        document.querySelector("#first-session-sub-container").classList.remove("hidden");
        document.querySelector("#followup-session-sub-container").classList.add("hidden");
        document.querySelector("#escalation-template-sub-container").classList.add("hidden");
      }

      // Show follow up session template
      document.querySelector("#followup-session-btn").onclick = function() {
        document.querySelector("#first-session-sub-container").classList.add("hidden");
        document.querySelector("#followup-session-sub-container").classList.remove("hidden");
        document.querySelector("#escalation-template-sub-container").classList.add("hidden");
      }

      // Show escalation template
      document.querySelector("#escalation-template-btn").onclick = function() {
        document.querySelector("#first-session-sub-container").classList.add("hidden");
        document.querySelector("#followup-session-sub-container").classList.add("hidden");
        document.querySelector("#escalation-template-sub-container").classList.remove("hidden");
      }

    // Dark mode toggle
      document.querySelector(".dark-mode-toggle").onclick = function() {
        let darkDisabled = document.getElementsByTagName('link')[3].disabled
        if (darkDisabled) {
            document.getElementsByTagName('link')[3].disabled = false;
        }
        else if (!darkDisabled) {
            document.getElementsByTagName('link')[3].disabled = true;
        }
        else {
            console.log("Error toggling dark mode");
        }
      }

// }

// Download local version
// document.querySelector("#download-btn").onclick = function() {
//     alert("download");
//     $.ajax({
//     type: "GET",
//     url: "https://raw.githubusercontent.com/tjroca/sr_notes/main/darkmode.css",
//     success: function(data) {
//         console.log(data);
//         console.log("Download successful");
//     },
//     dataType: "html"
//     });
// }


// First remote session Email
document.querySelector("#frs-gen-email").onclick = function() {
    const outputField = document.querySelector("#output-field");
    let findings = document.querySelector("#frs-findings-field").value;
    const formattedFindings = formatText(findings);
    const outputString = `Hello {{{Recipient.FirstName}}},\n\nThank you for your time on the remote session today. Below is a summary of that session as well as the next steps for this case. If you have any questions or you discover any new information, please let us know. Thank you again for your time and for choosing Check Point as your security partner.\n\nFindings\n════════\n${formattedFindings}\n\nNext Steps\n══════════\n${document.querySelector("#frs-next-steps-field").value}`;
    outputField.value = outputString;
}

// Follow up session Email
document.querySelector("#fo-gen-email").onclick = function() {
    const outputField = document.querySelector("#output-field");
    let findings = document.querySelector("#fo-findings-field").value;
    const formattedFindings = formatText(findings);
    const outputString = `Hello {{{Recipient.FirstName}}},\n\nThank you for your time on the remote session today. Below is a summary of that session as well as the next steps for this case. If you have any questions or you discover any new information, please let us know. Thank you again for your time and for choosing Check Point as your security partner.\n\nFindings\n════════\n${formattedFindings}\n\nNext Steps\n══════════\n${document.querySelector("#fo-next-steps-field").value}`;
    outputField.value = outputString;
}

// Clear first remote session
document.querySelector("#frs-clear").onclick = function() {
    let fields = document.getElementsByClassName("frs");
    for (let i = 0; i < fields.length; i++) {
        fields[i].value = "";
    }
    document.querySelector("#output-field").value = "";
}

// Clear follow up remote session
document.querySelector("#fo-clear").onclick = function() {
    let fields = document.getElementsByClassName("fo");
    for (let i = 0; i < fields.length; i++) {
        fields[i].value = "";
    }
    document.querySelector("#output-field").value = "";
}

// Clear escalation
document.querySelector("#esc-clear").onclick = function() {
    let fields = document.getElementsByClassName("esc");
    for (let i = 0; i < fields.length; i++) {
        fields[i].value = "";
    }
    document.querySelector("#output-field").value = "";
}


let HEADER_START = "❰❰";
let HEADER_END = "❱❱";


document.querySelector("#gen-first-session-notes").onclick = function() {
    const outputField = document.querySelector("#output-field");
    let frsIssueSummaryField = document.querySelector("#frs-issue-summary-field").value;
    const formattedIssueSummary = formatText(frsIssueSummaryField);
    let frsFindingsField = document.querySelector("#frs-findings-field").value;
    const formattedFindings = formatText(frsFindingsField);

    const outputString = `❰❰ 𝗥𝗘𝗠𝗢𝗧𝗘 𝗦𝗘𝗦𝗦𝗜𝗢𝗡 𝗡𝗢𝗧𝗘𝗦 ❱❱

𝗦𝗥 𝗡𝗨𝗠𝗕𝗘𝗥
‾‾‾‾‾‾‾‾‾‾‾‾‾‾
${document.querySelector("#frs-sr-number-field").value}

𝗖𝗨𝗦𝗧𝗢𝗠𝗘𝗥 𝗡𝗔𝗠𝗘
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
${document.querySelector("#frs-customer-name-field").value}

𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗡𝗨𝗠𝗕𝗘𝗥
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
${document.querySelector("#frs-contact-number-field").value}

𝗘𝗡𝗩𝗜𝗥𝗢𝗡𝗠𝗘𝗡𝗧 & 𝗩𝗘𝗥𝗦𝗜𝗢𝗡
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
${document.querySelector("#frs-environment-field").value}

𝗕𝗨𝗦𝗜𝗡𝗘𝗦𝗦 𝗜𝗠𝗣𝗔𝗖𝗧
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
${document.querySelector("#frs-business-impact-field").value}

𝗦𝗨𝗠𝗠𝗔𝗥𝗬 𝗢𝗙 𝗜𝗦𝗦𝗨𝗘
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
${formattedIssueSummary}
𝗙𝗜𝗡𝗗𝗜𝗡𝗚𝗦
‾‾‾‾‾‾‾‾‾‾‾
${formattedFindings}
𝗙𝗜𝗟𝗘𝗦 & 𝗟𝗢𝗖𝗔𝗧𝗜𝗢𝗡
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
${document.querySelector("#frs-files-location-field").value}

𝗡𝗘𝗫𝗧 𝗦𝗧𝗘𝗣𝗦
‾‾‾‾‾‾‾‾‾‾‾‾‾
${document.querySelector("#frs-next-steps-field").value}
`;


    outputField.value = outputString;
}




document.querySelector("#gen-followup-session-notes").onclick = function() {
    const outputField = document.querySelector("#output-field");
    let issueSummaryField = document.querySelector("#fo-issue-summary-field").value;
    const formattedIssueSummary = formatText(issueSummaryField);
    let foFindingsField = document.querySelector("#fo-findings-field").value;
    const formattedFindings = formatText(foFindingsField);    

    const outputString = `❰❰ 𝗥𝗘𝗠𝗢𝗧𝗘 𝗦𝗘𝗦𝗦𝗜𝗢𝗡 𝗡𝗢𝗧𝗘𝗦 ❱❱    

𝗦𝗥 𝗡𝗨𝗠𝗕𝗘𝗥
‾‾‾‾‾‾‾‾‾‾‾‾‾‾
${document.querySelector("#fo-sr-number-field").value}

𝗖𝗨𝗦𝗧𝗢𝗠𝗘𝗥 𝗡𝗔𝗠𝗘
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
${document.querySelector("#fo-customer-name-field").value}

𝗦𝗨𝗠𝗠𝗔𝗥𝗬 𝗢𝗙 𝗜𝗦𝗦𝗨𝗘
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
${formattedIssueSummary}
𝗙𝗜𝗡𝗗𝗜𝗡𝗚𝗦
‾‾‾‾‾‾‾‾‾‾‾
${formattedFindings}
𝗙𝗜𝗟𝗘𝗦 & 𝗟𝗢𝗖𝗔𝗧𝗜𝗢𝗡
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
${document.querySelector("#fo-files-location-field").value}

𝗡𝗘𝗫𝗧 𝗦𝗧𝗘𝗣𝗦
‾‾‾‾‾‾‾‾‾‾‾‾‾
${document.querySelector("#fo-next-steps-field").value}`;

    outputField.value = outputString;
}


document.querySelector("#gen-escalation-notes").onclick = function() {
    const outputField = document.querySelector("#output-field");
    let escIssueSummaryField = document.querySelector("#esc-issue-summary-field").value;
    const formattedIssueSummary = formatText(escIssueSummaryField);
    let escFindingsField = document.querySelector("#esc-findings-field").value;
    const formattedFindings = formatText(escFindingsField);

    const outputString = `❰❰ 𝗘𝗦𝗖𝗔𝗟𝗔𝗧𝗜𝗢𝗡 𝗡𝗢𝗧𝗘𝗦 ❱❱ 

𝗦𝗥 𝗡𝗨𝗠𝗕𝗘𝗥
‾‾‾‾‾‾‾‾‾‾‾‾‾‾
${document.querySelector("#sr-number-field").value}

𝗖𝗨𝗦𝗧𝗢𝗠𝗘𝗥 𝗡𝗔𝗠𝗘
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
${document.querySelector("#customer-name-field").value}

𝗘𝗡𝗩𝗜𝗥𝗢𝗡𝗠𝗘𝗡𝗧 & 𝗩𝗘𝗥𝗦𝗜𝗢𝗡
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
${document.querySelector("#environment-field").value}

𝗕𝗨𝗦𝗜𝗡𝗘𝗦𝗦 𝗜𝗠𝗣𝗔𝗖𝗧
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
${document.querySelector("#business-impact-field").value}

𝗦𝗨𝗠𝗠𝗔𝗥𝗬 𝗢𝗙 𝗜𝗦𝗦𝗨𝗘
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
${formattedIssueSummary}
𝗙𝗜𝗡𝗗𝗜𝗡𝗚𝗦
‾‾‾‾‾‾‾‾‾‾‾
${formattedFindings}
𝗙𝗜𝗟𝗘𝗦 & 𝗟𝗢𝗖𝗔𝗧𝗜𝗢𝗡
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
${document.querySelector("#files-location-field").value}

𝗟𝗔𝗕 𝗥𝗘𝗣𝗟𝗜𝗖𝗔𝗧𝗜𝗢𝗡
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
${document.querySelector("#lab-replication-field").value}
`;


    outputField.value = outputString;
}

function formatText(findingsString) {
    var lines = findingsString.split("\n");
    var formattedLines = [];
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].startsWith("- ")) {
            const newline = lines[i].replace(/- /gi, "        • ");          // bullet points
            // const newline1 = lines[i].replace(/->/gi, "➞");           // arrows
            formattedLines.push(newline + "\n");
        }else {
            formattedLines.push(lines[i] + "\n");
        }
    }
    let formattedFindings = formattedLines.join("");
    return formattedFindings;
}


// Copy to clipboard
async function copyToClipboard() {
    var outputText = document.querySelector("#output-field").value;
    try {
    await navigator.clipboard.writeText(outputText);
    console.log("copied text");
    } catch (err) {
    console.error("Failed to copy");
    }
}
