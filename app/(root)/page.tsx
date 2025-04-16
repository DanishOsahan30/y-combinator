
import StartUpCard from "@/components/StartUpCard";
import SearchForm from "../../components/SearchForm";



export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query
  const posts = [
    {
      _createdAt:new Date(),
      views: 55,
      author: { _id: 1 ,name:"Danish"},
      _id: 1,
      description: "This is a description",
      image: `https://picsum.photos/200/300`,
      category: "Technology",
      title: "This is a title",
    }
  ]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          grow your idea with us .
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions .
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts.length > 0 ? (posts.map((post) => (
            <StartUpCard post={post} key={post._id} />
          ))) :
            (<p className="no-results">No results found</p>)
          }
        </ul>
      </section>
    </>
  );
}
