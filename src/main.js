import './style.css';
import { Client, Databases, ID, Permission, Role } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('67afd29f00050a757f09');

const databases = new Databases(client);

const form = document.querySelector('form');
form.addEventListener('submit', addJob);

function addJob(e) {
  e.preventDefault();

  const promise = databases.createDocument(
    '67afd3100028054f9ba7',
    '67afd316002511720abd',
    ID.unique(),
    {
      'company-name': e.target.companyName.value,
      'date-added': e.target.dateAdded.value,
      'job-title': e.target.jobTitle.value,
      'position-type': e.target.positionType.value,
      pay: e.target.pay.value,
      source: e.target.source.value,
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
  form.reset();
}

function addJobsToDOM() {}
