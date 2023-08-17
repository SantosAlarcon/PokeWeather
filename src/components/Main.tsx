import { useGlobalStore } from '../store/useGlobalStore'
import Bienvenida from './Bienvenida';
import PokeCity from './PokeCity';

const Main = () => {
    const [ciudad] = useGlobalStore((state: unknown) => state.ciudad);

    return (
        <>
            {!ciudad ? (<Bienvenida />) : (<PokeCity />)}
        </>
    )
}

export default Main
