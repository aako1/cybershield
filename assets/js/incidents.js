[4:51 am, 18/08/2026] ᴀʜᴍᴇᴅ ᴀʟɪ▪︎: // CyberShield Vulnerability Management
// Educational vulnerability simulation

document.addEventListener("DOMContentLoaded", () => {

    console.log("CyberShield Vulnerability Management loaded successfully.");

    const vulnerabilities = [
        {
            id: "VULN-001",
            issue: "Outdated authentication component",
            severity: "Critical",
            riskScore: 9.4,
            status: "Open"
        },
        {
            id: "VULN-002",
            issue: "Weak access control configuration",
            severity: "Critical",
            riskScore: 9.1,
            status: "Investigating"
        },
        {
            id: "VULN-003",
            issue: "Unpatched application component",
            severity: "High",
            riskScore: 8.2,
            status: "Open"
        },
        {
            id: "VULN-004",
            issue: "Insecure configuration",
            severity: "High",
            riskScore: 7.8,
            status: "Reviewing"
        },
        {
            id: "VULN-005",
            issue: "Weak security headers",
            severity: "Medium",
            riskScore: 5.6,
            status: "Open"
        },
        {
            id: "VULN-006",
            issue: "Missing security configuration",
            severity: "Low",
            riskScore: 3.2,
            status: "Resolved"
        }
    ];

    console.table(vulnerabilities);

    const critical = vulnerabilities.filter(
        vulnerability => vulnerability.severity === "Critical"
    ).length;

    const high = vulnerabilities.filter(
        vulnerability => vulnerability.severity === "High"
    ).length;

    const medium = vulnerabilities.filter(
        vulnerability => vulnerability.severity === "Medium"
    ).length;

    const low = vulnerabilities.filter(
        vulnerability => vulnerability.severity === "Low"
    ).length;

    console.log("Critical:", critical);
    console.log("High:", high);
    console.log("Medium:", medium);
    console.log("Low:", low);

});
[4:55 am, 18/08/2026] ᴀʜᴍᴇᴅ ᴀʟɪ▪︎: // CyberShield Incident Response
// Educational incident simulation

document.addEventListener("DOMContentLoaded", () => {

    console.log("CyberShield Incident Response loaded successfully.");

    const incidents = [
        {
            id: "INC-001",
            type: "Account Security Event",
            severity: "Critical",
            status: "Investigating",
            detected: "22:15"
        },
        {
            id: "INC-002",
            type: "Suspicious Authentication",
            severity: "High",
            status: "Contained",
            detected: "21:40"
        },
        {
            id: "INC-003",
            type: "Endpoint Security Event",
            severity: "High",
            status: "Monitoring",
            detected: "20:25"
        },
        {
            id: "INC-004",
            type: "Configuration Issue",
            severity: "Medium",
            status: "Open",
            detected: "19:30"
        }
    ];

    console.table(incidents);

    const activeIncidents = incidents.filter(
        incident => incident.status !== "Resolved"
    ).length;

    const criticalIncidents = incidents.filter(
        incident => incident.severity === "Critical"
    ).length;

    console.log("Active Incidents:", activeIncidents);
    console.log("Critical Incidents:", criticalIncidents);

});
