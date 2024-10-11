export default async function getLeadByState(leads, state) {
    console.log(state);
    
    const res = await fetch(`http://localhost:5000/search/${leads}/${state}`, {
        cache: 'no-cache'
    })
    return res.json();
}