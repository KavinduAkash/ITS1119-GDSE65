const sriLankanMobileNumberRegex = /^(\+94|0)[1-9][0-9]{8}$/;

$('#customer-btns>button').eq(0).on('click', () => {

    let customer_id = $('#customer_id').val();
    let customer_first_name = $('#customer_first_name').val();
    let customer_last_name = $('#customer_last_name').val();
    let customer_mobile = $('#customer_mobile').val();


    if(customer_id) {

        if(customer_first_name) {

            if(customer_last_name) {

                let isValid = sriLankanMobileNumberRegex.test(customer_mobile);
                if(customer_mobile && isValid) {

                    let customer = {
                        customer_id: customer_id,
                        customer_first_name: customer_first_name,
                        customer_last_name: customer_last_name,
                        customer_mobile: customer_mobile
                    };

                    console.log(customer);

                } else {
                    alert("Invalid Customer Mobile Number");
                }

            } else {
                alert("Invalid Customer Last Name");
            }

        } else {
            alert("Invalid Customer First Name");
        }

    } else {
        alert("Invalid Customer Id");
    }

});