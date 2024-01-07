import React from 'react'
import "./Coc.scss"
const Coc = () => {
    return (
        <section className='coc'>
            <h1 className='heading'>Code of Conduct</h1>
            <div>
                <p className='text__bold'>
                    By participating in Winter Of Code, all participants agree to
                    abide by this Code of Conduct. Failure to comply with this Code of Conduct may result in disqualification
                    and expulsion from the event, and may also lead to legal action in severe cases.
                </p>
                <p className="coc__rules">
                    <span className="text__bold">Respect: </span>
                    All participants must respect each other's opinions, beliefs, and values.
                    Discriminatory language or behavior will not be tolerated. This includes, but is not limited to, sexism,
                    racism, homophobia, and ableism.
                </p>
                <p className="coc__rules">
                    <span className="text__bold">Collaboration: </span>
                    Participants should embrace collaboration and teamwork.
                    Any attempts to sabotage or undermine other contributors' work will not be tolerated.
                </p>
                <p className="coc__rules">
                    <span className="text__bold">Privacy: </span>
                    Participants must respect the privacy of others. Any confidential information shared
                    during the Winter of Code must not be disclosed
                    without the express consent of the person or team that shared it.
                </p>
                <p className="coc__rules">
                    <span className="text__bold">Professionalism: </span>
                    Participants should conduct themselves in a professional manner throughout the Winter of Code.
                    This includes dressing appropriately, refraining from using inappropriate language,
                    and avoiding any behavior that would be considered unprofessional.
                </p>
                <p className="coc__rules">
                    <span className="text__bold">Safety: </span>
                    Participants should prioritize their safety and the safety
                    of others throughout the Winter of Code. Any behavior that puts others in danger,
                    including but not limited to physical violence or verbal threats, will not be tolerated
                </p>
                <p className="coc__rules">
                    <span className="text__bold">Code of Conduct Violations: </span>
                    Any participant who violates the Code of Conduct may be subject to disciplinary action,
                    up to and including expulsion from the Winter of Code.
                    All participants have the right to report any Code of Conduct violations to the event organizers.
                </p>
                <p className="coc__rules">
                    <span className="text__bold">Inclusivity: </span>
                    The Winter of Code should be inclusive to all individuals regardless of gender,
                    ethnicity, race, religion, age, or any other characteristic.
                    All participants should work towards creating a safe and welcoming environment for everyone involved.
                </p>
                <p className="coc__rules">
                    <span className="text__bold">Intellectual Property: </span>
                    Participants should respect the intellectual property rights of others. Any use of copyrighted
                    or trademarked material must be properly attributed or cleared for use
                </p>
                <p className="coc__rules">
                    <span className="text__bold">Compliance with Laws: </span>
                    All participants must comply with all applicable laws and regulations throughout the Winter of Code.
                    Any illegal activities will not be tolerated.
                </p>
                <p className="coc__rules">
                    <span className="text__bold">Accountability: </span>
                    All participants are accountable for their own actions and should take responsibility
                    for any consequences that may arise from those actions.
                </p>
            </div>
            <h1 className='heading'>Reporting a Breach</h1>
            <div>
                <p>
                    If you experience or witness a breach of the Winter of Code Code of Conduct,
                    we encourage you to report it immediately. You can report it in the following ways:
                </p>
                <ul className='coc_list'>
                    <li>
                        <span className="text__bold">Speak with a member of the Winter of Code team: </span>
                        <span>You can approach any member of the Winter of Code team and share your concerns with them.
                            They will take appropriate action to address the situation. The team will be identifiable by Winter of Code official t-shirts,
                            bearing the Winter of Code logo, along with a lanyard and identity card.</span>
                    </li>
                    <li>
                        <span className="text__bold">Email the Winter of Code team: </span>
                        <span>You can send an email to the official Winter of Code email address</span>
                        <a href="mailto: dscnsecorg@gmail.com"> dscnsecorg@gmail.com </a><span>  and describe the incident in detail.
                            We will investigate the matter and take appropriate action.</span>
                    </li>
                    <li><span className="text__bold">Contact the following Winter of Code Representatives:</span>
                        <span> If you prefer to tell us in person but the team is not near, call the lead organizers below:</span>
                        <ul className="emails">
                            <li>Debojit Saha:  <a href="mailto:shubham@hack4bengal.tech">shubham@hack4bengal.tech</a></li>
                            <li>Subhajit Hait:  <a href="mailto:sagnik@hack4bengal.tech">sagnik@hack4bengal.tech</a></li>
                            <li>Manish Kumar Barnwal:  <a href="mailto:manish@hack4bengal.tech">manish@hack4bengal.tech</a></li>
                            <li>Kajal Jaiswal:  <a href="mailto:kajalj181101@gmail.com">kajalj181101@gmail.com</a></li>
                        </ul>
                    </li>
                </ul>
                <p><span>We take all reports of Code of Conduct breaches
                    seriously and will take appropriate action to address the situation.</span>
                </p>
                <p><span>Winter of Code reserves the right to amend, make exceptions, or otherwise revise the policies either partially or fully.
                    If you have any questions regarding the policies, please contact us at
                </span><a href="mailto: dscnsecorg@gmail.com "> dscnsecorg@gmail.com </a><span></span></p>
            </div>
        </section>
    )
}

export default Coc