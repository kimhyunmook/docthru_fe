import Link from "next/link";
import Image from "next/image";

export default function LinkImg({
  href = "#",
  src = "",
  alt = "",
  width = 0,
  height = 0,
  className = "",
  onClick,
  ...props
}) {
  return (
    <Link
      href={href}
      className={`${className} flexCenter`}
      onClick={onClick}
      {...props}
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </Link>
  );
}
