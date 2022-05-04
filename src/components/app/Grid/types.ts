import { Column } from "react-table";

export interface GridProps {
	header?: IHeader
  columns: IGridColumn[]
  search_placeholder?: string
}

export interface IHeader {
  title?: string;
}

export type IGridColumn = Column<any> & {
  // TODO
}