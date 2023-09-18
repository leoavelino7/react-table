import { ColHTMLAttributes } from "react";

export const Body = ({
  children,
  className = "",
  ...props
}: ColHTMLAttributes<never> & React.PropsWithChildren) => {
  return (
    <tbody {...props} className={`av-table-body ${className}`}>
      {children}
    </tbody>
  );
};
