type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="main-layout">
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
