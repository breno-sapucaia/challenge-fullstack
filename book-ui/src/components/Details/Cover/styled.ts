import styled from "styled-components";
import Ovals from "../../../assets/ovals-book-detail.svg";

const CoverContainer = styled.header`
  position: relative;
  overflow: hidden;
  ::after {
    content: "";
    position: absolute;
    height: 17.625rem;
    top: 0;
    left: 0;
    right: 0;
    border-bottom-right-radius: 6.25rem;
    background-color: var(--background-white-600);
    z-index: -1;
  }

  > div.wrapper {
    position: relative;
    max-width: 150px;
    margin: 0 auto;
    height: 17.625rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    &:after {
      content: "";
      position: absolute;
      display: block;
      width: 25rem;
      background-repeat: no-repeat;
      height: 19.6875rem;
      background-image: url(${Ovals});
      top: 46%;
      left: 89%;
      margin-right: -50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -11.875rem;

  img.cover {
    border-radius: 0.5rem;
    position: relative;
    margin-bottom: -2rem;
    min-height: 13.875rem;
    max-width: 9.375rem;
    z-index: 2;
  }
  > div.shadow {
    position: absolute;
    bottom: -2.5rem;
    left: 50%;
    margin-right: -50%;
    transform: translateX(-50%);
    background-color: #000;
    width: 9.375rem;
    height: 0.5rem;

    filter: blur(1.75rem);
  }
`;

export { CoverContainer, ImageContainer };
