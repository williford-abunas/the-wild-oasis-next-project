import Counter from "../components/Counter"
export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()
  console.log(data)
  return (
    <>
      <h1>Cabins</h1>
      <ul>
        {data.map((usr) => <li key={usr.id}>{usr.name}</li>)}
      </ul>
      <Counter users={data}/>
    </>
  )
}
