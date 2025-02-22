import algoliasearch from "algoliasearch";
import React, { useRef, useState, useEffect } from "react";
import { InstantSearch, SearchBox } from "react-instantsearch";
import Results from "./Results";
import { integrations, messages } from "../../../integrations.config";

const APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_PROJECT_ID as string;
const API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY as string;
const INDEX = process.env.NEXT_PUBLIC_ALGOLIA_INDEX as string;

const algoliaClient = algoliasearch(APP_ID, API_KEY);

type Props = {
  searchModalOpen: boolean;
  setSearchModalOpen: (value: boolean) => void;
};

const GlobalSearchModal = (props: Props) => {
  const { searchModalOpen, setSearchModalOpen } = props;
  const [filterValue, setFilterValue] = useState("all");

  // handle ClickOutside
  const ref = useRef(null);
  useEffect(() => {
    function handleClickOutside() {
      // @ts-ignore
      if (ref.current && !ref.current.contains(event.target)) {
        setSearchModalOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <>
      <div
        className={`fixed inset-0 z-9999 flex items-center justify-center px-4 py-5`}
      >
        <div
          className={`fixed inset-0 bg-[#000]/25 backdrop-blur-sm transition-opacity`}
        ></div>
        <div
          ref={ref}
          className="modal-content relative h-[90vh] w-full max-w-[700px] overflow-hidden overflow-y-scroll rounded-lg bg-white shadow-box-2 duration-200 ease-in "
        >
          <div className="">
            <InstantSearch
              insights={false}
              searchClient={algoliaClient}
              indexName={INDEX}
            >
              <SearchBox
                placeholder="Type anything to search..."
                classNames={{
                  root: "rounded-t-[15px] bg-white h-[56px]",
                  form: "sticky top-0 z-[999]",
                  input:
                    "flex h-[56px] w-full items-center rounded-lg pl-12 pr-6 outline-none duration-300",
                  submitIcon:
                    "absolute left-0 top-0 w-[56px] h-[56px] flex items-center justify-center p-5",
                  reset: "hidden",
                  resetIcon: "hidden",
                  loadingIndicator: "hidden",
                  loadingIcon: "hidden",
                }}
              />

              <div className="border-y border-gray-3 px-4 py-3 lg:px-7 lg:py-4.5">
                <h5 className="font-medium text-dark">Posts</h5>
              </div>

              <div className="py-3.5">
                {integrations?.isAlgoliaEnabled ? (
                  <Results
                    {...props}
                    filterValue={filterValue}
                    setFilterValue={setFilterValue}
                  />
                ) : (
                  <div className="text-center">{messages?.algolia}</div>
                )}
              </div>
            </InstantSearch>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalSearchModal;
