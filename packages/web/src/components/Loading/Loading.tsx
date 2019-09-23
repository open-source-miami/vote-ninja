import * as React from "react"
import { LoadingContainer } from "./Loading.styles"

interface IProps {
    isLoading: boolean
}

const Loading: React.FC<IProps> = ({ isLoading }: IProps) => {
    const loader = React.useRef<HTMLSpanElement>(null);
    
    if (loader.current && loader.current.textContent) {

        loader.current.innerHTML = loader.current.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        const letters = loader.current.textContent.length;

        for (let i = 0; i < letters; i++) {
            let ltr = (loader.current.children as HTMLCollectionOf<HTMLSpanElement>)[i]
            ltr.style.animationDelay = `${500 + (50 * i)}ms`;
        }
    }
    return (
        <LoadingContainer isLoading={isLoading}>
            <div>Lets create a poll!</div>
            <span className="letters" ref={loader}>
                Loading...
            </span>
        </LoadingContainer>
    )
}

export default Loading;