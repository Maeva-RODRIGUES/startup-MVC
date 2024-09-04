// CardBody.tsx

interface Props {
  children: React.ReactNode;
  className?: string; // Ajoutez cette ligne pour accepter des classes personnalisées
}

export default function CardBody({ children, className }: Props) {
  return <div className={`mt-5 ${className}`}>{children}</div>;
}