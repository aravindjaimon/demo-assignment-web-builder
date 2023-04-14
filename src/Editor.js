import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Sidebar from './components/Sidebar'
import TopNav from './components/TopNav'
import PageSection from './components/PageSection'
import InsertComponentsTab from './components/InsertComponentsTab/InsertComponentsTab'
import InsertComponentsInfo from './components/InsertComponentsTab/InsertComponentsInfo'
import GrapeJsEditor from './components/GrapeJsEditor'
import useInsertComponent from './Context/InserComponent/useInsertComponent'

const Editor = () => {
	const {SelectedTab, setSelectedTab} = useInsertComponent()
	const { pageStore } = useSelector((state) => state)
	const { pages } = pageStore

	return (
		<div className="App">
			<TopNav  />
			<div className='wrapper justify-content-start align-items-start'>
				<div
					id="navbar"
					
					className="sidenav d-flex flex-column overflow-scroll "
				>
					<PageSection pages={pages} />
					{
						SelectedTab === "layout" && (
							<Sidebar />
						)
					}
					{
						SelectedTab === "insert" && (
							<InsertComponentsTab/>
						)
					}
				</div>
				<GrapeJsEditor SelectedTab={SelectedTab}/>
				{
					SelectedTab === "insert" && (
						<InsertComponentsInfo />
					)
				}
			</div>
		</div>
	)
}

export default Editor
