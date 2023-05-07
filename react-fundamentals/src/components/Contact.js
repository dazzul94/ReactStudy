import React from "react";
import ContactInfo from "./ContactInfo";
import ContactDetails from "./ContactDetail";
import update from "react-addons-update";
import ContactCreate from "./ContactCreate";

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seletedKey: -1,
            keyword: '',
            contactData: [{
                name: 'Abet',
                phone: '010-0000-0001'
            }, {
                name: 'Betty',
                phone: '010-0000-0002'
            }, {
                name: 'Charlie',
                phone: '010-0000-0003'
            }, {
                name: 'David',
                phone: '010-0000-0004'
            }]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.handleCreate = this.handleCreate.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    
    componentWillMount() {
        const contactData = localStorage.contactData;

        if(contactData) {
            this.setState({
                contactData: JSON.parse(contactData)
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(JSON.stringify(prevProps.contactData) != JSON.stringify(prevState.contactData)) {
            localStorage.contactData = JSON.stringify(this.state.contactData);
        }
    }

    handleChange(e) {
        this.setState({
            keyword: e.target.value
        });
    };

    handleClick(key) {
        this.setState({
            seletedKey: key
        });
    };

    handleCreate(contact) {
        this.setState({
            contactData: update(this.state.contactData, {$push: [contact]})
        })
    };
    
    handleRemove() {
        if(this.state.seletedKey < 0) return;

        this.setState({
            contactData: update(this.state.contactData, {$splice: [[this.state.seletedKey, 1]]}),
            seletedKey: -1
        });
    };
    
    handleEdit(name, phone) {
        this.setState({
            contactData: update(this.state.contactData, 
                {
                    [this.state.seletedKey]: {
                        name: { $set: name },
                        phone: { $set: phone}
                    }
                }
            )
        });
    };

    render() {
        const mapToComponents = (data) => {
            data.sort();    // 오름차순 정렬
            data = data.filter(
                (contact) => {
                    return contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) > -1;
                }
            )
            return data.map((contact, i) => {
                return (<ContactInfo 
                            contact={contact} 
                            key={i} 
                            onClick={() => this.handleClick(i)}/>);
            })
        };
        return (
            <div>
                <h1>Contacts</h1>
                <input
                    name="keyword"
                    placeholder="Search"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />
                <div>{mapToComponents(this.state.contactData)}</div>
                <ContactDetails 
                    isSelected={this.state.seletedKey != -1}
                    contact={this.state.contactData[this.state.seletedKey]}
                    onRemove={this.handleRemove}
                    onEdit={this.handleEdit}
                />
                <ContactCreate
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}