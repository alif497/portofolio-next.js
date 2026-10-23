export default function SkillCard({ nama, level}) {
    return(
        <div className="rounded-x1 border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="text-1g font-semibold text-utama">{nama}</h3>
            <p className="nt-1 text-sm text-gray-600">level: {level}</p>
        </div>
    );
}