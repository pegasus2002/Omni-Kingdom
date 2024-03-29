export interface TableProp {
    type?: "default" | "primary";
    column?: Array<ColumnType>;
    dataSource?: any;
    className?: string;
    leaderboard?: any;
    total?: any;
    searchbar?: any;
}
  
export interface ColumnType {
    key: string;
    title: string;
    dataIndex: string;
    width?: number;
    align?: "left" | "center" | "right";
    render?: React.ReactElement;
}