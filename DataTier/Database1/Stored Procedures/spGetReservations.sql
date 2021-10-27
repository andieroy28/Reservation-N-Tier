CREATE PROCEDURE [dbo].[spGetReservations]	
AS
	SELECT 
		tblReservation.ID as ReservationId, 
		tblReservation.Description, 
		tblContact.Id, 
		tblContact.Name,
		tblContact.Birthdate,
		tblContact.PhoneNumber
	FROM tblReservation
	LEFT JOIN tblContact ON tblReservation.Id = tblContact.ReservationId
	ORDER BY tblReservation.Description
RETURN 0

