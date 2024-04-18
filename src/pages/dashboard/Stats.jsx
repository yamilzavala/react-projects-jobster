import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../store/features/allJobs/allJobsThunks";
import {ChartsContainer, Loading, StatsContainer} from '../../components'

const Stats = () => {
    const dispatch = useDispatch();
    const {monthlyApplications, isLoading} = useSelector(store => store.allJobsState)

    useEffect(() => {
        dispatch(showStats())
    }, [])

    if(isLoading) return <Loading center/>

    return (
        <>
            <StatsContainer/>
            {monthlyApplications && <ChartsContainer/>}
        </>
    );
};

export default Stats;