/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-content-center flex-wrap px-3 md:px-8">
      <div className="w-3 mx-3">
        <h2 className="font-bold text-2xl">Flor y Jose</h2>
        <div className={"galleryItem"}>
          <Link href="/flor-y-jose">
            <img src={"/1.jpg"} alt={"image"} className={"galleryImage"} />
          </Link>
        </div>
      </div>
      <div className="w-3 mx-3">
        <h2 className="font-bold text-2xl">Flor</h2>
        <div className={"galleryItem"}>
          <Link href="/flor">
            <img src={"/7.jpg"} alt={"image"} className={"galleryImage"} />
          </Link>
        </div>
      </div>
      <div className="w-3 mx-3">
        <h2 className="font-bold text-2xl">Manu</h2>
        <div className={"galleryItem"}>
          <Link href="/manu">
            <img src={"/6.jpg"} alt={"image"} className={"galleryImage"} />
          </Link>
        </div>
      </div>
    </main>
  );
}
