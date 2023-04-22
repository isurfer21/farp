const fs = require('fs');
const pattern = process.argv[2];
const substitute = process.argv[3];
const filename = process.argv[4];

if (!!pattern && !!substitute && !!filename) {
    // console.log(`To replace ${pattern} with ${substitute}, in ${filename}!`);
    let content = fs.readFileSync(filename, 'utf8');
    const filter = (substitute.indexOf('--filter=') == 0) ? JSON.parse(substitute.replace('--filter=', '')) : null;
    const percolate = specimen => {
        for (let criteria in filter) {
            specimen = specimen.replace(criteria, filter[criteria])
        }
        return specimen
    }
    let chunks = content.match(new RegExp(pattern, 'g'));
    if (!!chunks && chunks.length > 0) {
        for (let i = 0; i < chunks.length; i++) {
            if (filter != null) { 
                let supplant = percolate(chunks[i]);
                content = content.replace(chunks[i], supplant);
            } else {
                content = content.replace(chunks[i], substitute);
            }
        }
        fs.writeFileSync(filename, content);
        console.log('Replaced matches!');
    } else {
        console.log('No match found!');    
    }
} else {
    console.log(`
Farp (v1.1.0)

A tool to find and replace given pattern with substitute inside file.

Syntax:
  farp <pattern> <substitute> <file>
  farp <pattern> --filter=<criteria> <file>

Options:
  --filter    Criteria to modify the matched chunk 

Usages:
  farp 'foo' 'bar' file.txt
  farp '\\/\\{[a-zA-Z0-9_-]+\\}' '--filter={"{":"&#123;","}":"&#125;"}' file.txt
    `);
}