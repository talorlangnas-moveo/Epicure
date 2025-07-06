import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";

export default async function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Breadcrumbs />
      {children}
    </div>
  );
}
