import { Badge } from "@/components/ui/badge";
import { createColumnHelper } from "@tanstack/react-table";

export const createColumns = () => {
    const columnHelper = createColumnHelper<any>();

    return [
        columnHelper.accessor("customer", {
            header: "Customer",
            cell: (info) => (
                <>
                    <div className="font-medium">
                        {info.getValue().fullname}
                    </div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                        {info.getValue().email}
                    </div>
                </>
            ),
        }),
        columnHelper.accessor("type", {
            header: "Type",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("status", {
            header: "Status",
            cell: (info) => (
                <Badge className="text-xs" variant="secondary">
                    {info.getValue()}
                </Badge>
            ),
        }),
        columnHelper.accessor("date", {
            header: "Date",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("amount", {
            header: "Amount",
            cell: (info) => info.getValue(),
        }),
    ];
};
