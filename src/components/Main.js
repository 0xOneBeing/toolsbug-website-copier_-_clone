import RandomStats from './RandomStats'

export default function Main() {
    return (
        <main className="">
            <h1 className="title text-center">WEBSITE COPIER ONLINE&nbsp;<span className="free">FREE</span></h1>
            <section>
                <div className="row text-center">
                    <div className="col-xs-4 col-sm-3 col-md-3 left">
                        <div className="stats">
                            <h1><RandomStats /></h1>
                            <small className='text-center'>Total Websites Copied</small>
                        </div>
                    </div>
                    <div className="col-xs-8 col-sm-6 col-md-6 center">
                        <form className="form">
                            <div className="row input-area">
                                <div className="col-sm-10 col-md-10">
                                    <input className="form-control enterURL" type="text" placeholder="Enter URL" autoFocus required />
                                </div>
                                <div className="col-sm-2 col-md-2">
                                    <button className="form-control btn btn-warning go" type='button'><i className="fas fa-arrow-right"></i></button>
                                </div>
                            </div> 
                            <div className='row'>
                                <div className='col-sm-12 col-md-12'>
                                    <select className='selectType form-select'>
                                        <option>Select Type</option>
                                        <option>1 page (FREE)</option>
                                        <option>Up to ~50 pages; 1 level (FREE)</option>
                                        <option>50+ pages ($12.50)</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-xs-0 col-sm-3 col-md-3 right"></div>
                </div>
            </section>
        </main>
    )
}
