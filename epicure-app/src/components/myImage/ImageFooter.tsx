import { FooterInfo } from "@/types/interfaces/FooterInfo";

interface ImageFooterProps {
    props: FooterInfo;
}

export default function ImageFooter({props}: ImageFooterProps) {
    return (
        <div className={props.className}>
           <h3>{props.content}</h3> 
        </div>
    );

}