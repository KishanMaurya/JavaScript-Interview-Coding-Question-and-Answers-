## What is sharding in MongoDB?

Sharding is a method for distributing data across multiple machines. MongoDB uses sharding to support deployments with very large data sets and high throughput operations. Database systems with large data sets or high throughput applications can challenge the capacity of a single server.

sharding is a technique used in MongoDB to horizontally partition data across multiple servers or "shards". This is done to scale MongoDB horizontally, by distributing the data across multiple machines


# Key Features of MongoDB
Some of the key features of MongoDB are as follows:

Schema-less database
Document Oriented
Indexing
Sharding


## How does MongoDB ensure high availability and data durability?
---


# Indexing
Indexing helps in improving the performance of search queries. When you continuously perform searches in MongoDB documents, you can index those files which match your search criteria. Therefore, in MongoDB documents, users can index any field with primary or secondary indices, making the query search faster.

# Sharding
Sharding in MongoDB is performed when you want to work with larger datasets. With sharding, you can distribute such large data to multiple MongoDB instances. The collections in MongoDB having larger sizes are distributed in multiple collections, called ‘shards.’ Shards are implemented through clusters.

# What is the role of indexes in MongoDB?

Indexes support the efficient execution of queries in MongoDB. Without indexes, MongoDB must perform a collection scan, i.e. scan every document in a collection, to select those documents that match the query statement.


# Stages of MongoDB Aggregation Pipeline
$project.
$match.
$group.
$sort.
$skip & $limit.
$first & $last.
$unwind.

# What is aggregation in MongoDB?
What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.


# How does MongoDB handle transactions?

MongoDB supports multi-document transactions for replica sets and sharded clusters in version 4.0 and later. Transactions allow for atomic, consistent, isolated, and durable (ACID) operations on multiple documents within a single transaction.

To use transactions in MongoDB, you need to follow these steps:

Start a transaction: You can start a transaction by calling the startSession() method to create a session, and then calling the startTransaction() method on the session object.

Perform transactional operations: Within a transaction, you can perform read and write operations on multiple documents and collections as if they were a single operation.

Commit or abort the transaction: If all operations in the transaction succeed, you can call the commitTransaction() method to commit the transaction. If any operation fails, you can call the abortTransaction() method to roll back the entire transaction.

MongoDB uses a two-phase commit protocol to ensure that transactions are atomic and durable. In the first phase, the transaction coordinator (which could be a mongos instance or a replica set primary) asks each shard to prepare for the commit by validating the transaction and making sure that all the necessary changes can be made. In the second phase, the coordinator instructs each shard to commit the transaction and persist the changes to disk.

It's important to note that transactions in MongoDB have some limitations and requirements. For example, all documents that are part of a transaction must belong to the same replica set or sharded cluster, and you cannot perform certain operations within a transaction, such as creating or dropping a collection or index.

Overall, MongoDB's support for transactions provides a powerful tool for ensuring data integrity and consistency in complex operations that span multiple documents and collections.


# Here are some best practices for MongoDB performance optimization:

Indexing: Create indexes on fields that are frequently queried and ensure that your queries are using the correct indexes. Use the explain() method to analyze the performance of your queries and identify slow queries that need optimization.

Schema design: Design your data schema to match the query patterns of your application. Denormalize data if necessary to reduce the number of joins required for your queries. Avoid using overly complex data structures, such as arrays with large numbers of elements.

Sharding: Use sharding to distribute your data across multiple nodes to achieve better scalability and performance. Choose an appropriate shard key that evenly distributes your data across the cluster and avoids hotspots.

Server configuration: Configure your MongoDB servers to use the appropriate hardware and operating system settings. Use SSDs for storage to improve read and write performance. Use the WiredTiger storage engine for improved performance and compression.

Monitoring: Monitor your MongoDB deployment to identify performance issues and potential bottlenecks. Use tools like MongoDB Compass, the mongostat and mongotop command-line utilities, and third-party monitoring tools to track performance metrics like CPU usage, memory usage, and disk I/O.

Compression: Use compression to reduce the size of your data and improve read and write performance. MongoDB supports both document-level compression and storage engine-level compression.

Query optimization: Optimize your queries by reducing the amount of data returned, using projection to select only the fields you need, and limiting the number of results returned with pagination or aggregation.

Caching: Use caching to reduce the number of queries to the database. Use caching solutions like Redis or Memcached to store frequently accessed data in memory.

By following these best practices, you can optimize the performance of your MongoDB deployment and achieve better scalability, faster query performance, and improved data management.

# MongoDB supports several data models, including:

Document model
Key-value model
Graph model
Tabular model: MongoDB supports a tabular data model through the use of the MongoDB Connector for BI


# What is the role of a replica set in MongoDB?

A replica set in MongoDB is a group of mongod processes that maintain the same data set. Replica sets provide redundancy and high availability, and are the basis for all production deployments

