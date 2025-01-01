import { Table } from "./components";
import useFetchPosts from "./hooks/useFetchPosts";

function App() {
  const { data, isLoading, isError, isSuccess } = useFetchPosts();

  return (
    <>
      <section className="flex justify-center items-center py-10">
        {isLoading && (
          <h1 className="py-2 px-5 rounded-lg font-bold">wait a moment ...</h1>
        )}
        {isError && (
          <h1 className="py-2 px-5 rounded-lg text-red-400 font-bold">
            the request is failed
          </h1>
        )}
        {isSuccess && <Table dataPosts={data} />}
      </section>
    </>
  );
}

export default App;
