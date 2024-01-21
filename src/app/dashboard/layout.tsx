const DashboardLayout = ({
  children,
  sectiona,
  sectionb,
  sectionc,
  sectiond,
}: {
  children: React.ReactNode;
  sectiona: React.ReactNode;
  sectionb: React.ReactNode;
  sectionc: React.ReactNode;
  sectiond: React.ReactNode;
}) => (
  <>
    <div className="py-5 font-bold text-xl text-teal-700 text-left">
      DASHBOARD TITLE: this is Dashboard Layout Data
    </div>
    <div>{children}</div>
    <div className="grid grid-cols-2 border border-red-200 gap-5 p-5">
      <div className="grid flex-1">{sectiona}</div>
      <div className="grid gap-5">
        {sectionb}
        {sectionc}
        {sectiond}
      </div>
    </div>
  </>
);

export default DashboardLayout;
