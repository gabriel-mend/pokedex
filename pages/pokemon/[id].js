export default function Pokemon({ data }) {
    return (
        <div>
            {data.name}
            <img
                src={data.sprites.front_default}
                alt={`Pokemon - ${data.name}`}
                width={'auto'}
                height={'auto'}
            />
        </div>
    );
}


export async function getStaticProps({ params }) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    
    const data = await res.json()

    return {
        props: {
            data
        }
    }
}

export async function getStaticPaths () {
    const res = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
    const { pokemon_entries } = await res.json()

    const paths = pokemon_entries.map(({ entry_number }) => ({
        params: { id: `${entry_number}`},
    }))

    return {
        paths,
        fallback: false
    }
}