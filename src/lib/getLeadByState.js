export default async function getLeadByState(leads, state) {
    console.log(state);
    
    const res = await fetch(`https://clean-job-backend-final.vercel.app/search/${leads}/${state}`, {
        cache: 'no-cache'
    })
    return res.json();
}