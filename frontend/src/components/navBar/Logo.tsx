import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image
        src="/images/shared/logo-fundar-mobile.webp"
        alt="Imagen de logo"
        width={55}
        height={55}
      />
    </div>
  );
}
