const DashboardCard = ({ Icon, title, description, iconMargin, size }) => (
    <div className='bg-[#C7F2AB] px-6 py-5 rounded-[20px] flex items-start gap-3'>
        <div className={`mt-[${iconMargin}]`}>
            <Icon size={size} />
        </div>
        <div>
            <h3 className='font-bold text-xs'>{title}</h3>
            <p className='poppins text-xs'>{description}</p>
        </div>
    </div>
);

export default DashboardCard;