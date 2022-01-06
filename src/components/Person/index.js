import dayjs from "dayjs"
import SingleShow from "../SingleShow"

const Person = ({ person }) => {
    const shows = []
    if (person._embedded && person._embedded.castcredits.length != 0) {
        person._embedded.castcredits.map((itm) => {
            const newId = itm._links.show.href.replace("https://api.tvmaze.com/shows/", "")
            // character https://api.tvmaze.com/characters/16795
            if (newId !== "") {
                shows.push(newId)
            }
        })
    }
    let birthday = dayjs(person.birthday).format("DD MMMM YYYY")

    let deathday = ""
    if (person.deathday !== null) {
        deathday = dayjs(person.deathday).format("DD MMMM YYYY")
    }
    return (
        <>
            <div>
                <div className="image">
                    {person.image !== null && (
                        <img src={person.image.medium} alt={`${person.name}`} className="img-50" />
                    )}
                </div>
                <div className="row2 table-frame">
                    <span className="left bordered">Name:</span>
                    <span className="bordered">
                        <a href={`/person/${person.id}`}>{person.name}</a>
                    </span>
                    <span className="left bordered">Gender:</span>
                    <span className="bordered">{person.gender}</span>
                    <span className="left bordered">Birthday:</span>
                    <span className="bordered">{birthday}</span>
                    {deathday !== "" && <span className="left bordered">Died:</span>}
                    {deathday !== "" && <span className="bordered">{deathday}</span>}

                    <span className="left bordered">Country:</span>
                    <span className="bordered">{person.country !== null && person.country.name}</span>
                </div>
            </div>
            {shows !== [] && shows.map((itm) => <SingleShow id={itm} key={itm} />)}
        </>
    )
}

export default Person
