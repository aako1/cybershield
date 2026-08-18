// CyberShield Threat Monitoring
// Educational threat simulation

document.addEventListener("DOMContentLoaded", () => {

    console.log("CyberShield Threat Monitoring loaded successfully.");

    const threats = [
        {
            id: "THR-001",
            name: "Credential Theft",
            category: "Account Security",
            risk: "Critical",
            status: "Investigating"
        },
        {
            id: "THR-002",
            name: "Suspicious Authentication",
            category: "Identity Security",
            risk: "High",
            status: "Monitoring"
        },
        {
            id: "THR-003",
            name: "Malicious File Simulation",
            category: "Endpoint Security",
            risk: "High",
            status: "Detected"
        },
        {
            id: "THR-004",
            name: "Unpatched Application",
            category: "Vulnerability",
            risk: "Medium",
            status: "Open"
        },
        {
            id: "THR-005",
            name: "Weak Authentication Policy",
            category: "Access Control",
            risk: "Medium",
            status: "Reviewing"
        },
        {
            id: "THR-006",
            name: "Security Configuration Issue",
            category: "Configuration",
            risk: "Low",
            status: "Resolved"
        }
    ];

    console.table(threats);

});
