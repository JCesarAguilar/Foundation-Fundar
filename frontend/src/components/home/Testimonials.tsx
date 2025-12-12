import Image from "next/image";
import { testimonials } from "@/helpers/testimonials";
import { P2, TitleBanner } from "../common/Typography";

export default function TestimonialsSection() {
  return (
    <section className="bg-white-smoke text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <TitleBanner className="text-black-soft mb-4">
          What people say
        </TitleBanner>
        <P2 className="text-gray-strong max-w-xl mx-auto mb-12">
          Discover how Fundar is impacting lives through real stories from the
          people and communities we work with.
        </P2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-soft backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-xl hover:shadow-lg transition"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-35 h-35 rounded-full overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={130}
                    height={130}
                    className="w-full h-full mb-4 object-cover"
                  />
                </div>
                <div className="text-white">
                  <h3 className="text-gray-strong text-lg font-semibold">
                    {item.name}
                  </h3>
                  <p className="text-sm text-bluesky-strong">{item.role}</p>
                  <P2 className="text-gray-medium mt-4 text-sm">{item.text}</P2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
