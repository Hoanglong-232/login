import './App.css';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div className="main">
            <h2 className="main-header color">Welcome in to the moon</h2>
            <table>
                <tr>
                    <th className="size">
                        <Link to="/create">Login</Link>
                    </th>

                    <th className="none">
                        <Link to="/read">Read</Link>
                    </th>

                    <th className="none">
                        <Link to="/update">Update</Link>
                    </th>
                    <th className="none">
                        <Link to="/test">Test</Link>
                    </th>
                </tr>
            </table>
        </div>
    );
}

export default App;
