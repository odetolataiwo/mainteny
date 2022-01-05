import { URLSearchParams } from 'https://jslib.k6.io/url/1.0.0/index.js';
import http from "k6/http";
import { check, group, sleep } from "k6";
import { Trend, Rate } from "k6/metrics"


// Service Orders
let serviceOrderTrend = new Trend('Service Orders', true)
let serviceOrderErrorRate = new Rate('Service Orders Errors')


export let options = { 
    maxRedirects: 4,
    stages: [
        { duration: "1m", target: 20 },
        { duration: "2m", target: 45 },
        { duration: "5m", target: 50 },
        { duration: "2m", target: 1000 },
        { duration: "2m", target: 600 },
        { duration: "2m", target: 100 },
        { duration: "2m", target: 20 },
    ],
    thresholds: {
        http_req_duration: ['p(95)<600'],
    },
};


const SLEEP_DURATION = 2;

export default function () {

    let params = {
        headers: {
            Authorization: 'Bearer ',
            'Content-Type': 'application/json',
        }
    }

    group('Service Orders', ()=>{
    
        const searchParams = new URLSearchParams([

            ['serviceCompanyId', "9d85be2d-ceb9-4b19-a350-9f512b4b57e4"],
            ['status', "INIT"],
            ['status', "READY_TO_SCHEDULE"],
            ['start', "2021-01-04T23:53:09.588Z"],
            ['end', "2023-01-04T23:53:09.588Z"],
            ['pageIndex', 0],
            ['pageSize', 20],
            ['orderBy', "CREATED_TIME"],
            ['order', "ASC"],
            ['query', ""]
          ]);

        let serviceOrdersRes = http.post(
            `${'https://staging.mainteny.com/api/serviceOrders'}?${searchParams.toString()}`,
            params
        )

        check(serviceOrdersRes,{
            'is status 200': (r) => r.status === 200,
            'has id': (r) => r.json().hasOwnProperty('id'),
            'has name': (r) => r.json().hasOwnProperty('name'),
            'has value': (r) => r.json().hasOwnProperty('value'),
            'has address': (r) => r.json().hasOwnProperty('address'),
            'has assetType as REAL_ESTATE': (r) => r.json()['assetType'] === 'REAL_ESTATE'           
        }) || serviceOrderErrorRate.add(1)
        serviceOrderTrend.add(serviceOrdersRes.timings.duration)

        sleep(SLEEP_DURATION) 
    }) 
    
}