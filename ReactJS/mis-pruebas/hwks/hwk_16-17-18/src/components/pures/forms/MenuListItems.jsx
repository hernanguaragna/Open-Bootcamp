import {List,ListItem, ListItemIcon,ListItemText} from '@mui/material';
import {Home,Settings,Task} from '@mui/icons-material';
import{useHistory} from 'react-router-dom'

const getIcon = (icon)=>{
    switch (icon) {
			case "HOME":
				return (<Home />);
			case "TASK":
				return (<Task />);
			case "SETTINGS":
				return (<Settings />);

			default:
				return (<Home />);
		}
}


const MenuListItems = ({list})=>{

    const history = useHistory();
    const navigate = (path) =>{
        history.push(path);
    }
    return(
        <List>
        {list.map((text, path,icon},index)=>
        </List>)

    )

}