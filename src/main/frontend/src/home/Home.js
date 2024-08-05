import axios from 'axios';
import {useEffect} from 'react';

function Home() {
    const [hello, setHello] = useState('');

    useEffect(() => {
        axios.get('/home/index')
            .then(response => setHello(response.data))
            .catch(error => console.error(error))
    }, []);

    return (
        <div>
            테스트 : {hello}
        </div>
    );
}

export default Home;