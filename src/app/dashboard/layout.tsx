const DashboardLayout = ({
  children,
  sectiona,
  sectionb,
  sectionc,
}: {
  children: React.ReactNode;
  sectiona: React.ReactNode;
  sectionb: React.ReactNode;
  sectionc: React.ReactNode;
}) => (
  <>
    <div className="p-5">--: this is Dashboard Layout Data</div>
    {children}
    {sectiona}
    {sectionb}
    {sectionc}
  </>
);

export default DashboardLayout;
