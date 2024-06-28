import { Button, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useState } from 'react'

const Badge = (props) => {

    const [open, setOpen] = useState(false)
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        props.label ?
            <>
                <Chip 
                    label={props.label} 
                    onClick={handleClickOpen} 
                    sx={{ backgroundColor: props.color, color: 'white', fontFamily: 'Montserrat', zIndex: 10 }} 
                />
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Specifications"}
                    </DialogTitle>
                    <div className='flex w-full'>
                        <DialogContent className=''>
                            <DialogContentText id="service-tag-1">
                                Service Tag / SN  
                            </DialogContentText>
                            <DialogContentText id="make-2">
                                Make / Model 
                            </DialogContentText>
                            <DialogContentText id="ram-3">
                                RAM 
                            </DialogContentText>
                            <DialogContentText id="hdd-4">
                                HDD 
                            </DialogContentText>
                            <DialogContentText id="processor-5">
                                Processor 
                            </DialogContentText>
                            <DialogContentText id="vendor-6">
                                Vendor 
                            </DialogContentText>
                        </DialogContent>
                        <DialogContent>
                            <DialogContentText>
                                : 
                            </DialogContentText>
                            <DialogContentText>
                                : 
                            </DialogContentText>
                            <DialogContentText>
                                : 
                            </DialogContentText>
                            <DialogContentText>
                                : 
                            </DialogContentText>
                            <DialogContentText>
                                : 
                            </DialogContentText>
                            <DialogContentText>
                                : 
                            </DialogContentText>
                        </DialogContent>
                        <DialogContent>
                            <DialogContentText>
                                null
                            </DialogContentText>
                            <DialogContentText>
                                null
                            </DialogContentText>
                            <DialogContentText>
                                null
                            </DialogContentText>
                            <DialogContentText>
                                null
                            </DialogContentText>
                            <DialogContentText>
                                null
                            </DialogContentText>
                            <DialogContentText>
                                null
                            </DialogContentText>
                        </DialogContent>
                    </div>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </>
            : <></>
    )
}

export default Badge
