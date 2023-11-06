import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

function Chart() {
  return (
    <>
      <Navbar />
      <div className="superset mx-auto">
        <h1 className="text-xl font-semibold py-4">Superset Dashboard</h1>
        <iframe
          title="My Superset Chart"
          width="100%"
          height="1000"
          src="http://localhost:8088/superset/dashboard/p/Ql6wKRY5xBq/"
          allowtransparency="true"
        />
      </div>
      <style jsx>{`
        .superset {
          width: 80%;
          height: 100%;
        }
      `}</style>
      <Footer/>
    </>
  );
}

export default Chart;
