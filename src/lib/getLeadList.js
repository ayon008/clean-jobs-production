export default async function getLeadData(leads) {
    console.log(leads);
    const res = await fetch(`http://localhost:5000/search/${leads}`, {
        cache: 'no-cache'
    });
    return res.json();
}