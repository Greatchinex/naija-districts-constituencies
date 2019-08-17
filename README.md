# naija-districts-constituencies

An NPM Package that Searches for Districts and Constituencies in Nigeria

## Installation

<code>npm i naija-districts-constituencies</code>

## Usage

<code>const area = require('naija-districts-constituencies');</code>

<br> Perform a search for Districts or Constituencies in Nigeria, it will return array of Districts or Constituencies with the state and District or Constituency closest to your search input

## Example 1

<code> let districts = area.searchDistricts('Abia'); </code>

<br> <code>console.log(districts)</code>

<br> // Output
<br> [{ state: "Abia, districts: [ 'Abia North', 'Abia South', 'Abia Central' ] },{ state: 'Taraba',
districts: [ 'Taraba North', 'Taraba Central', 'Taraba South' ] }, .......]

## Example 2

<code> let all_districts = area.allDistricts(); </code>

<br> <code>console.log(all_districts)</code>

<br>Returns an array of all districts and Their states in Nigeria

## Example 3

<code> let consistuency = area.searchConstituency('Osun'); </code>

<br> <code>console.log(consistuency)</code>

<br> // Output
<br> [{ state: 'Osun',
constituencies:
[ 'Irepodun', 'Olorunda', 'Oshogbo', 'Orolu', 'Boripe', 'Ifelodun', 'Odo-Otin', 'Boluwaduro Ifedayo',
'Ila', 'Atakumnosa East', 'Atakunmosa West', 'Ilesa West', 'Ilesa East', 'Obokun Oraide', 'Ife Central', 'Ife East', 'Ife North', 'Ife South', 'Aydire','Iwo', 'Ola-Oluwa', 'Ayedaade', 'Irewole', 'Isokan', Ede North','Ede South', 'Egbedore','Ejigbo' ]
}, .......]

## Example 4

<code> let all_constituencies = area.allConstituencies(); </code>

<br> <code>console.log(all_constituencies)</code>

<br> Returns an array of all Consistuencies and Their states in Nigeria

## You can contact me

<br> Facebook: Chilaka Chinedu
<br> E-mail: greatchinex@gmail.com

## github Repo

<br> https://github.com/Greatchinex/naija-districts-constituencies
