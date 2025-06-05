/* eslint-disable react/prop-types */
// import React from "react";
import styled from "styled-components";

const ChartContainer = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  margin-top: 16px;
`;

const StyledChart = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const CircleChart = ({ malePercentage, femalePercentage }) => {
  // Calculate angles based on percentages
  const maleAngle = (malePercentage / 100) * 360;
  const femaleAngle = (femalePercentage / 100) * 360;

  return (
    <ChartContainer>
      <StyledChart
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
      >
        {/* Female segment */}
        <path
          d={describeArc(50, 50, 42.5, 0, femaleAngle)}
          fill="transparent"
          stroke="#50CD89"
          strokeWidth="15"
        />
        {/* Male segment */}
        <path
          d={describeArc(50, 50, 42.5, femaleAngle, maleAngle + femaleAngle)}
          fill="transparent"
          stroke="#E4E6EF"
          strokeWidth="15"
        />
      </StyledChart>
    </ChartContainer>
  );
};

// Helper function to create the path for an arc
function describeArc(x, y, radius, startAngle, endAngle) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  const d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return d;
}

// Helper function to convert polar coordinates to Cartesian coordinates
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees - 90) * (Math.PI / 180);
  const x = centerX + radius * Math.cos(angleInRadians);
  const y = centerY + radius * Math.sin(angleInRadians);
  return { x, y };
}

export default CircleChart;
