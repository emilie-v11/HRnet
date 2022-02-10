<main className="text-center py-5 text-light">
    <h2 className="mb-5">Create employee</h2>

    <div className="container">
        <form action="#" id="create-employee" className="container">
            <div className="row pb-2">
                <div className="col">
                    <label htmlFor="first-name" className="form-label">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="first-name"
                        className="form-control"
                        aria-label="First name"
                    />
                </div>
                <div className="col">
                    <label htmlFor="last-name" className="form-label">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="last-name"
                        className="form-control"
                        aria-label="Last name"
                    />
                </div>
            </div>

            <div className="row pb-2">
                <div className="col">
                    <label htmlFor="date-of-birth" className="form-label">
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        id="date-of-birth"
                        className="form-control"
                        aria-label="Date of birth"
                    />
                </div>
                <div className="col">
                    <label htmlFor="start-date" className="form-label">
                        Start Date
                    </label>
                    <input
                        type="date"
                        id="start-date"
                        className="form-control"
                        aria-label="Start date"
                    />
                </div>
            </div>

            <div className="col">
                <label htmlFor="state" className="form-label">
                    State
                </label>
                <input
                    className="form-control"
                    list="datalistOptions"
                    id="state"
                    placeholder="State"
                />
                <datalist id="datalistOptions">
                    <option value="Alabama" />
                    <option value="Alaska" />
                    <option value="Arizona" />
                    <option value="Arkansas" />
                    <option value="California" />
                </datalist>
            </div>
            <fieldset className="address">
                <legend>Address</legend>

                <label className="visually-hidden" htmlFor="street">
                    Street
                </label>
                <input id="street" type="text" placeholder="Street" />

                <label className="visually-hidden" htmlFor="city">
                    City
                </label>
                <input id="city" type="text" placeholder="City" />

                <label className="visually-hidden" htmlFor="state">
                    State
                </label>
                <select name="state" id="state" placeholder="State"></select>

                {/* <label htmlFor="department">Department</label>
                <select name="department" id="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select> */}

                <label className="visually-hidden" htmlFor="zip-code">
                    Zip Code
                </label>
                <input id="zip-code" type="number" placeholder="Zip Code" />
            </fieldset>

            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    </div>

    {/* <button onclick="saveEmployee()">Save</button> */}
    <div id="confirmation" className="modal">
        Employee Created!
    </div>
</main>;
