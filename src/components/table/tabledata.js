import TdEmail from './td_email' ;
import TdDate from './td_date' ;
import TdStatus from './td_status';
const tableData = [
    {
        heading: 'Email Address',
        prop: 'email',
        component: TdEmail
    },
    {
        heading: 'Name',
        prop: 'name'
    },
    {
        heading: 'Created On',
        prop: 'createdon',
        component: TdDate
    },
    {
        heading: 'Role',
        prop: 'role'
    },
    {
        heading: 'Status',
        prop: 'status',
        component: TdStatus
    },
];

export default tableData ;