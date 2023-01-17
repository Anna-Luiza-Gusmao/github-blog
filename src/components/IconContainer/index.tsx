import { ReactNode } from "react";
import { IconContainerDiv } from "./styles"

interface IconContainerProps {
    children: ReactNode;
}

export function IconContainer ({ children }: IconContainerProps) {
    return (
        <IconContainerDiv>
            {children}
        </IconContainerDiv>
    )
}