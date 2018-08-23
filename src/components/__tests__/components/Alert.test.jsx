import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../../components/Alert';

//need to run tests on Laptop

it("renders an error message", () => {

    const wrapper = ((
        <Alert message="Error" />
    ));
    expect(wrapper.find(".Alert").text()).toBe("Error!");
});

it("renders an success message!!!", () => {

    const wrapper = ((
        <Alert message="Success!!!" success={true} />    // success={true} === success
    ));
    expect(wrapper.find(".Alert.success").text()).toBe("Success!!!")
});