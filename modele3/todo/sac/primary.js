<script>
// Get references to the dropdowns
    const districtSelect = document.getElementById('districtSelect');
    const blockSelect = document.getElementById('blockSelect');
    const sectorSelect = document.getElementById('sectorSelect');

    // Function to populate the block dropdown based on district selection
    function populateBlockDropdown(selectedDistrict) {
        // Clear existing options in the block dropdown
        blockSelect.innerHTML = '<option value="" selected></option>';

    // Fetch blocks associated with the selected district from the server using AJAX
    if (selectedDistrict !== '') {
        fetch('get_b.php?#' + selectedD)
            .then(response => response.json())
            .then(data => {
                data.forEach(block => {
                    const option = document.createElement('option');
                    option.value = b.b_code;
                    option.textContent = b.b_name;
                    blockSelect.appendChild(option);
                });
            })
            .catch(error => console.error('Error fetching blocks:', error));
    }
}
