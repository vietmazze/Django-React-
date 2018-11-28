import React from 'react';
import 'antd/dist/antd.css';
import { Button, Modal, Form, Input, Select } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
import Axios from 'axios';



const FormItem = Form.Item;


function onChange(date, dateString){
    console.log(date, dateString);}

const CollectionCreateForm = Form.create()(
    class extends React.Component {

        
render() {

// const cryptos = this.props.cryptos
const { visible, onCancel, onCreate, form, cryptos } = this.props;
const { getFieldDecorator } = form;



return (

<Modal

visible={visible}

title="Trade Cryptocurrency"

okText="Create"

onCancel={onCancel}

onOk={onCreate}

> 

<Form layout="vertical">

<FormItem label="Cryptocurrency"  style={{ width: 200 }}>
    {getFieldDecorator('symbol', {initialValue: 'BTC',})
    (<select>
        { cryptos.map(crypto => {
                return <option key={crypto.id}>{crypto.symbol}</option>
            })

        }
    </select>
    )}
</FormItem>
<FormItem label='Price'  style={{ width: 200 }}>
        {getFieldDecorator('price_entry')(
        <Input type="number" />
        )}
</FormItem>

<FormItem label='Quantity'  style={{ width: 200 }}>
        {getFieldDecorator('quantity')
        (
        <Input type="number" />
        )}
</FormItem>


{<FormItem label='Date'>
        {getFieldDecorator('date')
                (
        <DatePicker onChange={onChange} />
        )}
</FormItem> }

</Form>

</Modal>

);

}

}

);

 

class CollectionsPage extends React.Component {

state = {

visible: false,
postObj: []
};

 

showModal = () => {

this.setState({ visible: true });

}

 

handleCancel = () => {

this.setState({ visible: false });

}

 

handleCreate = (event) => {
event.preventDefault();
const form = this.formRef.props.form;

form.validateFields((err, values) => {
  if (err) {
    return;
  }
  const postObj = {
      symbol: values.symbol,
      price_entry: values.price_entry,
      quantity: values.quantity,
      date: moment(values.date).format('mm/dd/yyyy')
  }
  console.log('Received values of form: ', postObj);
 Axios.post("http://127.0.0.1:8000/api/coinform/", postObj)
        .then(res => {console.log(res)
    })
  form.resetFields();
  this.setState({ visible: false} );

});


}
 

saveFormRef = (formRef) => {

this.formRef = formRef;

}

 

render() {


return (

<div>

<Button type="primary" onClick={this.showModal}>TRADE</Button>

<CollectionCreateForm

wrappedComponentRef={this.saveFormRef}

visible={this.state.visible}

onCancel={this.handleCancel}

onCreate={this.handleCreate}

cryptos = {this.props.cryptos}

/>

</div>

);

}

}




export default  CollectionsPage;



 