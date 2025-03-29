import { Client, Databases, ID, Permission, Role } from 'node-appwrite';

export default async ({ req, res, log, error }) => {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
    .setKey(req.headers['x-appwrite-key'] ?? '');
  const database = new Databases(client);

  const databaseId = req.bodyJson.$databaseId
  const collectionId = req.bodyJson.$collectionId
  const documentId = req.bodyJson.$id
  log(req)
  log(`< [Database ID: ${databaseId}] >-----< [Collection ID: ${collectionId}] >-----< [document ID: ${documentId}] >`);

  try {

    return res.json({
      status: 'success',
    });
  } catch (err) {
    error('Failed: ' + err.message);
    return res.json({
      status: 'failed',
      error: err.message,
    });
  }
};
