import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { ReactNode } from "react";
import { CardItem } from "@/types/interfaces/cardItem";

interface FeaturesProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  cards?: CardItem[];
}

export default function Features({
  title,
  description,
  children,
  cards,
}: FeaturesProps) {
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          {title && (
            <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
              {title}
            </h2>
          )}
          {description && <p className="mt-4">{description}</p>}
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
          {cards &&
            cards.map(({ title, content, icon: Icon, href, count }) => (
              <Link href={href} key={title}>
                <Card key={title} className="group shadow-zinc-950/5">
                  <CardHeader className="pb-3">
                    <CardDecorator>
                      <Icon className="size-6" aria-hidden />
                    </CardDecorator>
                    <h3 className="mt-6 font-medium text-2xl">{title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{content}</p>
                  </CardContent>
                 {count && (<div className="space-y-4">
                    <div className="text-5xl font-bold">{count}</div>
                    <p>Total {title}</p>
                  </div>)}
                </Card>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden
      className="bg-radial to-background absolute inset-0 from-transparent to-75%"
    />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
