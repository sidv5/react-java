
const listWithoutIDs = [
    'Tobias Sanford, Malta',
    'Veda Pickett, Djibouti',
    'Curran Moses, Australia',
    'Ignatius Nichols, Faroe Islands',
    'Phillip Duncan, Guinea'
];

const listWithIDs = [
    {
        id: 0,
        name: 'Tobias Sanford',
        country: 'Malta'
    },
    {
        id: 1,
        name: 'Veda Pickett',
        country: 'Djibouti'
    },
    {
        id: 2,
        name: 'Curran Moses',
        country: 'Australia'
    },
    {
        id: 3,
        name: 'Ignatius Nichols',
        country: 'Faroe Islands'
    },
    {
        id: 4,
        name: 'Phillip Duncan',
        country: 'Guinea'
    }
];


const listItemsWithoutIDs = listWithoutIDs.map(person =>
    <li>{person}</li>
);

const listItemsWithIDs = listWithIDs.map(person =>
    <li key={person.id}>{person.name} - {person.country}</li>
);

export default function RenderList() {
  
    return (
        <>
            <h2>Rendering Arrays/Lists</h2>
            
            <h4>• Array Iteration without ID</h4>
            <p><b>Note: </b>Although the browser renders the items in the array, 
            the browser console shows an error. Each item in the array needs to 
            be associated with an ID</p>
            <ul style={{marginLeft: 30}}>{listItemsWithoutIDs}</ul>
            <br/>

            <h4>• Array Iteration with ID</h4>
            <ul style={{marginLeft: 30}}>{listItemsWithIDs}</ul>

        </>
    );
}
