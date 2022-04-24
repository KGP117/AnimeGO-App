import React from 'react'
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';




const AddTo= () => {
    return (
        <Button
        variant="contained"
        color="grey"
        size="large"
        startIcon={<SaveIcon />}
        
      >
        Save
      </Button>
        
    )
}

export default AddTo;
