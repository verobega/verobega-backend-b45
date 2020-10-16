import './src/utils/dotenv.js'
import mongoClient from './src/utils/mongoClient.js'
import { app, PORT } from './src/api/index.js'
import router  from './src/routers/products.js'

mongoClient()


app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}/`))
app.use('/', router)