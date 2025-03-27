import winston from "winston";
const {combine, timestamp, json, errors} = winston.format;

const start_time = Date.now();

export default function(label: string){
    return winston.createLogger({
        level: 'info',
        format: combine(
            errors({stack: true}), 
            timestamp(), 
            json(),
        ),
        defaultMeta: { "class": label },
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({
                filename: `logs/${start_time}.log`
            })
        ]
    });
};