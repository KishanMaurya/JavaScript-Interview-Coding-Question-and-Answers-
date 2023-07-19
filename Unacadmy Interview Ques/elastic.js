const { Client } = require('@elastic/elasticsearch');
// Create a new Elasticsearch client
const client = new Client({ node: 'http://localhost:9200' });
// Check the connection
async function checkConnection() {
  try {
    const info = await client.info();
    console.log(`Connected to Elasticsearch cluster: ${info.body.cluster_name}`);
  } catch (error) {
    console.error('Error connecting to Elasticsearch:', error);
  }
}
// Invoke the connection check function
checkConnection();




// some query 

//1.Match Query: Search for documents that match a specific field value.

async function searchData() {
  try {
    const response = await client.search({
      index: 'your-index-name',
      body: {
        query: {
          match: {
            field: 'value'
          }
        }
      }
    });
    console.log(response.body.hits.hits);
  } catch (error) {
    console.error('Error searching data:', error);
  }
}

searchData();


//2. Term Query: Search for documents that have an exact field value.

const response1 = await client.search({
    index: 'your-index-name',
    body: {
      query: {
        term: {
          field: 'value'
        }
      }
    }
  });
  console.log(response1.body.hits.hits);

  //3. Range Query: Search for documents within a specified range of values.
  const response2 = await client.search({
    index: 'your-index-name',
    body: {
      query: {
        range: {
          field: {
            gte: 'start-value',
            lte: 'end-value'
          }
        }
      }
    }
  });
  console.log(response2.body.hits.hits);

//4.Match All Query: Retrieve all documents from the index.
const response3 = await client.search({
    index: 'your-index-name',
    body: {
      query: {
        match_all: {}
      }
    }
  });
console.log(response3.body.hits.hits);

//5.Bool Query: Combine multiple queries using boolean operators (AND, OR, NOT).
const response4 = await client.search({
    index: 'your-index-name',
    body: {
      query: {
        bool: {
          must: [
            { match: { field1: 'value1' } },
            { match: { field2: 'value2' } }
          ],
          must_not: { term: { field3: 'value3' } }
        }
      }
    }
});
console.log(response4.body.hits.hits);








