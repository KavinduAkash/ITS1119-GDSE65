$('#customer-btns>button').eq(0).on('click', () => {

    let customer_id = $('#customer_id').val();
    let customer_first_name = $('#customer_first_name').val();
    let customer_last_name = $('#customer_last_name').val();
    let customer_mobile = $('#customer_mobile').val();

    let customer = {
        customer_id: customer_id,
        customer_first_name: customer_first_name,
        customer_last_name: customer_last_name,
        customer_mobile: customer_mobile
    }

    console.log(customer);

});