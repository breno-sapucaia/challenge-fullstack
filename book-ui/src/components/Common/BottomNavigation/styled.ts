import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

interface FixedNavProps {
  readonly $center?: boolean;
}

const FixedNav = styled.nav<FixedNavProps>`
  position: fixed;
  display: flex;
  bottom: 0;
  margin: 0 auto;

  width: 374px;
  background-color: var(--background-white);
  height: 3.75rem;
  z-index: 10;

  @media (min-width: 376px) {
    ${(props) =>
      props.$center
        ? css`
            left: 50%;
            transform: translateX(-50%);
          `
        : null}
  }

  @media (max-width: 375px) {
    right: 0;
    left: 0;
    width: initial;
  }
`;

interface LinkContainerProps {
  readonly $customIsActive?: boolean;
}
const LinkContainer = styled(NavLink)<LinkContainerProps>`
  display: flex;
  flex: 1;
  color: #bfbebf;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.625rem;

  > svg {
    width: 1.5rem;
  }
  > svg.home,
  svg.profile {
    stroke: #bfbebf;
  }
  > svg.add {
    fill: #bfbebf;
  }

  ${(props) =>
    props.$customIsActive
      ? css`
          color: #000;
          > svg.home,
          svg.profile {
            stroke: #000;
          }
          > svg.add {
            fill: #000;
          }
        `
      : css``}

  :hover {
    color: #000;
    > svg.home,
    svg.profile {
      stroke: #000;
    }
    > svg.add {
      fill: #000;
    }
  }

  > span {
    font-family: "sf-pro-display";
    font-size: 0.625rem;
    font-weight: 400;
  }
`;

export { FixedNav, LinkContainer };
