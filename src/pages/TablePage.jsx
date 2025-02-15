import SortableTable from '../components/SortableTable';
import Table from '../components/Table';

function TablePage() {
  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 1 },
    { name: 'Lime', color: 'bg-green-500', score: 4 },
    { name: 'Kiwi', color: 'bg-teal-900', score: 10 },
  ];

  const config = [
    {
      label: 'Fruits',
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: 'Color',
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: 'Score',
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ];

  const keyFn = (rowData) => {
    return rowData.name;
  };

  return (
    <div className="flex gap-10">
      <div>
        <h1 className="text-xl font-bold my-6">Sortable Table</h1>
        <SortableTable data={data} config={config} keyFn={keyFn} />
      </div>
      <div>
        <h1 className="text-xl font-bold my-6">Normal Table</h1>
        <Table data={data} config={config} keyFn={keyFn} />
      </div>
    </div>
  );
}

export default TablePage;
