// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  // Clone the records object to avoid direct modification
  const updatedRecords = { ...records };

  // Check if the property 'tracks' is involved
  if (prop === 'tracks') {
    // If 'tracks' property does not exist, create an empty array
    if (!updatedRecords[id].hasOwnProperty('tracks')) {
      updatedRecords[id].tracks = [];
    }

    // If value is not an empty string, add it to the tracks array
    if (value !== '') {
      updatedRecords[id].tracks.push(value);
    } else {
      // If value is an empty string, delete the 'tracks' property
      delete updatedRecords[id].tracks;
    }
  } else {
    // For other properties, update if value is not an empty string
    if (value !== '') {
      updatedRecords[id][prop] = value;
    } else {
      // If value is an empty string, delete the property
      delete updatedRecords[id][prop];
    }
  }

  return updatedRecords;
}
