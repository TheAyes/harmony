"use strict";
const styles = ".status-indicator {\n  font-size: 4.08em;\n  font-weight: bolder;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 0.5882352941em;\n  height: 0.5882352941em;\n  padding: 2px;\n  border: 0.0840336134em solid var(--palette-background-paper, #313244);\n  border-radius: 999vw;\n  aspect-ratio: 1/1;\n}\n.status-indicator > svg {\n  stroke: var(--palette-background-paper, #313244);\n  stroke-width: 0.1em;\n}\n.status-indicator.online {\n  background-color: var(--palette-states-online, #a6e3a1);\n}\n.status-indicator.idle {\n  background-color: var(--palette-states-idle, #cba6f7);\n}\n.status-indicator.busy {\n  background-color: var(--palette-states-busy, #f38ba8);\n}\n.status-indicator.offline {\n  background-color: var(--palette-states-offline, #817070);\n}\n.status-indicator.disconnected {\n  background-color: var(--palette-states-disconnected, #c24f7d);\n}";
module.exports = styles;
