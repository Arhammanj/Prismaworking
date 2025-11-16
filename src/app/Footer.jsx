'use client';

const Footer = () => {
    return (
        <div className="mt-20 bg-[#F8FAFC] h-20 w-full flex items-center justify-center">
            <div className="flex items-center gap-x-4">
                <button className="cursor-pointer"><img src="/images/fb.svg" alt="" /></button>
                <button className="cursor-pointer"><img src="/images/linkedin.svg" alt="" /></button>
                <button className="cursor-pointer"><img src="/images/insta.svg" alt="" /></button>
            </div>
        </div>
    )
}

export default Footer