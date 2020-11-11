import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const TAX_RATE = 0.07;
const FONT_SIZE_HEAD = 22;
const FONT_SIZE_BODY = 18;
const FONT_WEIGHT_HEAD = 'bold';

const WhiteTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.testCell.white,
        color: theme.palette.testCell.black,
        fontSize: FONT_SIZE_HEAD,
        fontWeight: FONT_WEIGHT_HEAD,
    },
    body: {
        backgroundColor: theme.palette.testCell.white,
        color: theme.palette.testCell.black,
        fontSize: FONT_SIZE_BODY,
    },
}))(TableCell);

const GreyTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.testCell.grey,
        color: theme.palette.testCell.black,
        fontSize: FONT_SIZE_HEAD,
        fontWeight: FONT_WEIGHT_HEAD,
    },
    body: {
        backgroundColor: theme.palette.testCell.grey,
        color: theme.palette.testCell.black,
        fontSize: FONT_SIZE_BODY,
    },
}))(TableCell);

const BlueTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.testCell.blue,
        color: theme.palette.testCell.black,
        fontSize: FONT_SIZE_HEAD,
        fontWeight: FONT_WEIGHT_HEAD,
    },
    body: {
        backgroundColor: theme.palette.testCell.blue,
        color: theme.palette.testCell.black,
        fontSize: FONT_SIZE_BODY,
    },
}))(TableCell);

const RedTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.testCell.red,
        color: theme.palette.testCell.black,
        fontSize: FONT_SIZE_HEAD,
        fontWeight: FONT_WEIGHT_HEAD,
    },
    body: {
        backgroundColor: theme.palette.testCell.red,
        color: theme.palette.testCell.black,
        fontSize: FONT_SIZE_BODY,
    },
}))(TableCell);

const YellowTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.testCell.yellow,
        color: theme.palette.testCell.black,
        fontSize: FONT_SIZE_HEAD,
        fontWeight: FONT_WEIGHT_HEAD,
    },
    body: {
        backgroundColor: theme.palette.testCell.yellow,
        color: theme.palette.testCell.black,
        fontSize: FONT_SIZE_BODY,
    },
}))(TableCell);

const OrangeTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.testCell.orange,
        color: theme.palette.testCell.black,
        fontSize: FONT_SIZE_HEAD,
    },
    body: {
        backgroundColor: theme.palette.testCell.orange,
        color: theme.palette.testCell.black,
        fontSize: FONT_SIZE_BODY,
    },
}))(TableCell);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
        maxWidth: '80%',
    },
});

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
    return qty * unit;
}

function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
}

function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
    createRow('Paperclips (Box)', 100, 1.15),
    createRow('Paper (Case)', 10, 45.99),
    createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function SummaryTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" align="center" aria-label="summary table">
                <TableHead>
                    <TableRow>
                        <WhiteTableCell align="center">Supplier</WhiteTableCell>
                        <GreyTableCell align="center" colSpan={2}>TSMC</GreyTableCell>
                        <WhiteTableCell align="center"/>
                        <BlueTableCell align="center" colSpan={6}>AMKOR</BlueTableCell>
                        <WhiteTableCell align="center"/>
                        <RedTableCell align="center" colSpan={3}>Zollner</RedTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <WhiteTableCell align="left">Manufacturing step</WhiteTableCell>
                        <GreyTableCell align="center">Wafer FE</GreyTableCell>
                        <GreyTableCell align="center">Wafer BE</GreyTableCell>
                        <OrangeTableCell align="center">transit</OrangeTableCell>
                        <BlueTableCell align="center">Wafer wo Bump</BlueTableCell>
                        <BlueTableCell align="center">Bumped Wafers</BlueTableCell>
                        <BlueTableCell align="center">EWS</BlueTableCell>
                        <BlueTableCell align="center">Die Bank</BlueTableCell>
                        <BlueTableCell align="center">Assy</BlueTableCell>
                        <BlueTableCell align="center">Tested MCM</BlueTableCell>
                        <OrangeTableCell align="center">transit</OrangeTableCell>
                        <RedTableCell align="center">Precond</RedTableCell>
                        <RedTableCell align="center">PCA line</RedTableCell>
                        <RedTableCell align="center">HLA Assembly</RedTableCell>
                    </TableRow>
                    <TableRow>
                        <WhiteTableCell align="left">Unit of measure</WhiteTableCell>
                        <GreyTableCell align="left">wafer</GreyTableCell>
                        <GreyTableCell align="left">wafer</GreyTableCell>
                        <OrangeTableCell align="left">wafer</OrangeTableCell>
                        <BlueTableCell align="left">wafer</BlueTableCell>
                        <BlueTableCell align="left">wafer</BlueTableCell>
                        <BlueTableCell align="left">die</BlueTableCell>
                        <BlueTableCell align="left">die</BlueTableCell>
                        <BlueTableCell align="left">die</BlueTableCell>
                        <BlueTableCell align="left">MCM(2 x die)</BlueTableCell>
                        <OrangeTableCell align="left">MCM</OrangeTableCell>
                        <RedTableCell align="left">MCM</RedTableCell>
                        <RedTableCell align="left">PCA(2 x MCM)</RedTableCell>
                        <RedTableCell align="left">HLA(16 x MCM)</RedTableCell>
                    </TableRow>
                    <TableRow>
                        <WhiteTableCell align="left">data source</WhiteTableCell>
                        <GreyTableCell align="left">GUC WIP</GreyTableCell>
                        <GreyTableCell align="left">GUC WIP</GreyTableCell>
                        <OrangeTableCell align="left">GUC WIP</OrangeTableCell>
                        <BlueTableCell align="left">AMKOR WIP</BlueTableCell>
                        <BlueTableCell align="left">AMKOR WIP</BlueTableCell>
                        <BlueTableCell align="left">AMKOR WIP</BlueTableCell>
                        <BlueTableCell align="left">AMKOR WIP</BlueTableCell>
                        <BlueTableCell align="left">AMKOR WIP</BlueTableCell>
                        <BlueTableCell align="left">AMKOR WIP</BlueTableCell>
                        <OrangeTableCell align="left">AMKOR</OrangeTableCell>
                        <RedTableCell align="left">RR</RedTableCell>
                        <RedTableCell align="left">FTS</RedTableCell>
                        <RedTableCell align="left">FTS</RedTableCell>
                    </TableRow>
                    <TableRow>
                        <WhiteTableCell align="left">data generated</WhiteTableCell>
                        <GreyTableCell align="left"/>
                        <YellowTableCell align="left">WAT data</YellowTableCell>
                        <OrangeTableCell align="left"/>
                        <BlueTableCell align="left"/>
                        <BlueTableCell align="left"/>
                        <YellowTableCell align="left">Test datalog</YellowTableCell>
                        <BlueTableCell align="left"/>
                        <BlueTableCell align="left"/>
                        <YellowTableCell align="left">Test datalog</YellowTableCell>
                        <OrangeTableCell align="left"/>
                        <RedTableCell align="left"/>
                        <RedTableCell align="left"/>
                        <YellowTableCell align="left">Test datalog</YellowTableCell>
                    </TableRow>
                    <TableRow>
                        <WhiteTableCell align="left"/>
                        <WhiteTableCell align="left"/>
                        <WhiteTableCell align="left"/>
                        <WhiteTableCell align="left"/>
                        <WhiteTableCell align="left"/>
                        <WhiteTableCell align="left"/>
                        <WhiteTableCell align="left"/>
                        <WhiteTableCell align="left"/>
                        <WhiteTableCell align="left"/>
                        <WhiteTableCell align="left"/>
                        <WhiteTableCell align="left"/>
                        <WhiteTableCell align="left"/>
                        <WhiteTableCell align="left"/>
                        <WhiteTableCell align="left"/>
                    </TableRow>
                    <TableRow>
                        <WhiteTableCell align="left">Unit</WhiteTableCell>
                        <WhiteTableCell align="right">25</WhiteTableCell>
                        <WhiteTableCell align="right">25</WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                        <WhiteTableCell align="right">24</WhiteTableCell>
                        <WhiteTableCell align="right">12</WhiteTableCell>
                        <WhiteTableCell align="right">12000</WhiteTableCell>
                        <WhiteTableCell align="right">4500</WhiteTableCell>
                        <WhiteTableCell align="right">9762</WhiteTableCell>
                        <WhiteTableCell align="right">2344</WhiteTableCell>
                        <WhiteTableCell align="right">550</WhiteTableCell>
                        <WhiteTableCell align="right">1200</WhiteTableCell>
                        <WhiteTableCell align="right">120</WhiteTableCell>
                        <WhiteTableCell align="right">50</WhiteTableCell>
                    </TableRow>
                    <TableRow>
                        <WhiteTableCell align="left">Cycle Time Week</WhiteTableCell>
                        <WhiteTableCell align="center">0</WhiteTableCell>
                        <WhiteTableCell align="center">4</WhiteTableCell>
                        <WhiteTableCell align="center">1</WhiteTableCell>
                        <WhiteTableCell align="center">0</WhiteTableCell>
                        <WhiteTableCell align="center">2</WhiteTableCell>
                        <WhiteTableCell align="center">0</WhiteTableCell>
                        <WhiteTableCell align="center">2</WhiteTableCell>
                        <WhiteTableCell align="center">1</WhiteTableCell>
                        <WhiteTableCell align="center">2</WhiteTableCell>
                        <WhiteTableCell align="center">1</WhiteTableCell>
                        <WhiteTableCell align="center">1</WhiteTableCell>
                        <WhiteTableCell align="center">1</WhiteTableCell>
                        <WhiteTableCell align="center">1</WhiteTableCell>
                    </TableRow>
                    <TableRow>
                        <YellowTableCell align="left">Actual Cycle Time</YellowTableCell>
                        <YellowTableCell align="right"></YellowTableCell>
                        <YellowTableCell align="right"></YellowTableCell>
                        <YellowTableCell align="right"></YellowTableCell>
                        <YellowTableCell align="right"></YellowTableCell>
                        <YellowTableCell align="right"></YellowTableCell>
                        <YellowTableCell align="right"></YellowTableCell>
                        <YellowTableCell align="right"></YellowTableCell>
                        <YellowTableCell align="right"></YellowTableCell>
                        <YellowTableCell align="right"></YellowTableCell>
                        <YellowTableCell align="right"></YellowTableCell>
                        <YellowTableCell align="right"></YellowTableCell>
                        <YellowTableCell align="right"></YellowTableCell>
                        <YellowTableCell align="right"></YellowTableCell>
                    </TableRow>
                    <TableRow>
                        <WhiteTableCell align="left">Yield(goal)</WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                        <WhiteTableCell align="right">90-100%</WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                        <WhiteTableCell align="right">80-90%</WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                        <WhiteTableCell align="right">90-95%</WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                        <WhiteTableCell align="right">99-100%</WhiteTableCell>
                    </TableRow>
                    <TableRow>
                        <YellowTableCell align="left">Actual Yield (Exensio)</YellowTableCell>
                        <YellowTableCell align="right"></YellowTableCell>
                        <YellowTableCell align="right"></YellowTableCell>
                        <YellowTableCell align="right"></YellowTableCell>
                        <YellowTableCell align="right"></YellowTableCell>
                        <YellowTableCell align="right"></YellowTableCell>
                        <YellowTableCell align="right"></YellowTableCell>
                        <YellowTableCell align="right"></YellowTableCell>
                        <YellowTableCell align="right"></YellowTableCell>
                        <YellowTableCell align="right"></YellowTableCell>
                        <YellowTableCell align="right"></YellowTableCell>
                        <YellowTableCell align="right"></YellowTableCell>
                        <YellowTableCell align="right"></YellowTableCell>
                        <YellowTableCell align="right"></YellowTableCell>
                    </TableRow>
                    <TableRow>
                        <WhiteTableCell align="left">Price(single unit)</WhiteTableCell>
                        <WhiteTableCell align="right">$ 7,000.00</WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                        <WhiteTableCell align="right">$ 250.00</WhiteTableCell>
                        <WhiteTableCell align="right">$ 1,000.00</WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                        <WhiteTableCell align="right">$ 16.00</WhiteTableCell>
                        <WhiteTableCell align="right">$ 30.00</WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                        <WhiteTableCell align="right">$</WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                    </TableRow>
                    <TableRow>
                        <WhiteTableCell align="left">Price(accumulating)</WhiteTableCell>
                        <WhiteTableCell align="right">$ 7,000.00</WhiteTableCell>
                        <WhiteTableCell align="right">$ 7,000.00</WhiteTableCell>
                        <WhiteTableCell align="right">$ 7,000.00</WhiteTableCell>
                        <WhiteTableCell align="right">$ 7,250.00</WhiteTableCell>
                        <WhiteTableCell align="right">$ 20.63</WhiteTableCell>
                        <WhiteTableCell align="right">$ 20.63</WhiteTableCell>
                        <WhiteTableCell align="right">$ 36.63</WhiteTableCell>
                        <WhiteTableCell align="right">$ 66.63</WhiteTableCell>
                        <WhiteTableCell align="right">$ 66.63</WhiteTableCell>
                        <WhiteTableCell align="right">$ 66.63</WhiteTableCell>
                        <WhiteTableCell align="right">$ 66.63</WhiteTableCell>
                        <WhiteTableCell align="right">$ 66.63</WhiteTableCell>
                        <WhiteTableCell align="right">$ 66.63</WhiteTableCell>
                    </TableRow>
                    <TableRow>
                        <WhiteTableCell align="left"></WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                    </TableRow>
                    <TableRow>
                        <WhiteTableCell align="left">Value $ Accumulated(total)</WhiteTableCell>
                        <WhiteTableCell align="right">$ 175,000.00</WhiteTableCell>
                        <WhiteTableCell align="right">$ 175,000.00</WhiteTableCell>
                        <WhiteTableCell align="right"></WhiteTableCell>
                        <WhiteTableCell align="right">$ 168,000.00</WhiteTableCell>
                        <WhiteTableCell align="right">$ 87,000.00</WhiteTableCell>
                        <WhiteTableCell align="right">$ 247,500.00</WhiteTableCell>
                        <WhiteTableCell align="right">$ 92,813.00</WhiteTableCell>
                        <WhiteTableCell align="right">$ 357,533.00</WhiteTableCell>
                        <WhiteTableCell align="right">$ 156,169.00</WhiteTableCell>
                        <WhiteTableCell align="right">$ 36,644.00</WhiteTableCell>
                        <WhiteTableCell align="right">$ 79,950.00</WhiteTableCell>
                        <WhiteTableCell align="right">$ 7,995.00</WhiteTableCell>
                        <WhiteTableCell align="right">$ 3,331.00</WhiteTableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
