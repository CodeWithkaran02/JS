<script>
    Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    Chart.defaults.global.defaultFontColor = '#292b2c';

    var ctx = document.getElementById("myAreaChart");

    var labels = <?php echo json_encode($labels); ?>;
    var dataValues = <?php echo json_encode($dataValues); ?>;

    var myLineChart = new Chart(ctx, {
        type: 'line',
    data: {
        labels: labels,
    datasets: [{
        label: "Sessions",
    lineTension: 0.3,
    backgroundColor: "rgba(2,117,216,0.2)",
    borderColor: "rgba(2,117,216,1)",
    pointRadius: 5,
    pointBackgroundColor: "rgba(2,117,216,1)",
    pointBorderColor: "rgba(255,255,255,0.8)",
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "rgba(2,117,216,1)",
    pointHitRadius: 50,
    pointBorderWidth: 2,
    data: dataValues,
        }],
    },
    options: {
        // Your chart options
    }
});
</script>