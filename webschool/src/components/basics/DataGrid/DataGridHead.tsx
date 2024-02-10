import InputCheckboxCuston from "../Form/InputCheckboxCuston";

export default function DataGridHead({ headers }: { headers: string[] }) {
    return (
        <thead className="h-full px-6">
            <tr className="border-b border-zinc-200 dark:border-webschool-300">
                <th className="min-w-10 max-w-12">
                    <div className="px-4 py-2 ">
                        <InputCheckboxCuston id=""/>
                    </div>
                </th>
                {headers.map((header, index)=> (
                    <th key={index} className="max-w-max px-4 py-2">{header}</th>
                ))}
            </tr>
        </thead>
    )
}