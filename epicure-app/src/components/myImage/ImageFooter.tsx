

interface ImageFooterProps {
    content: string;
    className?: string;
}

export default function ImageFooter({content}: ImageFooterProps) {
    return (
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
            {content}
        </div>
    );

}