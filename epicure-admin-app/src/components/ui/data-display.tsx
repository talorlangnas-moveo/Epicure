interface DataDisplayProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export default function DataDisplay({
  title,
  description,
  children,
}: DataDisplayProps) {
  return (
    <div className="flex flex-col px-6 py-10">
      <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center pb-10">
        {title && <h2 className="text-4xl font-medium lg:text-5xl">{title}</h2>}
        {description && <p>{description}</p>}
      </div>
      {children}
    </div>
  );
}
