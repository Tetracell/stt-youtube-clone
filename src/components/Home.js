import VideoList from "./VideoList";
import Video from "./Video";
import Search from "./Search";

const Home = () => {
    return (
        <div>
            <form>
                <label>What would you like to see today?
                <br/>
                <input type='text' placeholder='search here' id='search-bar' name='search' ></input>
                </label>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default Home;