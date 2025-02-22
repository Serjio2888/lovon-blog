import { Highlight, Hits } from "react-instantsearch";
import Link from "next/link";

const Results = (props: any) => {
  const { setSearchModalOpen, filterValue } = props;
  console.log(props?.hit);

  return (
    <div className="w-full">
      <Hits
        className={"result-links w-full"}
        hitComponent={(props) => {
          return (
            <div
              key={props.hit.objectID}
              className="cursor-pointer px-4 py-3.5 duration-300 ease-in hover:bg-gray lg:px-7"
            >
              <Link
                onClick={() => setSearchModalOpen(false)}
                href={props?.hit?.objectID! || props?.hit?.url!}
              >
                <h6 className="mb-1.5 font-medium text-dark">
                  <Highlight attribute="title" hit={props?.hit} />
                </h6>
                <p className="text-custom-sm">
                  <Highlight
                    className="text-body-color mt-2 line-clamp-2 text-sm leading-normal"
                    attribute="content"
                    hit={props.hit}
                  />
                </p>
              </Link>
            </div>
          );
        }}
      />
    </div>
  );
};

export default Results;
