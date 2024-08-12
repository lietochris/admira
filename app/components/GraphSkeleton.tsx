import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  comprobation: boolean;
}

export default function GraphSkeleton(props: Props) {
  if (!props.comprobation) {
    return <div className="text-slate-400 text-center">No hay datos para mostrar</div>;
  }

  return props.children;
}
