const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'rita1',
  password: 'rita',
  port: 5432,
})

const getReact = (request, response) => {
  pool.query('SELECT * FROM react ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getReactById = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query('SELECT * FROM react WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows);
  })
}

const createSelect = (request, response) => {
  const { id, name } = request.body
  pool.query('INSERT INTO react (name) VALUES ($1)',
    [name], (error, results) => {
      if (error) {
        console.log('error--', error)
        throw error
      }
      response.status(201).send(results) 
    })
}

const upSelect = (request, response) => {
  const id = parseInt(request.params.id)
  const { name } = request.body
  pool.query(
    'UPDATE react SET name = $1 WHERE id = $2',
    [name, id],
    (error, results) => {
      if (error) { throw error }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  )
}

const deleteSelect= (request, response) => {
  const id = parseInt(request.params.id)
 pool.query('DELETE FROM react WHERE id = $1', [id], (error, results) => {
    if (error) { throw error }
    response.status(201).send(results)
     })
}

module.exports = {
 getReact,
 getReactById,
 createSelect,
 upSelect,
 deleteSelect
 
}

