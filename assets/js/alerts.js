// CyberShield Alerts
// Educational security alert simulation

document.addEventListener("DOMContentLoaded", () => {

    console.log("CyberShield Alerts loaded successfully.");

    const alerts = [
        {
            id: "ALT-001",
            title: "Multiple Failed Login Attempts",
            severity: "Critical",
            status: "Investigating"
        },
        {
            id: "ALT-002",
            title: "Suspicious Login Activity",
            severity: "High",
            status: "Open"
        },
        {
            id: "ALT-003",
            title: "Outdated Security Software",
            severity: "Medium",
            status: "Open"
        },
        {
            id: "ALT-004",
            title: "Security Policy Updated",
            severity: "Low",
            status: "Resolved"
        }
    ];

    console.table(alerts);

});
