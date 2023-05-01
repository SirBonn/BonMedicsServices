/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DB.Domain.Usuarios;

import DB.DBConnection;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;

/**
 *
 * @author sirbon
 */
public class logSelect {

    private final String SQL_SELECT = "SELECT codigo, nombre, usuario, contrasena, CUI, telefono, correo, direccion, fechaNacimiento, saldo FROM ";

    public Usuario logearUsuario(Usuario usuario) {

        List<String> tables = Arrays.asList("administradores, pacientes, medicos, laboratorios");
        int lvl = 0;

        Connection connection = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;

        try {
            connection = DBConnection.getConnection();

            for (String table : tables) {

                String SQL_SELECT_BY_NAME = SQL_SELECT+ table + " WHERE usuario = ? AND contrasena=?";
                preparedStatement = connection.prepareStatement(SQL_SELECT_BY_NAME);
                preparedStatement.setString(1, usuario.getUsername());
                preparedStatement.setString(2, usuario.getPassword());
                resultSet = preparedStatement.executeQuery();

                while (resultSet.next()) {
                    int codigo = resultSet.getInt("codigo");
                    usuario.setCodigo(codigo);
                    String nombre = resultSet.getString("nombre");
                    usuario.setNombre(nombre);
                    String usr = resultSet.getString("usuario");
                    usuario.setUsername(usr);
                    String contrasena = resultSet.getString("contrasena");
                    usuario.setPassword(contrasena);
                    int CUI = resultSet.getInt("CUI");
                    usuario.setCUI(CUI);
                    int telefono = resultSet.getInt("telefono");
                    usuario.setTelefono(telefono);
                    String correo = resultSet.getString("correo");
                    usuario.setCorreo(correo);
                    String direccion = resultSet.getString("direccion");
                    usuario.setDireccion(direccion);
                    Date fechaString = resultSet.getDate("fechaNacimiento");
                    usuario.setFechaNacimiento(fechaString);
                    double saldo = resultSet.getDouble("saldo");
                    usuario.setSaldo(saldo);
                    usuario.setUserAcces(lvl);
                }
                lvl++;
            }

        } catch (SQLException ex) {
            ex.printStackTrace(System.out);

        } finally {

            DBConnection.close(connection);
            DBConnection.close(resultSet);
            DBConnection.close(preparedStatement);

        }

        return usuario;
    }

}
