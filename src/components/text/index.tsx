import styled from "styled-components";
import { switchProp } from "styled-tools";
import TextType from "./types";

type TextProps = {
    type: keyof typeof TextType;
    color?: string;
    align?: string;
};

const Text = styled.p<TextProps>`
  font-family: "Inter", sans-serif;
  font-size: ${switchProp("type", {
    [TextType.XL]: "20px",
    [TextType.L]: "18px",
    [TextType.M]: "16px",
    [TextType.S]: "14px",
})};
  font-weight: ${switchProp("type", {
    [TextType.L]: 500,
    [TextType.XL]: 600,
    [TextType.M]: 400,
    [TextType.S]: 400,
})};
  color: ${({ color }) => color || 'grey'};
  text-align: ${({ align }) => align};
  margin: 0;
`;

export default Text;
