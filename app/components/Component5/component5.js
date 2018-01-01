import React, {Component} from 'react';
import {AppRegistry, View, Text, ListView, StyleSheet} from 'react-native';


export default class Component5 extends Component {
    constructor() {
        super();

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            usersDataSource: ds,
        };
    }

    componentDidMount() {
        this.fetchusers();
    }

    fetchusers() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((response) => {
            this.setState({
                usersDataSource: this.state.usersDataSource.cloneWithRows(response)
            });
        })
    }

    renderRow(user, sectionId, rowId, highlightRow) {
        return (
            <View style={styles.row}>
                <Text style={styles.rowText}>{user.name}</Text>
            </View>
        )
    }

    render() {
        return(
            <View>
            <ListView
                dataSource={this.state.usersDataSource}
                renderRow={this.renderRow.bind(this)}
            />
            </View>
        );
    }
}

AppRegistry.registerComponent('Component5', () => Component5);

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#f4f4f4',
        marginBottom: 3
    },
    rowText: {
        flex: 1
    }
});