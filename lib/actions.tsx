

export const getData = async  () => {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    return await res.json()
}