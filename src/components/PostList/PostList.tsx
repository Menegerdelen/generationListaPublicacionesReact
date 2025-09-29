

import axios from "axios"
import { useEffect, useState } from "react"


interface Post {
    id: number,
    title: string,
    body: string
}

export const PostList = () => {

    const [posts, setPosts] = useState<Post[]>([])

    const [loading, setLoading] = useState( true )

    const [error, setError] = useState<string | null>(null)

    const url = 'https://jsonplaceholder.typicode.com/posts';

    useEffect(() => {
        const fetchPosts = async() => {
            try {
                const res = await axios.get( url );
                setPosts( res.data );
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
                setError(errorMessage);
            } finally {
                setLoading( false );
            }
        }
        fetchPosts();
    }, [])
    
    if( error ) return <p>Error: { error }</p>
    if( loading ) return <p>Cargando listado de posts...</p>

    return (
        <div>
            <div className="text-center">
                <h1 className="fw-bold">Listado de publicaciones</h1>
            </div>
            <div className="row justify-content-center my-5">
                {/* Quitar el ".splice(1,10)" para mostrar todos los posts sin limite */}
                { posts.splice(1, 10).map(( post ) => (
                    <div className="col-8 col-md-8 col-lg-8 col-xl-3 m-3" key={ post.id }>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{ post.title }</h5>
                                <p className="card-text">{ post.body }</p>
                            </div>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    )
}
