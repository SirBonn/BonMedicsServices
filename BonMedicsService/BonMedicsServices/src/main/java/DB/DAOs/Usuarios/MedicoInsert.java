/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DB.DAOs.Usuarios;

import DB.DBConnection;
import DB.Domain.Usuarios.Usuario;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 *
 * @author sirbon
 */
public class MedicoInsert {

    private String SQL_INSERT = "INSERT INTO medicos (nombre, usuario, contrasena, CUI, telefono, "
            + "correo, direccion, fechaNacimiento) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    public int insertMedico(Usuario medico) {

        int tmp = -1;
        Connection connection = null;
        PreparedStatement preparedStatement = null;

        try {
            connection = DBConnection.getConnection();
            preparedStatement = connection.prepareStatement(SQL_INSERT);

            preparedStatement.setString(1, medico.getNombre());
            preparedStatement.setString(2, medico.getUsername());
            preparedStatement.setString(3, medico.getPassword());
            preparedStatement.setInt(4, medico.getCUI());
            preparedStatement.setInt(5, medico.getTelefono());
            preparedStatement.setString(6, medico.getCorreo());
            preparedStatement.setString(7, medico.getDireccion());
            preparedStatement.setDate(8, new java.sql.Date(medico.getFechaNacimiento().getTime()));

            tmp = preparedStatement.executeUpdate();
            System.out.println("Se agrego el medico " + medico);

        } catch (SQLException ex) {
            System.out.println("error al agregar un usuario" + ex.getSQLState());
            ex.printStackTrace(System.out);

        } finally {
            DBConnection.close(connection);
            DBConnection.close(preparedStatement);
        }
        return tmp;
    }
}
