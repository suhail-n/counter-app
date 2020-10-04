import React from "react";
import { Badge as BootstrapBadge } from "react-bootstrap";

/**
 * colors and fonts
 * @type {React.CSSProperties}
 */
const badgeStyles = {
  fontWeight: "bold",
  fontSize: 20
};
const Badge = ({ style = {}, ...props }) => <BootstrapBadge {...props} style={{ ...badgeStyles, ...style }} />

export default Badge;