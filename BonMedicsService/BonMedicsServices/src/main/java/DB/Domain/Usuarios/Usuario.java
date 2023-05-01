/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DB.Domain.Usuarios;

import java.util.Date;

/**
 *
 * @author sirbon
 */
@lombok.Getter
@lombok.Setter
@lombok.ToString
@lombok.NoArgsConstructor

public class Usuario {

    private int codigo;
    private String nombre;
    private String username;
    private String password;
    private int telefono;
    private int CUI;
    private String correo;
    private String direccion;
    private Date fechaNacimiento;
    private int userAcces;
    private double saldo;

    //all args constructorcorreo
    public Usuario(int codigo, String nombre, String usuario, String contrasena, int telefono, int CUI, String correo, String direccion, Date fechaNacimiento, int userAcces, double saldo) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.username = usuario;
        this.password = contrasena;
        this.telefono = telefono;
        this.CUI = CUI;
        this.correo = correo;
        this.direccion = direccion;
        this.fechaNacimiento = fechaNacimiento;
        this.userAcces = userAcces;
        this.saldo = saldo;
    }

    //constructor excludes codigo
    public Usuario(String nombre, String usuario, String contrasena, int telefono, int CUI, String correo, String direccion, Date fechaNacimiento, double saldo) {
        this.nombre = nombre;
        this.username = usuario;
        this.password = contrasena;
        this.telefono = telefono;
        this.CUI = CUI;
        this.correo = correo;
        this.direccion = direccion;
        this.fechaNacimiento = fechaNacimiento;
        this.saldo = saldo;
    }

    //constructor only pasword n username
    public Usuario(String usuario, String contrasena) {
        this.username = usuario;
        this.password = contrasena;
    }
}
