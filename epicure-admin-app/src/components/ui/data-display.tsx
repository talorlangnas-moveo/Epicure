interface DataDisplayProps {
  title: string;
  children: React.ReactNode;
}

export default function DataDisplay({ title, children }: DataDisplayProps) {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-10">
      <h1 className="text-center text-4xl font-bold mb-6">{title}</h1>
      {children}
    </div>
  );
}
