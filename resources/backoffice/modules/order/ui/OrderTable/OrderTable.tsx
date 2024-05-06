import React from "react";
import { Table } from "@/shared/ui/";
import { useQuery } from "@tanstack/react-query";

import { createColumns } from "./column";
import { getOrders } from "../../api/orders.api";

export const OrderTable: React.FC = () => {
    const { data } = useQuery({ queryKey: ["orders"], queryFn: getOrders });

    return <Table columns={createColumns()} data={data} />;
};
