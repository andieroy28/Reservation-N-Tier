CREATE PROCEDURE [dbo].[spDeleteContact]
	@Id int
AS
	DELETE FROM tblContact WHERE Id=@Id
RETURN 0