import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/d8cc2e7f-e9d5-44c7-9460-b264689a16d2-5eu1h0.png",
  "https://utfs.io/f/ee56ba72-8013-4ba3-a2cb-8a8221907f4e-ya24fk.jpg",
  "https://utfs.io/f/cd43a5d6-8db4-48c6-aa28-b3cc240ec815-5eu1gz.png",
  "https://utfs.io/f/f90cbda2-d4bc-462b-ac46-8272eeab2352-rcm8nx.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div className="w-48" key={post.id}>
            {post.name}
          </div>
        ))}

        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div className="w-48" key={image.id + "-" + index}>
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
