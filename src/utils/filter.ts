import moment from 'moment';
export class Filter {
    static DateFormat = (dataStr: any, pattern?: string) => {
        if (pattern) {
            return moment(dataStr).format(pattern);
        } else {
            return moment(dataStr).format('YYYY/MM/DD HH:mm:ss');
        }
    };
    static reportStatus(status: any) {
        let statusInfo = {
            text: '',
            class: ''
        };
        switch (status) {
            case 'EXECUTING':
                statusInfo = {
                    text: '正在检测',
                    class: 'pull-right status-primary'
                };
                break;
            case 'SUCCESS':
                statusInfo = {
                    text: '已生成',
                    class: 'pull-right status-success'
                };
                break;
            case 'OVERTIME':
                statusInfo = {
                    text: '已过期',
                    class: 'pull-right status-gray'
                };
                break;
            case 'FAILURE':
                statusInfo = {
                    text: '检测失败',
                    class: 'pull-right status-error'
                };
                break;
            default:
                return statusInfo;
        }
        return statusInfo;
    }
}
