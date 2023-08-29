const PolicySignal = {
  name: "Signal",
  dropdownItems: [
    "Axle Counter",
    "Electronic Interlocking",
    "Kavach",
    "Datalogger",
    "Level Crossing",
    "Power Supply",
    "IPS",
    "Safety",
    "Fire Alarms",
  ],
  linkToPath: [
    "policy-letters/signal/axel-counter",
    "policy-letters/signal/electronic-interlocking",
    "policy-letters/signal/kavach",
    "policy-letters/signal/datalogger",
    "policy-letters/signal/level-crossing",
    "policy-letters/signal/power-supply",
    "policy-letters/signal/ips",
    "policy-letters/signal/safety",
    "policy-letters/signal/fire-alarms",
  ],
};
const RDSOSignal = {
  name: "Signal",
  dropdownItems: ["Signal IRS Specifications", "Signal SPN Specifications"],
  linkToPath: [
    "RDSO-Specifications/signal/signal-irs-specifications",
    "RDSO-Specifications/signal/signal-spn-specifications",
  ],
};
const RDSOTelecom = {
  name: "Telecom",
  dropdownItems: ["Telecom IRS Specifications", "Telecom SPN Specifications"],
  linkToPath: [
    "RDSO-Specifications/signal/telecom-irs-specifications",
    "RDSO-Specifications/signal/telecom-spn-specifications",
  ],
};
const PolocyLetters = {
  name: "Policy Letters",
  dropdownItems: [PolicySignal, "Telecom"],
  linkToPath: [undefined, "policy-letters/telecom"],
};
const RDSOSpecifications = {
  name: "RDSO Specifications",
  dropdownItems: [RDSOSignal, RDSOTelecom],
  linkToPath: [undefined, undefined],
};

export const Resources = {
  name: "Resources",
  dropdownItems: [
    "General",
    PolocyLetters,
    RDSOSpecifications,
    "Pink Book 2023-24",
    "Schedule of Rates",
    "Camtech Webinars",
  ],
  linkToPath: [
    "resources/general",
    undefined,
    undefined,
    "resources/pink-book-2023-24",
    "resources/schedule-of-rates",
    "resources/camtech-webinars",
  ],
};
