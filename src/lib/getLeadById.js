export default async function getLeadById(leads, state, id) {
    console.log(leads, state, id);
    const res = await fetch(`https://clean-job-backend-final.vercel.app/search/${leads}/${state}/${id}`, {
        cache: 'no-cache'
    })
    return res.json()
}