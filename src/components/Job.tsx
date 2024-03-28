import { Link } from 'react-router-dom';

type JobProps = {
    title: string;
    company: string;
    source: string;
    link: string;
}
const Job = ({job}: {job: JobProps}) => {
    const {title, company, source, link}= job;
  return (
    <div className='bg-white rounded-xl shadow-md relative'>
    <div className='p-4'>
      <div className='mb-6'>
        <div className='text-gray-600 my-2'>{source}</div>
        <h3 className='text-xl font-bold'>{title}</h3>
      </div>

      <div className='mb-5'>{company}</div>



      <h3 className='text-indigo-500 mb-2'>{company} / Year</h3>

      <div className='border border-gray-100 mb-5'></div>

      <div className='flex flex-col lg:flex-row justify-between mb-4'>

        <Link
          to={link}
          className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
          target='_blank'
          rel='noreferrer'
        >
          Read More
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Job