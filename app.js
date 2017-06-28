var fs = require('fs');
var prompt = require ('readline-sync');

var type;

while (type !== 'default' && type !== 'random') {
  type = prompt.question('Would you like to have anonymized information that is:\
   \n 1) default or \n 2) random? \n Please type in either "default" or "random" \n' );
  type = type.toLowerCase();
}

var data = JSON.parse(fs.readFileSync('smithrx-claims-input.json').toString());

var default_member_id = '11111111111';
var default_person_code = '00';
var default_first_name = 'XXXX';
var default_last_name = 'XXXX';
var default_date_of_birth = '2000-01-01';
var default_gender = 'x';
var default_ssn = '111111111';
var default_address_1 = '123 Lane Road';
var default_address_2 = 'Suite 123';
var default_city = 'San Francisco';
var default_state = 'California';
var default_zip = '12345';
var default_primary_first_name = 'Jane';
var default_primary_last_name = 'Doe';
var default_prescription_number = '11111111';

if (type === 'default') {

  for (var i = 0; i < data.length; i++) {
    var input = data[i];
    input['member_id'] = default_member_id;
    input['person_code'] = default_person_code;
    input['first_name'] = default_first_name;
    input['last_name'] = default_last_name;
    input['date_of_birth'] = default_date_of_birth;
    input['gender'] = default_gender;
    input['ssn'] = default_ssn;
    input['address_1'] = default_address_1;
    input['address_2'] = default_address_2;
    input['city'] = default_city;
    input['state'] = default_state;
    input['zip'] = default_zip;
    input['primary_first_name'] = default_primary_first_name;
    input['primary_last_name'] = default_primary_last_name;
    input['prescription_number'] = default_prescription_number;
  }
}

// if (type === 'random') {
//   var default_member_id = Math.ciel(Math.random()*999999999).toString();
//   var default_person_code = '00';
//   var default_first_name = 'XXXX';
//   var default_last_name = 'XXXX';
//   var default_date_of_birth = '2000-01-01';
//   var default_gender = 'x';
//   var default_ssn = '111111111';
//   var default_address_1 = '123 Lane Road';
//   var default_address_2 = 'Suite 123';
//   var default_city = 'San Francisco';
//   var default_state = 'California';
//   var default_zip = '12345';
//   var default_primary_first_name = 'Jane';
//   var default_primary_last_name = 'Doe';
//   var default_prescription_number = '11111111';
// }

// console.log(data);

fs.writeFileSync('./test.json', JSON.stringify(data), 'utf-8');

