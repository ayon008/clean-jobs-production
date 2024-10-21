export default async function getLeadData(leads) {
    console.log(leads);
    const res = await fetch(`https://clean-jobs-latest-backend.vercel.app/search/${leads}`, {
        cache: 'no-cache'
    });
    return res.json();
}