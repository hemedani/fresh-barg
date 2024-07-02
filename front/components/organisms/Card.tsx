import { ComponentChildren, FunctionComponent } from "preact";

interface CardProps {
  children: ComponentChildren;
  cardTitle: string;
  cardIcon: any;
}

export const Card: FunctionComponent<CardProps> = (
  { children, cardIcon, cardTitle },
) => {
  return (
    <div className="card">
      <div className="card-icon">
        {cardIcon}
      </div>
      <h2>{cardTitle}</h2>

      {children}
    </div>
  );
};
