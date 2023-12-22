import { HashLoader } from "react-spinners";
import styled from "styled-components";

const HashLoaderDiv = styled.div`
  position: absolute;
  top: 50% !important;
  left: 50%;
`;
interface CustomHashLoaderProps {
  color?: string;
  size?: number;
}
export function CustomHashLoader({ color, size }: CustomHashLoaderProps) {
  return (
    <HashLoaderDiv>
      <HashLoader color={color} size={size} />
    </HashLoaderDiv>
  );
}
