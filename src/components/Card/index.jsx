import React from 'react';

import Image from 'next/image';

import CardSkeleton from '@/components/SkeletonLoader/CardSkeleton';
import formatPhoneNumber from '@/helpers/formatter/formatPhoneNumber';
import useCard from '@/hooks/components/useCard';

const Card = ({ data }) => {
  const { showText, showPhoneNumber, toggleRevealPhoneNumber, revealText } = useCard();
  return (
    <div className="flex flex-col w-[544px] bg-main-grey rounded-md shadow-md">
      {/* img section */}
      <div className="inline-flex relative">
        <div className="overflow-hidden rounded-t-md">
          <Image
            alt="building-img"
            src={data?.img_url || ''}
            width={544}
            height={272}
            layout="fixed"
            objectFit="fill"
            priority
          />
        </div>
        <div className="absolute top-1 left-[-4px]">
          <Image alt="banner" src="/assets/images/launching-flag.svg" width={130} height={25} layout="fixed" />
        </div>
        {/* arrow icons */}
        <div className="absolute top-1/2 right-2 z-20 opacity-0 hover:opacity-100 cursor-pointer">
          <Image alt="chevron-right" src="/assets/icons/chevron-right.svg" width={17} height={32} layout="fixed" />
        </div>
        <div className="absolute top-1/2 left-2 z-20 opacity-0 hover:opacity-100 cursor-pointer">
          <Image alt="chevron-left" src="/assets/icons/chevron-left.svg" width={17} height={32} layout="fixed" />
        </div>
      </div>

      {/* detail section */}
      <div className="flex flex-col gap-y-4 p-6">
        {showText ? (
          <>
            <div className="flex flex-row justify-between">
              {/* property name */}
              <div className="flex flex-row gap-x-4 items-center">
                <div className="relative w-10 h-10">
                  <Image alt="building-icon" src="/assets/icons/building-icon.png" layout="fill" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-semibold">{data?.title}</span>

                  <span className="text-sm text-dark-3">{data?.address}</span>
                </div>
              </div>
              {/* property price */}
              <div className="flex flex-col">
                <span className="font-semibold">
                  {`$${[data?.psf_min]} psf`} - {`$${[data?.psf_max]} psf`}
                </span>
                <span className="text-dark-3">{data?.subprice_label}</span>
              </div>
            </div>

            {/* property room detail */}
            <div className="flex flex-col">
              <span>
                {data?.project_type} · {data?.year} · {data?.ownership_type}
              </span>
              <span>{data?.availabilities_label}</span>
            </div>
            <div className="flex flex-col gap-y-2">
              <span>{data?.description}</span>
              <span>
                Please call the owner{' '}
                <span className="cursor-pointer" onClick={toggleRevealPhoneNumber}>
                  ({showPhoneNumber ? data?.phone_number : formatPhoneNumber(data?.phone_number)})
                </span>{' '}
                to arrange for a viewing.
              </span>
            </div>
          </>
        ) : (
          <CardSkeleton />
        )}

        {/* btn section */}
        <div className="flex justify-end">
          <button className="font-semibold text-main-darker hover:text-main-blue outline-none" onClick={revealText}>
            See description
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
