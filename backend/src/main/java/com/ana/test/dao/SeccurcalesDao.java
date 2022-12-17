package com.ana.test.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ana.test.bean.Seccurcales;


@Repository
public interface SeccurcalesDao extends JpaRepository<Seccurcales,Long> {

   Seccurcales findByLibelle(String reference);
   void deleteByLibelle(String ref);


}