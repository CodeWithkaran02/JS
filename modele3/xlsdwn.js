<script>
document.getElementById('downloadExcelButton').addEventListener('click', () => {
    const table = document.getElementById('datatablesSimple');
    const workbook = XLSX.utils.table_to_book(table);

    // Convert the workbook to an array of arrays
    const excelData = XLSX.write(workbook, {bookType: 'xlsx', type: 'array' });

    // Convert the array to a Blob
    const blob = new Blob([excelData], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });

    // Create a Blob URL and trigger the download
    const blobURL = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobURL;
    link.download = 'list.xlsx';
    link.click();

    setTimeout(() => {
        URL.revokeObjectURL(blobURL);
    }, 100);
});

</script>