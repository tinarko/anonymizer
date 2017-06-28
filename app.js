var fs = require('fs');
var prompt = require ('readline-sync');

var type;

while (type !== 'default' && type !== 'random') {
  type = prompt.question('Would you like to have anonymized information that is:\
   \n 1) default or \n 2) random? \n Please type in either "default" or "random" \n' );
  type = type.toLowerCase();
}

var inputData = JSON.parse(fs.readFileSync('smithrx-claims-input.json').toString());
var outputData = JSON.parse(JSON.stringify(inputData));

var default_member_id = '9999999999';
var default_person_code = '99';
var default_first_name = 'XXXX';
var default_last_name = 'XXXX';
var default_date_of_birth = '2000-01-01';
var default_gender = 'x';
var default_ssn = '999999999';
var default_address_1 = '123 Lane Road';
var default_address_2 = 'Suite 123';
var default_city = 'San Francisco';
var default_state = 'California';
var default_zip = '99999';
var default_primary_first_name = 'Jane';
var default_primary_last_name = 'Doe';
var default_prescription_number = '99999999';

if (type === 'default') {

  for (var i = 0; i < outputData.length; i++) {
    var output = outputData[i];
    output['member_id'] = default_member_id;
    output['person_code'] = default_person_code;
    output['first_name'] = default_first_name;
    output['last_name'] = default_last_name;
    output['date_of_birth'] = default_date_of_birth;
    output['gender'] = default_gender;
    output['ssn'] = default_ssn;
    output['address_1'] = default_address_1;
    output['address_2'] = default_address_2;
    output['city'] = default_city;
    output['state'] = default_state;
    output['zip'] = default_zip;
    output['primary_first_name'] = default_primary_first_name;
    output['primary_last_name'] = default_primary_last_name;
    output['prescription_number'] = default_prescription_number;
  }
} else {

  var length = inputData.length;

  for (var i = 0; i < outputData.length; i++) {
    var output = outputData[i];
    output['member_id'] = Math.ceil(Math.random() * default_member_id).toString();
    output['person_code'] = Math.ceil(Math.random() * default_person_code).toString();
    output['first_name'] = inputData[Math.floor(Math.random() * length)]['first_name'];
    output['last_name'] = inputData[Math.floor(Math.random() * length)]['primary_last_name'];
    output['date_of_birth'] = (Math.floor(Math.random() * (100)) + 1900).toString()
                              + inputData[Math.floor(Math.random() * length)]['date_of_birth'].slice(4,10);
    output['gender'] = inputData[Math.floor(Math.random() * length)]['gender'];
    output['ssn'] = Math.ceil(Math.random() * default_ssn).toString();
    output['address_1'] = Math.ceil(Math.random()*9).toString() 
                          + inputData[Math.floor(Math.random() * length)]['address_1'].slice(1,100);
    output['address_2'] = inputData[Math.floor(Math.random() * length)]['address_2'];
    output['city'] = inputData[Math.floor(Math.random() * length)]['city'];
    output['state'] = inputData[Math.floor(Math.random() * length)]['state'];
    output['zip'] = Math.ceil(Math.random() * default_zip).toString();
    output['primary_first_name'] = inputData[Math.floor(Math.random() * length)]['primary_first_name'];
    output['primary_last_name'] = inputData[Math.floor(Math.random() * length)]['last_name'];
    output['prescription_number'] = Math.ceil(Math.random() * default_prescription_number).toString();
  }
}

fs.writeFileSync('./anonymized-claims-output.json', JSON.stringify(outputData), 'utf-8');

