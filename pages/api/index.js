import nc  from 'next-connect';

// this code will never ship to the browser, this is only server-side, it's a completly different bundle
const handler = nc()
  .get((req, res) => {
    res.json({message: 'ok'})
  })
  .post((req, res)=> {
    res.json({message: 'posted my'})
  })

export default handler;

// export default (req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'application/json')
//   res.end(JSON.stringify({ message: 'hello' }))
// }