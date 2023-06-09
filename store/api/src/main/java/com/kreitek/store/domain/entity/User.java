package com.kreitek.store.domain.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nick;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private Double phone;

    @Column(nullable = false)
    private String password;


    public User() {
    }

    public Long getId() {return id;}

    public void setId(Long id) {this.id = id;}

    public String getNick() {return nick;}

    public void setNick(String nick) {this.nick = nick;}

    public String getName() {return name;}

    public void setName(String name) {this.name = name;}

    public String getLastName() {return lastName;}

    public void setLastName(String lastName) {this.lastName = lastName;}

    public String getEmail() {return email;}

    public void setEmail(String email) {this.email = email;}

    public Double getPhone() {return phone;}

    public void setPhone(Double phone) {this.phone = phone;}

    public String getPassword() {return password;}

    public void setPassword(String password) {this.password = password;}
}
