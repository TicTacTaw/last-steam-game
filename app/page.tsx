import { fetchGameDetails, fetchLastPlayedGame } from '@/api/steam.api'

export default async function Home() {
  const { appid }: any = await fetchLastPlayedGame()
  const { data }: any = await fetchGameDetails(appid)

  return (
    <main
      style={{ 'backgroundImage': `url(${data.screenshots[0].path_full})` }}
      className={`min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat`}
    >
      <div className='fixed top-0 left-0 w-full h-full bg-black opacity-80'></div>

      <div className='relative flex flex-col font-serif text-gray-50'>
        <img src={data.header_image} className='border border-8 border-black' alt={data.name} />
        <strong>{data.name}</strong>
        <span>{data.release_date.date}</span>
      </div>
    </main>
  )
}

