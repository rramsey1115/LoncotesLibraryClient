import { useEffect, useState } from "react";
import { Input } from "reactstrap";
import { getGenres } from "../../data/genresData";

export const GenreFilter = ({setGenreFilterId}) => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        getAndSetGenres()
    }, []);

    const getAndSetGenres = () => {getGenres().then(setGenres)};

    const handleChange = (id) => {
        setGenreFilterId(id);
    };

    return ( <Input
            name="genre"
            type="select"
            onChange={(e) => {
            handleChange(e.target.value * 1);
            }}
        >
        <option value="0">Filter by Genre</option>
        {genres.map((g) => (
          <option key={g.id} value={g.id}>{g.name}</option>
        ))}
    </Input>);
};