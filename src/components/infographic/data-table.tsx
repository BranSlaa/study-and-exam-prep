import type { TableProps } from "@/types/component-props";

export function DataTable({ table }: TableProps) {
	return (
		<div className="rounded-md border border-current/15 bg-white/65">
			<table className="responsive-table w-full border-collapse text-left text-base">
				<caption className="sr-only">{table.label}</caption>
				<thead className="bg-foreground text-white">
					<tr>
						{table.columns.map((column) => (
							<th
								className="px-3 py-2 font-semibold"
								key={column}
								scope="col"
							>
								{column}
							</th>
						))}
					</tr>
				</thead>
				<tbody className="text-foreground">
					{table.rows.map((row, rowIndex) => (
						<tr
							className="border-t border-current/15"
							key={rowIndex}
						>
							{row.map((cell, cellIndex) => (
								<td
									className="px-3 py-2 align-top first:font-semibold"
									data-label={table.columns[cellIndex]}
									key={cellIndex}
								>
									{cell}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
