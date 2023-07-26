function getCurrentYear() {
  const currentYear = new Date().getFullYear();
  return(
    currentYear
  )
}

export default function Footer() {
  return (
<footer className="footer footer-center p-10 bg-zinc-80 text-primary-content">
  <div>
    <img width="50" src="footer-logo.svg" className="inline-block fill-current w-40"/>
    <p className="font-semibold">
      Providing reliable film information since 2004
    </p> 
  </div>
  {/* <div>
    <div className="grid grid-flow-col gap-4">
    </div>
  </div> */}
</footer>
  );
}
