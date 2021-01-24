import Link from 'next/link'

export default function Home({ data }) {
    return (
        <>
            <h1>Pokedex</h1>
            <ul>
                {data.map(({ entry_number, pokemon_species}) => (
                    <li key={entry_number}>
                        <Link href={`/pokemon/${entry_number}`}>
                            <a>
                                {pokemon_species.name}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
    const { pokemon_entries: data } = await res.json()

    return {
      props: {
          data
      }, 
    }
  }