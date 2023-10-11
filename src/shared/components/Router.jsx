import {Routes, Route} from 'react-router-dom';
import { Home } from '../Page/Home';
import { Copilot } from '../Page/Copilot';
import { ADA } from '../Page/ADA';
function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/copilot" element={<Copilot />} />
            <Route path="/ada" element={<ADA />} />
        </Routes>
    )
}

export {
    Router
}