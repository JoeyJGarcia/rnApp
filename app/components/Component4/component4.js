import React, {Component} from 'react';
import {AppRegistry, View, Text, ListView, StyleSheet} from 'react-native';

const users = [
    {name: 'Joey Garcia'},
    {name: 'Molly Holmes'},
    {name: 'Terry Beck'},
    {name: 'Richard Keller'}        
];

export default class Component4 extends Component {
    constructor() {
        super();

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            usersDataSource: ds.cloneWithRows(users),
        };
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

AppRegistry.registerComponent('Component4', () => Component4);

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