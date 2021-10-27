CREATE PROCEDURE [dbo].[spGetContact]
	@Id int
AS
	SELECT 
		tblReservation.Id as ReservationId, 
		tblReservation.Description, 
		tblContact.Id, 
		tblContact.Name,
		tblContact.Birthdate,
		tblContact.PhoneNumber
	FROM tblReservation 
	LEFT JOIN tblContact ON tblReservation.Id = tblContact.ReservationId
	Where tblContact.Id = @Id
RETURN 0