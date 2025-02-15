import './style.css';
import { Client, Databases, ID } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('67afd29f00050a757f09');

const databases = new Databases(client);

const promise = databases.createDocument(
  '67afd3100028054f9ba7',
  '67afd316002511720abd',
  ID.unique(),
  {
    'company-name': '100devs',
    'date-added': new Date(),
    'job-title': 'software engineer',
    'position-type': 'remote',
    pay: '$100,000',
    source: 'https://www.100devs.org',
  }
);

promise.then(
  function (response) {
    console.log(response);
  },
  function (error) {
    console.log(error);
  }
);
