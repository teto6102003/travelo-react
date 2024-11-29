import './Ticket.css'

const Ticket = ({i}) => {
    return (
        <div class="ticket">
            <section class="ticket-left-part">
                <div class="ticket-header">
                    <img src="/logo.png" alt="logo" />
                    <h4 class="ticket-class">{i.TicketClass}</h4>
                </div>
                <div class="left-ticket-info">
                    <table>
                        <tr>
                            <td>{i.PassangerName}</td>
                            <td>{i.From + "->" + i.To}</td>
                        </tr>
                        <tr>
                            <td>{i.Time}</td>
                            <td>Gate No. #{i.GateNo}</td>
                        </tr>

                        <tr></tr>
                    </table>
                    <div class="barcode">
                        <img src={i.Barcode} />
                    </div>
                </div>
            </section>
            <section class="ticket-right-part">
                <div class="ticket-header">
                    <img src="/logo.png" alt="logo" />
                    <h4 class="ticket-class">{i.TicketClass}</h4>
                </div>
                <div class="right-ticket-info">
                    <table>
                        <tr>
                            <td>{i.PassangerName}</td>
                        </tr>
                        <tr>
                            <td>{i.From + "->" + i.To}</td>
                        </tr>

                        <tr>
                            <td>{i.Time}</td>
                        </tr>
                        <tr>
                            <td>Gate No. #{i.GateNo}</td>
                        </tr>
                        <tr></tr>
                    </table>
                    <div class="barcode">
                        <img src={i.Barcode} />
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Ticket;