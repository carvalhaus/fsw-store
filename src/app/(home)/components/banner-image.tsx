import Image, { ImageProps } from "next/image";

const Banner = ({ src, alt }: ImageProps) => {
  return (
    <Image
      src={src}
      height={0}
      width={0}
      className="h-auto w-full"
      sizes="100vw"
      alt={alt}
    />
  );
};

export default Banner;
