import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <div id={"layout"}>{children}</div>;
};

export default Layout;
