CREATE PROCEDURE [dbo].[spGetContact]
	@Id int
AS
	SELECT 
		tblReservation.Id as ReservationId, 
		tblReservation.Description, 
		tblContact.Id, 
		tblContact.Name,
		tblContact.Birthdate,
		tblContact.PhoneNumber,
		tblContactType.Id as ContactTypeId,
		tblContactType.Name as ContactType
	FROM tblReservation
	LEFT JOIN tblContact ON tblReservation.Id = tblContact.ReservationId
	LEFT JOIN tblContactType ON tblContactType.Id = tblContact.ContactTypeId
	Where tblContact.Id = @Id
RETURN 0