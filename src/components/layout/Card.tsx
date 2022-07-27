import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export interface IIconStayle
{
    display? : string,
    justifyContent : string
}
function CardView(props : any) {
    const [iconStyle, setIconStyle] = useState<IIconStayle>({justifyContent:"" })

    useEffect(() => {
        console.log("Icon", props.forIcon);
        if (props.forIcon) {
            //setIconStyle({ })
        }
    }, [props.forIcon])
    return (
        <Card style={{ display: 'flex', justifyContent: 'center'}} sx={{ minWidth: 275 }} variant="outlined" >
            <CardContent>{props.children}</CardContent>
            <CardActions>
                {/* <Button size="small" onClick={(event)=>goToDepartmentCredentialDetailCard(event)}>Learn More</Button> */}
            </CardActions>
        </Card>
    );
}

export default CardView;
