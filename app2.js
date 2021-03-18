const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body><style>table, th, td {border: 2px solid black;border-collapse: collapse;}</style>')
      res.write('Content \n')
      res.write('More content \n')
      res.write('Hello World')
      res.write('<table>')
      res.write('<tr>')
      res.write('<th>Places</th>')
      res.write('<th>Time to spend</th>')
      res.write('<th>Amount to spend</th>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>Rajasthan</td>')
      res.write('<td>3 days</td>')
      res.write('<td>$150</td>')
      res.write('</tr>')
      res.write('<tr><td>Maharastra</td><td>3 days</td><td>$200</td></tr><tr><td>Andhra Pradesh</td><td>4 days</td><td>$300</td></tr><tr><td>Telangana</td><td>2 days</td><td>$340</td></tr></table>')
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})