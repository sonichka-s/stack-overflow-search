import { FC, PropsWithChildren, ReactNode } from "react";

const Layout: FC<PropsWithChildren<unknown>> = ({
  children,
}: {
  children?: ReactNode;
}) => {
  return <div id={"layout"}>{children}</div>;
};

export default Layout;
