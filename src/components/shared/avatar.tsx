import {
  AvatarFallback,
  AvatarImage,
  Avatar as ShadcnAvatar,
} from "../ui/avatar";

type AvatarProps = {
  src?: string;
  alt?: string;
  fallback?: string;
  className?: string;
};

export function Avatar({ src, alt, fallback = "?", className }: AvatarProps) {
  return (
    <ShadcnAvatar className={className}>
      {src && <AvatarImage src={src} alt={alt} />}
      <AvatarFallback>{fallback}</AvatarFallback>
    </ShadcnAvatar>
  );
}
