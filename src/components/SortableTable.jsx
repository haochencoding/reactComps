import Table from './Table';
import useSort from '../hooks/use-sort';
import { FaSort } from 'react-icons/fa';
import { FaSortUp } from 'react-icons/fa6';
import { FaSortDown } from 'react-icons/fa6';

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return <FaSort />;
  }

  if (sortOrder === 'asc') {
    return <FaSortUp />;
  } else if (sortOrder === 'desc') {
    return <FaSortDown />;
  } else if (sortOrder === null) {
    return <FaSort />;
  }
}

function SortableTable(props) {
  const { data, config } = props;

  const { sortOrder, sortBy, setSortColumn, sortedData } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          onClick={() => {
            setSortColumn(column.label);
          }}
          className="cursor-pointer hover:bg-gray-100"
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} config={updatedConfig} data={sortedData} />;
}

export default SortableTable;
