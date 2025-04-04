import React from "react";

const ReportsTableLoading = () => {
  return (
    <div style={loadingDivStyle}>
      <div style={spinnerStyle}></div>
    </div>
  );
};

// Styles
const loadingDivStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  flexDirection: "column",
  backgroundImage: "linear-gradient(180deg, #f8e9ef, #dbe9fa)",
};

const spinnerStyle = {
  width: "25px", // Half of the original 50px width
  height: "25px", // Adjust height proportionally to maintain the circular shape
  border: "5px solid #f3f3f3", // Light gray border
  borderTop: "5px solid #3498db", // Blue spinner
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};

const welcomeTextStyle = {
  marginBottom: "20px",
  fontSize: "18px",
  color: "#333", // Dark gray for readability
  fontWeight: "bold",
  textAlign: "center",
};

// Spinner animation
const spinnerAnimationStyle = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Inject spinner animation style into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = spinnerAnimationStyle;
document.head.appendChild(styleSheet);

export default ReportsTableLoading;
