import Button from "../Button"
import dayjs from "dayjs"
import "./index.css"

const GenreListItem = ({ genre }) => {
    return <li>{genre}</li>
}

const Show = ({ show }) => {
    console.log(show)
    let premiered = ""
    if (show.premiered) {
        premiered = dayjs(show.premiered).format("DD MMMM YYYY")
    }
    return (
        <div>
            <header className="App-header">
                <h1>{show.name}</h1>
            </header>
            <div className="show-container">
                <div className="row2 md">
                    <div>
                        <img src={show.image.original} alt={show.name} className="img-50" />
                    </div>
                    <div className="status-row">
                        <div className="row2 table-frame">
                            <span className="left bordered">Current Status</span>
                            <span className="bordered">
                                {show.status === "Ended" && <span className="text-danger">{show.status}</span>}
                                {show.status === "Running" && <span className="text-success">{show.status}</span>}
                                {show.status !== "Ended" && show.status !== "Running" && <span>{show.status}</span>}
                            </span>
                            <span className="bordered left">Premiered</span>
                            <span className="bordered">{premiered}</span>
                            <span className="left bordered">Rating</span>
                            <span className="bordered">{show.rating.average}</span>
                            <span className="left bordered">Total Number of Episodes</span>
                            <span className="bordered">{show._embedded.episodes.length}</span>
                            <span className="left bordered">Language</span>
                            <span className="bordered">{show.language}</span>
                            <span className="left bordered">Genre(s)</span>
                            <span className="bordered">
                                <ul>
                                    {show.genres.map((genre) => (
                                        <GenreListItem genre={genre} key={genre} />
                                    ))}
                                </ul>
                            </span>
                        </div>
                        <div className="row3">
                            <Button type="primary btn-block" href={`/season/${show.id}`} name="Seasons" />
                            <Button type="primary btn-block" href={`/showings/${show.id}`} name="UK TV Showings" />
                            <Button type="primary btn-block" href={`/cast/${show.id}`} name="Cast" />
                            <Button type="primary btn-block" href={`/images/${show.id}`} name="Images" />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div dangerouslySetInnerHTML={{ __html: show.summary }} />
                </div>
            </div>
        </div>
    )
}

export default Show
