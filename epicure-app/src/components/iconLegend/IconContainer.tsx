import { IconContainerData } from "@/types/interfaces/IconContainerData"
// import styles from "./iconLegend.module.scss";


interface IconContainerProps {
  iconContainer: IconContainerData;
  className?: string;
}

export default function IconContainer({iconContainer, className}: IconContainerProps) {
  return (
    <div className={className}>
        <div>
            {iconContainer.icon}
        </div>
        <h4>
            {iconContainer.description}
        </h4>
    </div>
  );
}