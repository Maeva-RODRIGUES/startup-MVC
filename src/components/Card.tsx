// Card.tsx

interface Props {
  children: React.ReactNode;
  className?: string; // pour accepter des classes personnalisées
}

export default function Card({ children, className }: Props) {
  return (
    <div className={`bg-white p-5 border border-gray-200 rounded-lg shadow ${className}`}>
      {children}
    </div>
  );
}
