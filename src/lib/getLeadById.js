export default async function getLeadById(leads, state, id) {
    console.log(leads, state, id);
    const res = await fetch(`https://clean-jobs-latest-backend.vercel.app/search/${leads}/${state}/${id}`, {
        cache: 'no-cache'
    })
    return res.json()
}