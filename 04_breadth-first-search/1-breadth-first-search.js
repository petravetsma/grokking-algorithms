function breadthFirstSearch(name) {
  const queue = []
  queue.push(...graph[name])
  console.log(queue)
  const searched = []
  while (queue.length > 0) {
    person = queue.shift()
    if (!searched.includes(person)) {
      if (isSearchedPerson(person)) {
        return person
      } else {
        queue.push(...graph[person])
        searched.push(person)
      }
    }
  }
  return false
}

function isSearchedPerson(str) {
  return str.length === 6
}

const graph = {}
graph.you = ['alice', 'bob', 'claire']
graph.bob = ['anuj', 'peggy']
graph.alice = ['peggy']
graph.claire = ['thom', 'jonny']
graph.anuj = []
graph.peggy = []
graph.thom = []
graph.jonny = []

console.log(breadthFirstSearch('you'))
