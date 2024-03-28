import { useAppSelector } from "../store/hooks";
import Job from "./Job";
import Loader from "./Loader";
const JobListing = () => {
  const { loading, jobs } = useAppSelector((state) => state.job);
  return (
    
    <section className="bg-blue-50 px-4 py-6 h-screen">
               
      {loading ? (
        <Loader />
      ) : (
        jobs.map((job) => {
          return <Job job={job} />;
        })
      )}
    </section>
  );
};

export default JobListing;
