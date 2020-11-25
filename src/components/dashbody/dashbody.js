import React, {useState} from 'react';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../ui/tabpanel/Tabpanel';
import scss from './dashbody.module.scss';
import {useMode} from '../../context';
import {handleStyle} from '../../helpers/helperFunctions';
import Project from '../project/project';


const ProjectTab = withStyles((theme) => ({
    root: {
        color: "#fff",
        textTransform: 'none',
        backgroundColor: '#1e272e',
        borderRadius: '10px 10px 0 0',
        fontSize: 28,
        fontWeight: 400,
        padding: "11px 22px",
      '&$selected': {
          backgroundColor: '#2a333b',
          color: 'white',
          fontWeight: 600,
      },
  },
  tab: {
    '&:hover': {
        fontWeight: 500
     }
  },
  selected: {
    backgroundColor: '#2a333b',
  },
  }))((props) => <Tab {...props} />)


const Dashbody = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  function a11yProps(index) {
    return {
      id: `wrapped-tab-${index}`,
    };
  }
    
    const {mode} = useMode();
    const scssArr = [scss['dashbody']];
    const styles = handleStyle(scssArr, mode, scss['light--mode']);
    return (

        <div className={styles}>
            <div className={scss['dashbody__title']}>
                <h2 className={scss['h3__txt']}>Dashboard</h2>
                <span className={scss['normal__txt']}>{moment().format('ddd')} {moment().format('L')}</span>
            </div>
            <Tabs centered onChange={handleChange} >
                <ProjectTab label="project 1" {...a11yProps(0)} />
                <ProjectTab label="project 2" {...a11yProps(1)} />
                <ProjectTab label="project 3" {...a11yProps(2)} />
            </Tabs>
            <TabPanel className={scss['tab--panel']} value={tabIndex} index={0}>
                <Project mode={mode} />
            </TabPanel>
            <TabPanel className={scss['tab--panel']} value={tabIndex} index={1}>
                project 2
            </TabPanel>
            <TabPanel className={scss['tab--panel']} value={tabIndex} index={2}>
                project 3
            </TabPanel>
            
        </div>
    )
}

export default Dashbody