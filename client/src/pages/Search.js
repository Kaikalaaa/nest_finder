import SearchForm from "../components/forms/SearchForm";
import { useSearch } from "../context/search";
import AdCard from "../components//cards/AdCard";

export default function Search() {
  const [search, setSearch] = useSearch();

  return (
    <div>
      <h1 className="display-4" style={{ backgroundColor: "#66fcf1", color: "#0b0c10", padding: "5rem", fontFamily: "Roboto", fontWeight: "bold" }}>Search</h1>
      <SearchForm />

      <div className="container">
        <div className="row">
          {search.results?.length > 0 ? (
            <div className="col-md-12 text-center p-5">
              Found {search.results?.length} results
            </div>
          ) : (
            <div className="col-md-12 text-center p-5">No properties found</div>
          )}
        </div>

        <div className="row">
          {search.results?.map((item) => (
            <AdCard ad={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
