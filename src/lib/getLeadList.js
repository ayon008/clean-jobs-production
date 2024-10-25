export default async function getLeadData(leads) {
    console.log(leads);
    const res = await fetch(`https://clean-job-backend-final.vercel.app/search/${leads}`, {
        cache: 'no-cache'
    });
    return res.json();
}