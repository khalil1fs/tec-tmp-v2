package com.ana.test.bean;

import javax.persistence.*;

@Entity
@Table(name = "seccurcales")
public class Seccurcales {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String libelle;


    public Seccurcales() {
                   super();
           }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getLibelle() {
        return this.libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }



}