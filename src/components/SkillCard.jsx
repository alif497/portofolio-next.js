export default function SkillCard({ nama, level}) {
    return(
        <div className="rounded-xl border border-gray-200dark:border-gray-700 dark:border-gray-700 bg-card dark:bg-gray-800 p-5 shadow-sm">
            <h3 className="text-1g font-semibold text-primary dark:text-
sky-200">{nama}</h3>
            <p className="nt-1 text-sm text-muted-foreground dark:text-
gray-400">level: {level}</p>
        </div>
    );
}