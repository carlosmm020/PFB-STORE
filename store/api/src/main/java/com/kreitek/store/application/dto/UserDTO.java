package com.kreitek.store.application.dto;

public class UserDTO {

    private Long id;
    private String nick;
    private String name;
    private String lastName;
    private String email;
    private Double phone;
    private String password;

    public UserDTO() {
    }

    public Long getId() {return id;}

    public void setId(Long id) {this.id = id;}

    public String getNick() {return nick;}

    public void setNick(String nick) {this.nick = nick;}

    public String getName() {return name;}

    public void setName(String firstName) {this.name = firstName;}

    public String getLastName() {return lastName;}

    public void setLastName(String lastName) {this.lastName = lastName;}

    public String getEmail() {return email;}

    public void setEmail(String email) {this.email = email;}

    public Double getPhone() {return phone;}

    public void setPhone(Double phone) {this.phone = phone;}

    public String getPassword() {return password;}

    public void setPassword(String password) {this.password = password;}
}
