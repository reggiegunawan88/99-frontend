import 'keen-slider/keen-slider.min.css';

import Card from '@/components/Card';
import useHome from '@/hooks/pages/useHome';
import HomeLayout from '@/layouts/HomeLayout';

const Home = () => {
  const { data } = useHome();

  return (
    <div className="flex flex-col gap-y-6 justify-center p-4">
      <div className="flex flex-col font-bold text-center text-main-blue">
        <span className="text-2xl">99 Group Front End Test</span>
        <span className="text-xl">by Reggie Gunawan</span>
      </div>
      <section className="flex relative flex-row justify-center w-full h-fit">
        {data ? (
          data?.slice(0, 1).map(item => (
            <div key={item?.id}>
              <Card data={item} />
            </div>
          ))
        ) : (
          <span>Loading...</span>
        )}
      </section>
    </div>
  );
};

Home.getLayout = page => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default Home;
