import Link from "next/link"

export const metadata = {
  title: '???',
  description: 'anthonyworld'
}

export default function Page() {
  return(
    <main className="p-8">
      <h1 className="2-xl font-semibold text-purple-300">About Anthony</h1>
      <p className="mt-4 text-zinc-100">It's my birthday, yo!</p>
      <p>07/12/23</p>
      <br/>
      <Link href='/' className="bg-violet-400 hover:bg-violet-600 text-white py-2 px-4 rounded">Go back</Link>
    </main>
  )
}
