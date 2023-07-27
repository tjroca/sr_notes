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


// }

document.querySelector(".gen-email").onclick = function() {
    const outputField = document.querySelector("#output-field");
    const outputString = `Hello, {{{Recipient.FirstName}}},\n\nThank you for your time on the remote session today. Below is a summary of that session as well as the next steps for this case. If you have any questions or you discover any new information, please let us know. Thank you again for your time and for choosing Check Point as your security partner.\n\nFindings\n════════\n${document.querySelector("#frs-findings-field").value}\n\nNext Steps\n══════════\n${document.querySelector("#frs-next-steps-field").value}`;
    outputField.value = outputString;
}

document.querySelector("#fo-gen-email").onclick = function() {
    const outputField = document.querySelector("#output-field");
    const outputString = `Hello, {{{Recipient.FirstName}}},\n\nThank you for your time on the remote session today. Below is a summary of that session as well as the next steps for this case. If you have any questions or you discover any new information, please let us know. Thank you again for your time and for choosing Check Point as your security partner.\n\nFindings\n════════\n${document.querySelector("#fo-findings-field").value}\n\nNext Steps\n══════════\n${document.querySelector("#fo-next-steps-field").value}`;
    outputField.value = outputString;
}



document.querySelector("#gen-first-session-notes").onclick = function() {
    const outputField = document.querySelector("#output-field");
    console.log(outputField);

    const outputString = `# REMOTE SESSION NOTES #    
╔═════════╗
║SR NUMBER
╚═════════╝
${document.querySelector("#frs-sr-number-field").value}

╔═════════════╗
║CUSTOMER NAME
╚═════════════╝
${document.querySelector("#frs-customer-name-field").value}

╔══════════════╗
║CONTACT NUMBER
╚══════════════╝
${document.querySelector("#frs-contact-number-field").value}

╔═════════════════════╗
║ENVIRONMENT & VERSION
╚═════════════════════╝
${document.querySelector("#frs-environment-field").value}

╔═══════════════╗
║BUSINESS IMPACT
╚═══════════════╝
${document.querySelector("#frs-business-impact-field").value}

╔════════════════╗
║SUMMARY OF ISSUE
╚════════════════╝
${document.querySelector("#frs-issue-summary-field").value}

╔════════╗
║FINDINGS
╚════════╝
${document.querySelector("#frs-findings-field").value}

╔════════════════╗
║FILES & LOCATION
╚════════════════╝
${document.querySelector("#frs-files-location-field").value}

╔══════════╗
║NEXT STEPS
╚══════════╝
${document.querySelector("#frs-next-steps-field").value}
`;


    outputField.value = outputString;
}




document.querySelector("#gen-followup-session-notes").onclick = function() {
    const outputField = document.querySelector("#output-field");

    const outputString = `# REMOTE SESSION NOTES #    
╔═════════╗
║SR NUMBER
╚═════════╝
${document.querySelector("#fo-sr-number-field").value}

╔═════════════╗
║CUSTOMER NAME
╚═════════════╝
${document.querySelector("#fo-customer-name-field").value}

╔════════════════╗
║SUMMARY OF ISSUE
╚════════════════╝
${document.querySelector("#fo-issue-summary-field").value}

╔════════╗
║FINDINGS
╚════════╝
${document.querySelector("#fo-findings-field").value}

╔════════════════╗
║FILES & LOCATION
╚════════════════╝
${document.querySelector("#fo-files-location-field").value}

╔══════════╗
║NEXT STEPS
╚══════════╝
${document.querySelector("#fo-next-steps-field").value}`;

    outputField.value = outputString;
}


document.querySelector("#gen-escalation-notes").onclick = function() {
    const outputField = document.querySelector("#output-field");
    console.log(outputField);

    const outputString = `# REMOTE SESSION NOTES #    
╔═════════╗
║SR NUMBER
╚═════════╝
${document.querySelector("#sr-number-field").value}

╔═════════════╗
║CUSTOMER NAME
╚═════════════╝
${document.querySelector("#customer-name-field").value}

╔═════════════════════╗
║ENVIRONMENT & VERSION
╚═════════════════════╝
${document.querySelector("#environment-field").value}

╔═══════════════╗
║BUSINESS IMPACT
╚═══════════════╝
${document.querySelector("#business-impact-field").value}

╔════════════════╗
║SUMMARY OF ISSUE
╚════════════════╝
${document.querySelector("#issue-summary-field").value}

╔════════╗
║FINDINGS
╚════════╝
${document.querySelector("#findings-field").value}

╔════════════════╗
║FILES & LOCATION
╚════════════════╝
${document.querySelector("#files-location-field").value}

╔═══════════════╗
║LAB REPLICATION
╚═══════════════╝
${document.querySelector("#lab-replication-field").value}
`;


    outputField.value = outputString;
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