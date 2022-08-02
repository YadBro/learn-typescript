// Untuk membuat optional param gunakan ? pada param tersebut

function fulllName(first: string, last?: string): string {
  return first + ' ' + last;
}

console.log(fulllName('Yadi'));