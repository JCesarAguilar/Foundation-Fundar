import Image from "next/image";
import { P3, TitleBanner } from "../common/Typography";

export default function StatsSection() {
  return (
    <section className="relative bg-black text-white py-15 lg:py-25">
      <div className="absolute inset-0">
        <Image
          src="https://media.istockphoto.com/id/1199706305/photo/friends-linking-arms-in-unity.jpg?s=612x612&w=0&k=20&c=sOHOOdPG5hcNdD9BWC5vzRvRE_wS43usvWGaJLCUhu8="
          alt="Background StatsSection"
          fill
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/10 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-bluesky-strong text-sm font-semibold uppercase mb-2">
          Our impact
        </p>
        <TitleBanner>
          Committed to{" "}
          <span className="text-yellow-strong"> improving lives</span> across
          Latin America
        </TitleBanner>
        <P3 className=" max-w-4xl mx-auto mb-12">
          At Fundar, we work hand-in-hand with vulnerable communities to promote
          access to education, healthcare, dignified housing, and sustainable
          development. Every action matters — and each project helps build a
          more just and inclusive future.
        </P3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="text-3xl font-bold">12,000+</p>
            <P3 className=" mt-1">Lives impacted</P3>
          </div>
          <div>
            <p className="text-3xl font-bold">8 countries</p>
            <P3 className="mt-1">With active programs</P3>
          </div>
          <div>
            <p className="text-3xl font-bold">250+</p>
            <P3 className="mt-1">Social projects delivered</P3>
          </div>
          <div>
            <p className="text-3xl font-bold">30,000+</p>
            <P3 className="mt-1">Members</P3>
          </div>
        </div>
      </div>
    </section>
  );
}
