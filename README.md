A claims anonymizer that performs the following tasks:

- Reads in the provided smithrx-claims-input.json file as input
- Writes out an anonymized version of that file called anonymized-claims-output.json
- The following columns should be treated as PII and PHI, and need to be replaced with fake values in the output: member_id, person_code, first_name, last_name, date_of_birth, gender, ssn, address_1, address_2, city, state, zip, primary_first_name, primary_last_name, prescription_number

To start, run the following: 

- npm install
- npm start