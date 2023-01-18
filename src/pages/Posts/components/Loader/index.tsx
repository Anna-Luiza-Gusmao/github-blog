import { LoaderContainer, DotSpinner, DotSpinnerDot } from "./styles";

export function Loader() {
    return (
        <LoaderContainer>
            <DotSpinner>
                <DotSpinnerDot></DotSpinnerDot>
                <DotSpinnerDot></DotSpinnerDot>
                <DotSpinnerDot></DotSpinnerDot>
                <DotSpinnerDot></DotSpinnerDot>
                <DotSpinnerDot></DotSpinnerDot>
                <DotSpinnerDot></DotSpinnerDot>
                <DotSpinnerDot></DotSpinnerDot>
                <DotSpinnerDot></DotSpinnerDot>
            </DotSpinner>
        </LoaderContainer>
    )
}