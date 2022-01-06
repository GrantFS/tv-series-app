import { useEffect, useState } from "react"

const SingleShow = ({ id }) => {
    const [show, setShow] = useState({})
    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then((response) => response.json())
            .then((data) => setShow(data))
    }, [id])
    if (show.id) {
        return (
            <div className="single-show-container">
                <h1>{show.name}</h1>
                <div>
                    {show.image && show.image.original !== null && (
                        <img src={show.image.original} alt={show.name} className="img-50" />
                    )}
                </div>
            </div>
        )
    }

    return <div>Loading...</div>
}

export default SingleShow
