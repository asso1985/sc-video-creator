import './billing.scss';
import React from "react";
import { ReactComponent as Invoice } from 'assets/pdf.svg';
import { ReactComponent as ArrowDown } from 'assets/arrow_down_2.svg';
import Text from 'components/text';

const Billing = () => {
  return (
    <div className='scv-billing'>
      <table>
        <thead>
          <tr>
            <td><Text variant='gray' bold>Reference ID</Text></td>
            <td>
              <div className='scv-td-inner'>
                <Text variant='gray' bold>Date</Text>
                <button><ArrowDown width={24} height={24} /></button>
              </div>
            </td>
            <td><Text variant='gray' bold>Amount</Text></td>
            <td><Text variant='gray' bold>Invoice</Text></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Text bold={true}>4571222f6rthswfg9981fr55</Text></td>
            <td><Text bold={true}>7/03/2020</Text></td>
            <td><Text bold={true}>$28</Text></td>
            <td><button><Invoice width={28} height={28} /></button></td>
          </tr>
          <tr>
            <td><Text bold={true}>4571222f6rthswfg9981fr55</Text></td>
            <td><Text bold={true}>7/04/2020</Text></td>
            <td><Text bold={true}>$36</Text></td>
            <td><button><Invoice width={28} height={28} /></button></td>
          </tr>
          <tr>
            <td><Text bold={true}>4571222f6rthswfg9981fr55</Text></td>
            <td><Text bold={true}>7/05/2020</Text></td>
            <td><Text bold={true}>$14</Text></td>
            <td><button><Invoice width={28} height={28} /></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Billing;
