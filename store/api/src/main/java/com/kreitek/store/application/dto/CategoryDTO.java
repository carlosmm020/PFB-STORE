package com.kreitek.store.application.dto;

import java.io.Serializable;

public class CategoryDTO implements Serializable{
    private Long Id;
    private String name;
    private String Description;
    private byte[] image;

    public CategoryDTO() {
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }
}
