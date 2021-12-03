import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import SortingAlgorithms from '../pages/SortingAlgorithms'
import LinkedList from '../pages/LinkedList'
import BinarySearchTree from '../pages/BinarySearchTree'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/CacThuatToanSapXep' component={SortingAlgorithms} />
            <Route path='/DanhSachLienKet' component={LinkedList} />
            <Route path='/CayNhiPhanTimKiem' component={BinarySearchTree} />
        </Switch>
    )
}

export default Routes
