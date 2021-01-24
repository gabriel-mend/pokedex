import Link from 'next/link'

export default function Home({ data }) {
    return (
        <>
            <h1>Pokedex</h1>
            <ul>
                {data.map(({ entry_number, pokemon_species}) => (
                    <li key={entry_number}>
                        <Link href={'/'}>
                            {pokemon_species.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export async function getStaticProps() {
    const data = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
                .then(responseOnServer => responseOnServer.json())
                .then(responseOnObject => responseOnObject.pokemon_entries)

    return {
      props: {
          data
      }, 
    }
  }