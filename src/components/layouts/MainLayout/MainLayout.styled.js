import styled from "styled-components";

export const LayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  background-color: var(--low-white);

  @media (min-width: 48rem) {
    padding: 0 4rem;
  }
`;

export const LayoutContainer = styled.div`
  width: 100%;
  max-width: 75rem;
  height: 100%;
  background-color: red;
  margin: auto;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 48rem) {
    box-shadow: 10px 10px 20px -20px rgba(153, 153, 153, 0.75);
    -webkit-box-shadow: 10px 10px 20px -20px rgba(153, 153, 153, 0.75);
    -moz-box-shadow: 10px 10px 20px -20px rgba(153, 153, 153, 0.75);
    max-height: 50rem;
  }
`;
