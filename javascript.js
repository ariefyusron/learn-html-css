const variabelString = 'ini string'
console.log('string:',variabelString)

const variabelInt = 120
console.log('int:', variabelInt)

const variabelArray = [
  'nilai 1',
  'nilai 2',
  'nilai 3'
]
console.log('array:',variabelArray)
console.log('array with index:',variabelArray[1])

const variabelObj = {
  name: 'Arief Yusron',
  role: ['Frontend','Mobile','Trainer'],
  age: 24,
  team: {
    lead: 'Susanto',
    pm: 'Widodo'
  }
}
console.log('obj:', variabelObj)
console.log('obj with key:', variabelObj.name)

const variabelQuiz = [
  {
    id: 'k001',
    name: 'Arief Yusron',
    roles: [
      {
        id: '001',
        label: 'Frontend'
      },
      {
        id: '002',
        label: 'Mobile'
      }
    ],
    team: [
      {
        id: 'k009',
        name: 'Susanto'
      },
      {
        id: 'k008',
        name: 'Woro'
      },
      {
        id: 'k010',
        name: 'Joko'
      }
    ]
  },
  {
    id: 'k003',
    name: 'Fais',
    roles: [
      {
        id: '001',
        label: 'Ui/Ux'
      },
    ],
    team: [
      {
        id: 'k001',
        name: 'Arief Yusron'
      },
      {
        id: 'k010',
        name: 'Joko'
      }
    ]
  },
]

console.log('result:',variabelQuiz[0].team[1].name)