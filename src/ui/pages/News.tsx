import {FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {useAppSelector} from "../../bll/store";
import Article from "../components/Article";
import Typography from "@mui/material/Typography";
import React from "react";
import {useDispatch} from "react-redux";
import {ArticleType, setNewCategoryAC} from "../../bll/newsReducer";

export const News = () => {
    const news = useAppSelector(state => state.news.news)
    const category = useAppSelector(state => state.news.category)
    const dispatch = useDispatch()

    const handleChange = (event: SelectChangeEvent) => {
        dispatch(setNewCategoryAC(event.target.value as string))
    }

    return <>
        <Typography gutterBottom variant="h4" component="div">
            News
        </Typography>
        <FormControl size={"small"} fullWidth>
            <InputLabel id="label">Category</InputLabel>
            <Select labelId="label"
                    id="simple-select"
                    value={category}
                    label="Category"
                    onChange={handleChange}
            >
                <MenuItem value={'All'}>All</MenuItem>
                <MenuItem value={'Cars'}>Сars</MenuItem>
                <MenuItem value={'Economy'}>Economy</MenuItem>
                <MenuItem value={'IT'}>IT</MenuItem>
            </Select>
        </FormControl>
        <Grid container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start">
            {news.filter((art: ArticleType) => category !== 'All' ? art.category === category : art)
                .map((art: ArticleType) => <Article key={art.id} article={art}/>)}
        </Grid>
    </>
}