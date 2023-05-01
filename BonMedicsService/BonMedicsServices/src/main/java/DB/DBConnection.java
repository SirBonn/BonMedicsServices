/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DB;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author sirbon
 */
public class DBConnection {

    private static final String MYSQl_USER = "sirRoot";
    private static final String MYSQl_PASSWORD = "sirRoot8989_";
    private static final String MYSQl_URL = "jdbc:mysql://localhost:3306/medics_services";

    public static Connection getConnection() {

        Connection connection = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection(MYSQl_URL, MYSQl_USER, MYSQl_PASSWORD);
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println("Error " + e.getMessage());
        }

        return connection;
    }

    public static void close(Connection conecction) {
        try {
            conecction.close();

        } catch (SQLException ex) {
            ex.printStackTrace(System.out);
        }
    }

    public static void close(ResultSet resultSet) {
        try {
            resultSet.close();

        } catch (SQLException ex) {
            ex.printStackTrace(System.out);
        }
    }

    public static void close(PreparedStatement preparedStatement) {
        try {
            preparedStatement.close();

        } catch (SQLException ex) {
            ex.printStackTrace(System.out);
        }

    }
}
