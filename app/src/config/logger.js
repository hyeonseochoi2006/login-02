const {createLogger, transports, format } = require("winston")
const {combine, timestamp,  simple, printf, colorize, label } = format;
const printFormat =   printf(({timestamp, label, level, message}) => {
    return `${timestamp} [${label}] ${level} : ${message}`;
})

const printLogformat = {
    file: combine(
    label({
        label: "로그인",
    }),

    timestamp({
        format: "YYYY-MM DD HH:mm:dd"
    }),
    printFormat
    ),
    console: combine(
        colorize(),
        simple()
    )
};

const opts = {
    file: new transports.File({
        filename: "aceess.log",
        dirname: "./logs",
        level:"info",
        format: printLogformat.file,
}),
console: new transports.Console({
    level:"info",
    format: printLogformat.console,
 })
}

const logger = createLogger({
    transports: [opts.file ],
});

if(process.env.NODE_ENV !== "production"){
    logger.add(opts.console)
}

module.exports = logger