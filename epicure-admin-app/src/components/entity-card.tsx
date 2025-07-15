import { API_BASE_URL } from "@/utils/constants";

interface EntityCardProps {
    title: string;
    _id: string;
    name: string;
    role: string;
    imgUrl: string;
}

export default function EntityCard({ title, _id, name, role, imgUrl }: EntityCardProps) {
  return (
    <section className="flex justify-center items-center">
      <div className="mx-auto max-w-3xl px-8 lg:px-0">
        <div>
          <h3 className="text-lg font-bold text-center">{title}</h3>
          <div className="py-2 flex justify-center">
            <div className="flex flex-col items-center">
              <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                <img
                  className="aspect-square rounded-full object-cover"
                  src={`${API_BASE_URL}/${imgUrl}`}
                  alt={name}
                  height="460"
                  width="460"
                  loading="lazy"
                />
              </div>
              <span className="mt-2 block text-sm font-medium">{name}</span>
              <span className="text-muted-foreground block text-xs">{role}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
  