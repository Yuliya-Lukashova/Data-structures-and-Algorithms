class HashTable {
  constructor(size = 67) {
    this.table = new Array(size);
  }

  hashFunction(key) {
    let total = 0;
    for (let char of key) {
      total += char.charCodeAt(0);
    }
    return total % this.table.length;
  }

  add(key, value) {
    const index = this.hashFunction(key);
    this.table[index] = value;
  }

  get(key) {
    const index = this.hashFunction(key);
    return this.table[index];
  }
}


const hashTable = new HashTable();
hashTable.add('name', 'Bob');
hashTable.add('age', 25);
