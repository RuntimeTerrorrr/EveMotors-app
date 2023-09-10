import DeleteCar from './ConfirmDeleteCar.jsx';
import { useState } from 'react';

export const DeleteCar = () => {

    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [deletedCarId, setDeletedCarId] = useState(null);

    const handleOpenDeleteDialog = (carId) => {
        setShowDeleteDialog(true);
        setDeletedCarId(carId);
    };

    const handleCloseDeleteDialog = () => {
        setShowDeleteDialog(false);
        setDeletedCarId(null);
    };

    const handleCarDeleted = () => {
        handleCloseDeleteDialog();
    };
    
    return (
        <div>
            <button onClick={() => handleOpenDeleteDialog(carId)}>Delete Car</button>

            {showDeleteDialog && (
                <DeleteCar
                    carId={deletedCarId}
                    onCancel={handleCloseDeleteDialog}
                    onDelete={handleCarDeleted}
                />
            )}
        </div>
    )
}

