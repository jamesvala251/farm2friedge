import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import cn from 'classnames';

const sort = [
  { id: 1, name: 'Most Popular' },
  { id: 2, name: 'Price: Low to High' },
  { id: 3, name: 'Price: High to Low' },
  { id: 4, name: 'Newest First' },
  { id: 5, name: 'Oldest First' },
];

export default function Sorting() {
  const router = useRouter();
  const [selected, setSelected] = useState(sort[0]);

  const handleSort = (sortItem: any) => {
    setSelected(sortItem);
    router.push({
      pathname: router.pathname,
      query: { ...router.query, sort: sortItem.name },
    });
  };

  return (
    <Listbox value={selected} onChange={handleSort}>
      <div className="relative">
        <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <span className="block truncate">{selected.name}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {sort.map((person) => (
              <Listbox.Option
                key={person.id}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                  }`
                }
                value={person}
              >
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {person.name}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
