import cors from 'cors'
import { origin } from './config'

const options: cors.CorsOptions = {
    origin: origin
}

export default options