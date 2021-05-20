import styled from "styled-components";

const FixedNav = styled.nav`
  position: fixed;
  display: flex;
  bottom: 0;

  width: 374px;
  background-color: var(--background-white);
  height: 3.75rem;

  > animation-fill-mode:hover {
    color: #000;
    > svg.home,
    svg.profile {
      stroke: #000;
    }
    > svg.add {
      fill: #000;
    }
  }

  > a.active {
    color: #000;
    > svg.home,
    svg.profile {
      stroke: #000;
    }
    > svg.add {
      fill: #000;
    }
  }

  > a {
    flex: 1;
    display: flex;
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

    color: #bfbebf;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.625rem;

    > span {
      font-family: "sf-pro-display";
      font-size: 0.625rem;
      font-weight: 400;
    }
  }

  @media (max-width: 375px) {
    right: 0;
    left: 0;
    width: initial;
  }
`;

export { FixedNav };
