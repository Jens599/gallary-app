import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div className="flex w-48 flex-col" key={image.id + "-" + index}>
            <img src={image.url} />
            <div className="text-center">{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
